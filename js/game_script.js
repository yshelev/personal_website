function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let keys = []
let string_xyz = "KeyX,KeyY,KeyZ"

let links = [
    "https://www.youtube.com/watch?v=6FORO4Y4Two",
    "https://www.youtube.com/watch?v=m9vWjfe-nAA",
    "https://www.youtube.com/watch?v=19iN2eeM9sg",
    "https://youtu.be/Jh43Z-pvdrE?si=Zhtko9xe-n7wJkrZ",
    "https://youtu.be/katc6Z-fvow?si=IeDsttt-DZWNqpaS",
    "https://youtu.be/ZPcPHLFFsds?si=47-DK1HUVYxgRtAX"
]

let zxc_permutations = [
    "KeyZ,KeyX,KeyC",
    "KeyZ,KeyC,KeyX",
    "KeyX,KeyZ,KeyC",
    "KeyX,KeyC,KeyZ",
    "KeyC,KeyX,KeyZ",
    "KeyC,KeyZ,KeyX",
]

let index_of_current_zxc_string = 0;
let streak = 0;
let is_playing_in_minigame = false
let interval_start = null

let hidden_link = "https://youtu.be/8Ze_-hh66-A?si=BVphApa622gryU7A"

function endMiniGame() {
    window.open(links[Math.min(streak - 1, zxc_permutations.length - 1)], "blank_")
    is_playing_in_minigame = false
    index_of_current_zxc_string = 0
    streak = 0
    keys = []
}

doc.addEventListener("keydown", (event) => {
    keys.push(event.code)
    if (keys.toString().indexOf(zxc_permutations[index_of_current_zxc_string]) >= 0 ) {
        if (is_playing_in_minigame) {
            if ((Date.now() - interval_start) / 1000 >= 3) {
                endMiniGame()
            }
        }

        interval_start = Date.now()
        streak += 1
        if (streak === 1) {
            is_playing_in_minigame = true
        }
        index_of_current_zxc_string = getRandomInt(zxc_permutations.length)
        console.log(zxc_permutations[index_of_current_zxc_string])
        keys = []
    }

    else if (keys.length >= 3 && is_playing_in_minigame) {
        endMiniGame()
    }

    if (keys.toString().indexOf(string_xyz) >= 0 ) {
        window.open(hidden_link, "blank_")
        keys = []
    }
})
