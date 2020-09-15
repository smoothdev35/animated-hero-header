gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin, SplitText);

scene = {
  up: document.querySelector("#upper-tree"),
  star: document.querySelector("#main-tree"),
  mask: document.querySelector(".overlay"),
  leaves: document.querySelectorAll(".leaf"),
  title: document.querySelector(".neo"),
  sub: document.querySelector(".sub"),
  move: document.querySelector(".move"),
  subWords: "",
  tL: gsap.timeline(),
  pathEls: document.querySelectorAll(".slot"),
  emptySlots: Array.from(document.querySelectorAll(".slot")),
  raw1: "",
  raw2: "",
  createRaw: () => {
    let path1 = scene.up.getAttribute("d");
    scene.raw1 = MotionPathPlugin.getRawPath(path1);
    let path2 = scene.star.getAttribute("d");
    scene.raw2 = MotionPathPlugin.getRawPath(path2);
  },
  applyToDom: (x, y) => {
    scene.emptySlots[x].setAttribute("d", y);
    gsap.set(scene.emptySlots[x], { drawSVG: 0 });
  },
  sliceUp: () => {
    let preUp1 = MotionPathPlugin.sliceRawPath(scene.raw1, 0.858, 0.915);
    let finalpath1 = MotionPathPlugin.rawPathToString(preUp1);
    scene.applyToDom(0, finalpath1);
    let preUp2 = MotionPathPlugin.sliceRawPath(scene.raw1, 0.95, 0.988);
    let finalpath2 = MotionPathPlugin.rawPathToString(preUp2);
    scene.applyToDom(1, finalpath2);
    let preUp3 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.77, 0.88);
    let finalpath3 = MotionPathPlugin.rawPathToString(preUp3);
    scene.applyToDom(2, finalpath3);
    let preUp4 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.94, 1);
    let finalpath4 = MotionPathPlugin.rawPathToString(preUp4);
    scene.applyToDom(3, finalpath4);
    let preUp5 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.07, 0.12);
    let finalpath5 = MotionPathPlugin.rawPathToString(preUp5);
    scene.applyToDom(4, finalpath5);
    let preUp6 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.235, 0.29);
    let finalpath6 = MotionPathPlugin.rawPathToString(preUp6);
    scene.applyToDom(5, finalpath6);
    let preUp7 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.33, 0.38);
    let finalpath7 = MotionPathPlugin.rawPathToString(preUp7);
    scene.applyToDom(6, finalpath7);
    let preUp8 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.42, 0.48);
    let finalpath8 = MotionPathPlugin.rawPathToString(preUp8);
    scene.applyToDom(7, finalpath8);
    let preUp9 = MotionPathPlugin.sliceRawPath(scene.raw2, 0.56, 0.61);
    let finalpath9 = MotionPathPlugin.rawPathToString(preUp9);
    scene.applyToDom(8, finalpath9);
  },
  splitSub: () => {
    let splitEl = new SplitText(scene.sub);
    scene.subWords = splitEl.chars;
  },
  draw: () => {
    gsap.set(scene.subWords, {
      opacity: 0,
      x: -5,
      y: 15,
      rotate: 45,
      transformOrigin: "0 0",
      onComplete: () => {
        gsap.set(scene.sub, { opacity: 1 });
      },
    });
    scene.title.classList.add("out");
    scene.title.addEventListener("animationend", (e) => {
      setTimeout(() => {
        e.target.classList.add("back");
        gsap.to(scene.subWords, {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          transformOrigin: "0 0",
          duration: 0.6,
          stagger: 0.06,
          onComplete: () => {
            setTimeout(() => {
              scene.move.classList.add("out");
            }, 750);
          },
        });
      }, 500);
    });
    scene.tL
      .fromTo(
        scene.emptySlots[2],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 }
      )
      .fromTo(
        scene.emptySlots[6],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[3],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[0],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[5],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[7],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[1],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[8],
        { drawSVG: "50% 50%" },
        { drawSVG: "100%", duration: 1.5 },
        ">-1.4"
      )
      .fromTo(
        scene.emptySlots[4],
        { drawSVG: "50% 50%" },
        {
          drawSVG: "100%",
          duration: 1.5,
          onComplete: () => {
            setTimeout(() => {
              scene.mask.classList.add("out");
              scene.tL
                .to(scene.leaves, {
                  scale: 0,
                  duration: 0.5,
                  stagger: { each: 0.05, from: "random" },
                })
                .to(scene.pathEls, { opacity: 0, duration: 1.75 }, ">-1.75");
            }, 250);
          },
        },
        ">-1.4"
      );
  },
};
scene.createRaw();
scene.sliceUp();
scene.splitSub();
setTimeout(() => {
  scene.draw();
}, 1000);
/*

*/
