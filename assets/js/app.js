gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main_section",
    pin: false,
    start: "10% 20%",
    end: "center center",
    markers: false,
    scrub: true,
  },
});

tl.fromTo(
  ".set_from",
  {
    y:"100%"
  },
  {
    y:"0"
  }
);