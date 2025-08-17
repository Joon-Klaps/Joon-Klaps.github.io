---
doi: 10.1101/2025.06.27.661954
title: 'nf-core/viralmetagenome: A Novel Pipeline for Untargeted Viral Genome Reconstruction'
journal: bioRxiv
pubDate: 2025-07-02
---

## Abstract

## Motivation

Eukaryotic viruses present significant challenges for genome reconstruction and variant analysis due to their extensive diversity and potential genome segmentation. While de novo assembly followed by reference database matching and scaffolding is a commonly used approach, the manual execution of this workflow is extremely time-consuming, particularly due to the extensive reference curation required. Here, we address the critical need for an automated, scalable pipeline that can efficiently handle viral metagenomic analysis without manual intervention.

## Results

We present nf-core/viralmetagenome, a comprehensive viral metagenomic pipeline for untargeted genome reconstruction and variant analysis of eukaryotic DNA and RNA viruses. Viral-metagenome is implemented as a Nextflow workflow that processes short-read metagenomic samples to automatically detect and assemble viral genomes, while also performing variant analysis. The pipeline features automated reference selection, consensus quality control metrics, comprehensive documentation, and seamless integration with containerization technologies, including Docker and Singularity. We demonstrate the utility and accuracy of our approach through validation on both simulated and real datasets, showing robust performance across diverse viral families in metage-nomic samples.

## Availability

nf-core/viralmetagenome is freely available at <jats:ext-link xmlns:xlink="http://www.w3.org/1999/xlink" ext-link-type="uri" xlink:href="https://github.com/nf-core/viralmetagenome">https://github.com/nf-core/viralmetagenome</jats:ext-link> with comprehensive documentation at <jats:ext-link xmlns:xlink="http://www.w3.org/1999/xlink" ext-link-type="uri" xlink:href="https://nf-co.re/viralmetagenome">https://nf-co.re/viralmetagenome</jats:ext-link>

## Contact

<jats:email>joon.klaps@kuleuven.be</jats:email>

## Supplementary information

Supplementary data are available at <jats:ext-link xmlns:xlink="http://www.w3.org/1999/xlink" ext-link-type="uri" xlink:href="https://github.com/Joon-Klaps/nf-core-viralmetagenome-manuscript">https://github.com/Joon-Klaps/nf-core-viralmetagenome-manuscript</jats:ext-link> online.


