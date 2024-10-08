function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let keys = []
let string_zxc = "KeyZ,KeyX,KeyC"
let string_xyz = "KeyX,KeyY,KeyZ"

let links = [
    "https://www.youtube.com/watch?v=6FORO4Y4Two",
    "https://www.youtube.com/watch?v=m9vWjfe-nAA",
    "https://www.youtube.com/watch?v=19iN2eeM9sg",
    "https://youtu.be/Jh43Z-pvdrE?si=Zhtko9xe-n7wJkrZ",
    "https://youtu.be/katc6Z-fvow?si=IeDsttt-DZWNqpaS",
    "https://youtu.be/ZPcPHLFFsds?si=47-DK1HUVYxgRtAX"
]

let hidden_link = "https://youtu.be/8Ze_-hh66-A?si=BVphApa622gryU7A"

doc.addEventListener("keydown", (event) => {
    keys.push(event.code)
    console.log(keys.toString())
    if (keys.toString().indexOf(string_zxc) >= 0 ) {
        window.open(links[getRandomInt(links.length)], "blank_")
        keys = []
    }

    if (keys.toString().indexOf(string_xyz) >= 0 ) {
        window.open(hidden_link, "blank_")
        keys = []
    }
})
