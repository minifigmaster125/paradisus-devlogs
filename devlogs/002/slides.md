# Project Paradisus <!-- .element: class="fragment" data-fragment-index="1" -->

Devlog 002  <!-- .element: class="fragment" data-fragment-index="2" -->

Note: This is Project Paradisus, devlog 2.

---

## Goal: <span style="color:#00ff99">Trail Drawing V1</span> 

1. Project trail where user clicks
2. Smooth segments
<img data-src="devlogs/002/assets/smoothed_trail.png" alt="Smoothed Trail" height="300px">

--

<!-- .slide: class="task-slide" -->

<p class="corner-note" style="color:#00ff99">trail drawing</p>

<div class="slide-body">
  <h3>Project Segments on Landscape Mesh</h3>
  <ul>
    <li>Trail encoded as points in a <code>Path3D</code> object</li>
  </ul>
  <div class="r-stack">
<img class="fragment" data-src="devlogs/002/assets/basic_trail.png" alt="Smoothed Trail" height="300px">
  <div class="fragment">
  <pre><code data-trim data-line-numbers="1-3|4-5|6-10" data-fragment-index="3" class="language-gdscript">
var centerline := _sample_curve_positions(_path.curve, max(0.05, sample_spacing))
for i in range(centerline.size()):
    var center_hit := _project_down(center)
    var tangent := _compute_tangent(centerline, i)
    var lateral := center_normal.cross(tangent).normalized()
    var left_candidate := center_pos + lateral * half_width
    var right_candidate := center_pos - lateral * half_width
    var left_hit := _project_down(left_candidate)
    var right_hit := _project_down(right_candidate)
  </code></pre>
  </div>
<img class="fragment" data-after-code-fragments="true" data-src="devlogs/002/assets/basic_trail.png" alt="Smoothed Trail" height="300px">
  </div>
</div>

---

whole presentation including links in Github, check description.
