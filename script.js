let imgs = document.getElementsByClassName("animated-img");

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            console.log(entry);
        }
    });
});

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

