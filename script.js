let imgs = document.getElementsByClassName("animated-img");
let sections = document.querySelectorAll("section")

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            //console.log(entry);
        }
    });
});


const ratioLimit = 0.522
const sectObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            //document.querySelector(`[href*='#${entry.target.id}']`).classList.remove("active")
            console.log(entry.target.id, entry.intersectionRatio)
        if (entry.isIntersecting && entry.intersectionRatio >= ratioLimit) {
            document.querySelector(`[href*='#${entry.target.id}']`)?.classList.add("active")
        } else {
            document.querySelector(`[href*='#${entry.target.id}']`)?.classList.remove("active")
            //document.querySelectorAll("#header>a")
        }
    })
}, {threshold: [0.25, ratioLimit, 0.75]})

for (let img of imgs) {
    obs.observe(img);
    /*
    img.addEventListener("mousemove", (ev) =>{
        let x = Math.max(ev.clientX, 1);
        let y = Math.max(ev.clientY, 1);
        img.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    })
    */
}

for (let section of sections) {
    sectObs.observe(section)
}
