# animated-hero-header

  
  - Stand-alone: https://animated-hero-header.netlify.app
  
  - Codepen: https://codepen.io/smoothdev35/pen/ZEbzrKV




This is a creative experiment around the idea of a "hero" header. Since full-screen large media (picture/video) is a common trend, 
I wanted to use my favorite combination, svg + gsap, to add some texture and motion to said "hero" picture. 

The chosen picture is one of a beautiful tree in the forest, with its branches organized in such a way that it looks like the tree is "walking". 
With an evident theme to work with, I started with a red-orange color since it felt like a nice combination between the natural themes-friendly
red/brown and a brighter orange color, known to evoke feelings of dynamism and enthusiasm, a perfect pair for a moving design!

The animation uses the core gsap library as well as three paid plugins, namely DrawSVGPlugin, MotionPathPlugin and SplitText,
which are free to use on the codepen website, but I can't include the plugin in the js folder here since all greensock files are subject to their own license.
I purchased a paid plan, so the live demo is in agreement with the license terms.

To get everything ready, I needed several elements. The outline shape of the tree in the picture as a svg path (I used GIMP for this), 
which requires to be "cut" into several segments I use to make it look like the tree is being drawn from several positions. 
I used the MotionPathPlugin to achieve this. Note there are a few consecutive steps to follow with the plugin built-in methods:

  1 - Get the "d" attribute from the path element, which are the svg coordinates. It was easier for me to extract two separate shapes from
  the original picture, so the cutout operation is distributed between the two.
  
  2 - Use getRawPath to have the coordinates as an array ready to manipulate (with the other built-in methods).
  
  3 - Use sliceRawPath to cut out and return as many segments as I need on desired positions
  
  4 - Use rawPathToString to return actual svg coordinates, then put the respectivecoordinates in the "d" attribute of several empty paths 
  I placed previously on the html.
  Note the empty paths are all in their own div container, because it makes the segments both responsive and easier to position.
  
  5 - Use DrawSVGPlugin to draw each segment from its center to achieve the "self-drawing" sequence.
  
Then, I also isolated a leaf shape, wich I used to place several "leaves" on top of my red-orange background. I used the same color to fill my shapes, 
so my "leaves" appear invisible. The sequence is simple: I have my "leaves" randomly scale to 0 with a little delay between each (stagger) as my background 
fades to 0 opacity, in order to add motion and texture to the reveal effect.

With all that ready to go, I placed both my initial tree shape and my leaf shape as paths inside the defs tag, so I can reference them in my js 
to execute the steps mentioned above without rendering them on my page.

Next, add the fancy text reveal effect. I have to give credit to Mandy Michael here, she was the one to come up with the "Growing Grassy Text",
as titled in her original pen: https://codepen.io/mandymichael/pen/YYaWop.
The effect wouldn't be possible without the emergence of Variable Fonts, 
in this case the astonishingly well-crafted Decovar Font by David Berlow: https://www.typenetwork.com/brochure/decovar-a-decorative-variable-font-by-david-berlow#?skelID=SA&skel=1&termID=TA&term=1.

So, once I have my html with my background picture, my background/leaves as one color on top and my invisible text ready to animate into view, 
the final organization for the entire sequence comes in this order:

  1 - Create the main timeline.
  
  2  - Simultaneously add the "self-drawing" sequence to the main timeline while having the main text appear as if behind the background (filling it with the bg color), then showing the grass effect.
  
  3 - Add the picture reveal (background & leaves) sequence to the main timeline at the same time we have the text "morph out" of its grassy texture, followed by the animation of secondary text with a nested gsap call.
  
  
  I hope you enjoy this demo, 
  Feel free to share and modify as you please, but remember all greensock files (plugins) are subject to their own license!





  
 




