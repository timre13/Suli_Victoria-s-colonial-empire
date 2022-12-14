const imgs = document.getElementsByClassName("animated-img");
const sections = document.querySelectorAll("section");
const uls = document.querySelectorAll("ul[class='animate']");
const intro = document.getElementById("intro");
const menuButton = document.getElementById("menu-button");
const body = document.getElementById("body");

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            //console.log(entry);
        }
    });
});

const ratioLimit = 0.522;
const sectObs = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            //document.querySelector(`[href*='#${entry.target.id}']`).classList.remove("active")
            //console.log(entry.target.id, entry.intersectionRatio)
            if (entry.isIntersecting && entry.intersectionRatio >= ratioLimit) {
                document.querySelector(`[href*='#${entry.target.id}']`)?.classList.add("active");
            } else {
                document.querySelector(`[href*='#${entry.target.id}']`)?.classList.remove("active");
                //document.querySelectorAll("#header>a")
            }
        });
    },
    { threshold: [0.25, ratioLimit, 0.75] }
);

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
    sectObs.observe(section);
}

const ulObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let ul = entry.target;
            for (i = 0; i < ul.children.length; ++i) {
                ul.children[i].style.animationDelay = `${i * 100 + 300}ms`;
                ul.children[i].style.animationPlayState = "running";
            }
        }
    });
});

for (let ul of uls) {
    ulObs.observe(ul);
}

let slideMenu;

menuButton.addEventListener("click", async () => {
    if (!slideMenu) {
        slideMenu = menuTemplate.content.cloneNode(true);
        body.insertBefore(menuTemplate.content.cloneNode(true), intro);
    } else {
        const elem = document.getElementById("slide-menu");
        elem.classList.remove("add");
        elem.classList.add("delete");
        await new Promise(res => setTimeout(res, 499));
        elem.remove();
        slideMenu = undefined;
    }
});
