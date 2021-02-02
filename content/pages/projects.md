# Projects

Here you will find a non-exhaustive list of projects I worked on (during my studies or in my free time).

### Mirror and lens design using semi-discrete optimal transport

During my PhD, I worked on developing an efficient algorithm for designing mirrors and lenses with prescribed source and target illuminations. The method is based on semi-discrete optimal transport and its close relation with computational geometry. In the end, we developed a method for computing such optical components in the far-field and near-field settings. More details can be found in my [PhD thesis](https://hal.archives-ouvertes.fr/tel-02135220).  Part of the code is available [here](https://github.com/nyorem/sdot). The other part may be available in the future.

<center>
    <img src="/assets/images/lens_train.jpg" alt="Lens design" width="60%">
</center>

### Adaptive point cloud denoising

During my master's degree, I was interested in developing an algorithm to simulate anisotropic mean curvature flows on point clouds.  We show that we can approximate the mean curvature vector by taking the gradient of the function that computes the volume of a union of balls centered at the points.  The main application is the anisotropic smoothing of point clouds in 2D and 3D.  The code can be found [here](https://github.com/nyorem/point-cloud-denoising) and my master's thesis [here](https://github.com/nyorem/point-cloud-denoising/raw/master/report/report.pdf).

<center>
    <img src="/assets/images/point-cloud-denoising.png" alt="Adaptive point cloud denoising" width="60%">
</center>

### Procedural submarine generation and rendering

OpenGL and CUDA demo scene that features animated bubbles as a CUDA particle system with procedural sprites, animated seaweeds as a CUDA mass-spring system, animated water and real time procedural terrain and cave generation (using a shader-based marching cubes algorithm).  The code can be found [here](https://github.com/Poulpy21/3d).

*Team members:* [Jocelyn Meyron](/), [Jean-Baptiste Keck](https://www-ljk.imag.fr/membres/Jean-Baptiste.Keck/), [Gauthier Zirnhelt](https://www.linkedin.com/in/gzirnhelt/)

<center>
    <img src="/assets/images/submarine.png" alt="Submarine" width="60%">
</center>

### Computational geometry in Haskell

I also developed a simple library in Haskell for doing computational geometry in 2D. It includes the following algorithms:

- convex hull,
- triangulation of a convex polygon,
- triangulation of a point set.

The code (along with a simple OpenGL viewer) can be found [here](https://github.com/nyorem/cghs).
