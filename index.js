var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: "true",
    // markers: "true",
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "5%",
  },
  "orange"
);

tl.to(
  "#orangeslice",
  {
    top: "155%",
    left: "25%",
  },
  "orange"
);
tl.to(
  "#oranges",
  {
    width: "17%",
    top: "149%",
    right: "0%",
  },
  "orange"
);

tl.to(
  "#leaf",
  {
    top: "95%",
    left: "83%",
    rotate: "-30deg",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "100%",
    right: "83%",
    rotate: "-120deg",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: "true",
    // markers: "true",
  },
});

tl2.from(
  "#spritecan ",
  {
    rotate: "-90deg",
    left: "-50%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#cocacolacan ",
  {
    rotate: "90deg",
    right: "-50%",
    top: "110%",
  },
  "ca"
);
tl2.to("#fanta",{
    width:"35%",
    top: "220%",
    left: "33%",
}, 'ca')
tl2.to("#orangeslice",{
    top: "205%",
    left: "43%",
}, 'ca')