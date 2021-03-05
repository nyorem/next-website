---
title: Research
---

# Research

### Research interests

- Computational geometry: Voronoi diagrams, geometric inference...
- Optimal transport: semi-discrete methods, Laguerre diagrams...
- Non-imaging optics: mirror and lens design with prescribed target illumination density
- Digital geometry: normal estimation, plane-probing algorithms, surface reconstruction...
- Pattern generation: multi-dimensional continued fractions, generalized substitutions...

### Publications

Listed in chronological order starting with the most recent:

- [An Optimized Framework for Plane-Probing Algorithms](https://link.springer.com/article/10.1007%2Fs10851-020-00965-6)  
Jacques-Olivier Lachaud, Jocelyn Meyron, Tristan Roussillon  
Journal of Mathematical Imaging and Vision, [doi](https://doi.org/10.1007/s10851-020-00965-6)  
Preprint: [hal](https://hal.archives-ouvertes.fr/hal-02879784/file/2020JMIV.pdf).  
We describe a general framework for computing the normal to a digital plane using the so-called plane-probing algorithms. These algorithms are able to recover the normal using only a predicate "is a point x in the digital plane?". In this work, we unify multiple of these algorithms while showing that we preserve their main features (for instance their complexity). We also show its usefulness in the context of digital surface analysis.

- [Initialization procedures for discrete and semi-discrete optimal transport](https://www.sciencedirect.com/science/article/pii/S0010448519301770)  
Jocelyn Meyron,  
Computer-Aided Design, [doi](https://doi.org/10.1016/j.cad.2019.05.037)  
[Preprint](/assets/articles/2019_initialization_ot.pdf).  
We explain why it is important (and even necessary in some settings) to choose good initial weights in discrete and semi-discrete optimal transport algorithms. To that end, we introduce three different methods to such weights: local perturbation, linear interpolation and rescaling. We apply these methods to different problems involving optimal transport such as non-imaging optics, rigid point cloud registration on a mesh and seismic imaging.

- [Light in Power: A General and Parameter-free Algorithm for Caustic Design](https://dl.acm.org/citation.cfm?doid=3272127.3275056)  
Quentin Mérigot, Jocelyn Meyron, Boris Thibert,  
Accepted at SIGGRAPH ASIA 2018,  
ACM Transaction on Graphics (TOG, Proc SIGGRAPH Asia), [doi](https://doi.org/10.1145/3272127.3275056)  
Preprint: [arXiv](https://arxiv.org/abs/1708.04820), [hal](https://hal.archives-ouvertes.fr/hal-01570739).  
We show how, using optimal transport, one can recast many different inverse problems arising in optics into solving a non-linear system of equations namely a discrete version of the so-called *Monge-Ampère* equation. Many simulated and fabricated results are presented.

- [An algorithm for optimal transport between a simplex soup and a point cloud](https://epubs.siam.org/doi/abs/10.1137/17M1137486)  
Quentin Mérigot, Jocelyn Meyron, Boris Thibert,  
SIAM Journal on Imaging Sciences (SIIMS), [doi](https://doi.org/10.1137/17M1137486)   
Preprint: [arXiv](https://arxiv.org/abs/1707.01337), [hal](https://hal.archives-ouvertes.fr/hal-01556544).  
We prove the convergence of a damped Newton's method to solve the optimal transport problem between a source probability measure supported on a finite union of simplices and a finitely supported target probability measure.  Applications include optimal quantization of triangulated surfaces, point set registration on a mesh or remeshing.

### PhD Thesis

- Title: Semi-discrete optimal transport and applications in non-imaging optics
- Manuscript: [hal](https://hal.archives-ouvertes.fr/tel-02135220)
- Defended on 16th October 2018

