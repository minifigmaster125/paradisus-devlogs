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

## Goal: Make a v1 <span style="color:#00ff99">contour map</span> 
1. Make a landscape
2. Build a heightmap by sampling height at regular intervals
3. Use marching squares convert heightmap to contour map

--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">Make a Contour Map</p>

<div class="slide-body">
  <h3>Make Landscape</h3>
  <ol>
    <li><a href="https://www.youtube.com/watch?v=Xqb-nR9J2Cs">Watch a tutorial </a>
    </li>
    <li>Try it.</li>
    <li>Iterate (later, as needs evolve and concept becomes clearer).</li>
  </ol>
  <img src="devlogs/001/assets/oops.png" height="300"/>
</div>

--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">Make a contour map</p>

<div class="slide-body">
  <h3>Build a Heightmap</h3>
  <ol>
    <li>Sample heights by shooting rays from above</li>
    <li>Write heights to texture</li>
  </ol>
  <img src="devlogs/001/assets/oops.png" height="300"/>
</div>


--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">Make a contour map</p>

<div class="slide-body">
  <h3>Build Contour Map</h3>
  <div style="display:flex;flex-direction:row;gap:20px">
  <ol>
    <li>For a height <i>H</i>, traverse heightmap, build binary map of which pixels are above or below H</li>
    <li>Apply <a href="https://en.wikipedia.org/wiki/Marching_squares">Marching Squares</a> to binary map</li>
    <li>Draw lines</li>
    <li>Repeat for height you want a line at </li>
  </ol>
  <img src="devlogs/001/assets/oops.png" height="300"/>
  </div>
</div>

---

### Goal: Overlay a v1 <span style="color:#0099ff">fall line map</span> 
#### wut
- The path that water would take down a hill i.e the steeping slope
- Trails that align too closely to the fall line risk erosion.
--
<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#0099ff">Overlay a fall line map</p>

<div class="slide-body">
<ol>
<li>
Use heightmap to find maximum gradient descent
</li>
<li>
Tweak visuals
</li>
</ol>
</div>
---

---

## Game translation

Real trail principle:

> Water running down the trail causes erosion.

Game mechanic:

> Trails aligned with the fall line accumulate “damage risk.”

---

## What changed in the prototype

- Added contour overlay
- Started gradient sampling
- Tested fall-line visualization

---

## What I’m unsure about

- How much should the player know upfront?
- Should bad trail choices fail immediately or degrade over time?
- Should feedback be visual, numerical, or visitor-driven?

---

## Next two weeks

- Draw trail ribbons over terrain
- Score trail grade against hillside slope
- Show erosion risk preview
