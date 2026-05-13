# Project Paradisus <!-- .element: class="fragment" data-fragment-index="2" -->

Devlog 001  <!-- .element: class="fragment" data-fragment-index="1" -->

Note:  Alright, welcome everybody. This is Devlog 001 for Project Paradisus. What's it about? Well, if you said paradise, you'd be wrong, but I'd understand.

---

## Paradisus = Park 

- A game about designing natural parks
- think Roller Coaster Tycoon, but less sim and more cozy?
- [Inspired by a video from Vox](https://www.youtube.com/watch?v=oFIdIVngeYA)
  <img data-src="devlogs/001/assets/vox_hiking_trails.png" alt="Vox hiking trails" height="300px">

Note: It's a game about desigining natural parks. I stumbled upon this video from Vox a couple of years ago, which spawned an idea that I tucked away until I felt more comfortable tackling it.
---

## Gameplay loop (maybe) 

- Examine the natural landscape
- Mark POI, hazard etc.
- Design trails according to good conventions
- Respond to patron behavior, weather events, etc?
- [USDA Trail Maintenance and Construction Guidebook](https://www.fs.usda.gov/sites/default/files/fs_media/fs_document/trail-maintenance-notebook.pdf)

Note: I have the concept of a plan, and I'm sure things are bound to change. There are a lot of decisions in trail design. Distilling the fun from the mundane will be a part of the exploration. 
---
## Getting the feet wet

Start off doing anything interesting
* Contour map
* Fall line

Note: There is no right way to make a game. There are faster ways, sure, but you have to do what keeps you going.
---

## Goal: Make a v1 <span style="color:#00ff99">contour map</span> 
1. Make a landscape
2. Build a heightmap by sampling height at regular intervals
3. Use marching squares convert heightmap to contour map
<img src="devlogs/001/assets/topographic_map.webp" height="300">
<img src="devlogs/001/assets/topographic_maps_2.jpg" height="300">

--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">make a contour map</p>

<div class="slide-body">
  <h3>Make Landscape</h3>
  <ol>
    <li><a href="https://www.youtube.com/watch?v=Xqb-nR9J2Cs">Watch a tutorial </a>
    </li>
    <li>Try it.</li>
    <li>Iterate (later, as needs evolve and concept becomes clearer).</li>
  </ol>
    <img src="devlogs/001/assets/test_landscape.png" height="300">
</div>

--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">make a contour map</p>

<div class="slide-body">
  <h3>Build a Heightmap</h3>
  <ol>
    <li>Sample heights by shooting rays from above</li>
    <li>Write heights to texture</li>
  </ol>
  <div style="display:flex;flex-direction:row;gap:30px;align-items:center">
    <img src="devlogs/001/assets/test_landscape.png" height="300">
    <p> => </p>
    <img src="devlogs/001/assets/heightmap.png" height="300"/>
  </div>
</div>


--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">make a contour map</p>

<div class="slide-body">
  <h3>Build Contour Map</h3>
  <ol>
    <li>For a height <i>H</i>, traverse heightmap, build binary map of which pixels are above or below H</li>
    <li>Apply <a href="https://en.wikipedia.org/wiki/Marching_squares">Marching Squares</a> to binary map</li>
    <li>Draw lines</li>
    <li>Repeat for each height you want a line at </li>
  </ol>
  <div style="display:flex;flex-direction:row;gap:30px;align-items:center">
    <img src="devlogs/001/assets/heightmap.png" height="200">
    <p> => </p>
    <img src="devlogs/001/assets/binarymap.png" height="200"/>
    <p> => </p>
    <img src="devlogs/001/assets/marching squares.png" height="200"/>
    <p> => </p>
    <img src="devlogs/001/assets/contourmap.png" height="200"/>
  </div>
</div>

---

### Goal: Overlay a v1 <span style="color:#0099ff">fall line map</span> 
- *Fall Line*: Given a location at elevation, the path that water would take downhill i.e the steepest slope
- Trails that align too closely to the fall line risk erosion.
- Should be perpendicular to contour lines

<img src="devlogs/001/assets/fall_line_map.jpg" height="200"/>
<p style="font-size:1rem;padding-top:0;margin-top:-20px">Contour map overlayed by a fall line (indicated in red)</p>
--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#0099ff">Overlay a fall line map</p>

<div class="slide-body">
<ol>
<li>
Use heightmap to find maximum gradient descent
$$
d_x=\frac{h(x_0+1,y_0)-h(x_0-1,y_0)}{2},\quad
d_y=\frac{h(x_0,y_0+1)-h(x_0,y_0-1)}{2}
$$
$$
\vec d_{\text{steepest}}(x_0,y_0)=
-\frac{(d_x,d_y)}{\sqrt{d_x^2+d_y^2}}
$$

</li>
<li>
Draw onto contour map
</li>
<li>
Tweak visuals
</li>
</ol>
  <div style="display:flex;flex-direction:row;gap:10px;align-items:center">
    <img src="devlogs/001/assets/heightmap.png" height="300">
    <p> => </p>
    <img src="devlogs/001/assets/bad_fall_overlay.png" height="300"/>
    <p> => </p>
    <img src="devlogs/001/assets/better_fall_overlay.png" height="300"/>
  </div>
</div>
---

## Ongoing thoughts

Figure out what the "game" actuallly is


* what % management sim, what % cozy designer?
* what decisions are actually fun to make vs what is tedious?
  * e.g. Trail design can change based on soil type. Is that ... interesting or too much?
* only prototyping will tell

Note: technical challenges are interesting, but nobody plays a game because it was interesting to build. 

---

whole presentation including links in Github, check description.


