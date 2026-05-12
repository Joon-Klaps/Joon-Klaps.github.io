---
doi: 10.1093/bioinformatics/btag187
title: 'nf-core/viralmetagenome: A novel pipeline for untargeted viral genome reconstruction'
journal: Bioinformatics
pubDate: 2026-04-29
---

## Abstract

## Motivation

Reconstructing eukaryotic viral genomes from metagenomic data is challenging due to their extensive diversity and potential genome segmentation. Current approaches often rely on labor-intensive manual curation for reference selection and scaffolding, limiting scalability for large studies or rapid outbreak response. We address the critical need for an automated, scalable pipeline for efficient viral metagenomic analysis without manual intervention.

## Results

We present nf-core/viralmetagenome, a comprehensive Nextflow pipeline for the untargeted reconstruction and variant analysis of eukaryotic DNA and RNA viruses from short-read metagenomic or hybridisation capture enriched samples. The pipeline automates the entire process from read preprocessing to consensus generation, integrating multiple de novo assemblers, automated reference selection, and iterative consensus refinement. It features robust quality control, extensive documentation, and seamless portability via Docker and Singularity. We validated the pipeline on diverse simulated and real datasets, demonstrating its ability to recover high-quality genomes from complex metagenomic samples and resolve co-infections, making it a powerful tool for viral surveillance.

## Availability

nf-core/viralmetagenome is freely available at https://github.com/nf-core/viralmetagenome with comprehensive documentation at https://nf-co.re/viralmetagenome. Archival code repository snapshots are published at zenodo with doi: https://doi.org/10.5281/zenodo.17524074.


