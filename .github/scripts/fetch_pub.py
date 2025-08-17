#!/usr/bin/env python

from Bio import Entrez
import xml.etree.ElementTree as ET
import sys
import os
import json

# Get email from environment variable
Entrez.email = os.getenv("ENTREZ_EMAIL", "your.email@example.com")


def fetch_publications_with_dois(author_name: str, max_results: int = 100) -> list[str]:
    """Fetch publications for an author and extract DOIs"""

    # Step 1: Search for publications
    search_handle = Entrez.esearch(
        db="pubmed",
        term=f"{author_name}[Author]",
        retmax=max_results,
        sort="date"
    )
    search_results = Entrez.read(search_handle)
    search_handle.close()

    pmids = search_results["IdList"]

    if not pmids:
        print(f"No publications found for {author_name}", file=sys.stderr)
        return []

    # Step 2: Fetch publication details
    fetch_handle = Entrez.efetch(
        db="pubmed",
        id=",".join(pmids),
        rettype="xml",
        retmode="xml"
    )

    # Step 3: Parse XML and extract DOIs
    xml_data = fetch_handle.read()
    fetch_handle.close()

    root = ET.fromstring(xml_data)
    dois = []

    for article in root.findall(".//PubmedArticle"):
        # Look for DOI in ArticleIdList
        article_ids = article.findall(".//ArticleIdList/ArticleId")
        for article_id in article_ids:
            if article_id.get("IdType") == "doi":
                dois.append(article_id.text)
                break

    return dois


def main():
    """Main function to fetch and output DOIs for Joon Klaps publications."""
    author_name = "Joon Klaps"
    dois = fetch_publications_with_dois(author_name)

    with open("src/publications.json", "r", encoding="utf-8") as f:
        previous_dois = json.load(f).keys()

    # Output DOIs one per line for use in CI workflow
    for doi in dois:
        if doi not in previous_dois:
            print(doi)

    if not dois:
        print("No DOIs found", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()