const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const videoconAnimation = () => {
    const videocon = document.querySelector(".video-container")
    const playbtn = document.querySelector(".play")
    videocon.addEventListener("mouseenter", () => {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", () => {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    videocon.addEventListener("mousemove", (dets) => {
        gsap.to(playbtn, {
            left: dets.x - 20,
            top: dets.y - 60
        })
    })
}
videoconAnimation()

const loadingAnimation = () => {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: .5,
        duration: .9,
        stagger: .3
    })
    gsap.from(".page1 .video-container", {
        scale: .9,
        opacity: 0,
        delay: 1.3,
        duration: .3,
    })
}
loadingAnimation()