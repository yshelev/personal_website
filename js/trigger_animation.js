let intro_container = document.querySelector(".intro")

let doc = document.querySelector(":root")

console.log(doc)
console.log(intro_container)

doc.addEventListener("keydown", (event) => {
    console.log(event, event.code)
    if (event.code === 'Space') {
        intro_container.classList.add("anim")
    }

    setTimeout(() => {
        intro_container.classList.remove("anim")
    }, 100)
})