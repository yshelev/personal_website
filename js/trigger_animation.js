let intro_container = document.querySelector(".intro")

let doc = document.querySelector(":root")

doc.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        intro_container.classList.add("anim__space")
    }

    setTimeout(() => {
        intro_container.classList.remove("anim__space")
    }, 100)
})