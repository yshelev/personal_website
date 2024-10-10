function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let keys = []
let string_xyz = "KeyX,KeyY,KeyZ"

let coils_container = document.querySelector(".container_coils")

let links = [
    "https://www.youtube.com/watch?v=6FORO4Y4Two",
    "https://www.youtube.com/watch?v=m9vWjfe-nAA",
    "https://www.youtube.com/watch?v=19iN2eeM9sg",
    "https://youtu.be/Jh43Z-pvdrE?si=Zhtko9xe-n7wJkrZ",
    "https://youtu.be/katc6Z-fvow?si=IeDsttt-DZWNqpaS",
    "https://youtu.be/ZPcPHLFFsds?si=47-DK1HUVYxgRtAX"
]

const icons = coils_container.getElementsByClassName('coil_icon_container')

let zxc_permutations = [
    "KeyZ,KeyX,KeyC",
    "KeyZ,KeyC,KeyX",
    "KeyX,KeyZ,KeyC",
    "KeyX,KeyC,KeyZ",
    "KeyC,KeyX,KeyZ",
    "KeyC,KeyZ,KeyX",
]

let coils = [];
let dict_button_resource = {
    "KeyZ": "resources/z.png",
    "KeyX": "resources/x.png",
    "KeyC": "resources/c.png"
}
let index_of_current_zxc_string = 0;
let streak = 0;
let is_playing_in_minigame = false
let interval_start = null

let hidden_link = "https://mesenev.ru/"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function endMiniGame() {
    coils_container.classList.remove("on_game_started")
    window.open(links[Math.min(streak - 1, zxc_permutations.length - 1)], "blank_")
    is_playing_in_minigame = false
    index_of_current_zxc_string = 0
    streak = 0
    keys = []
    coils_container.innerHTML = `
    <img class="coil_icon_container" src=${dict_button_resource[coils[0]]} alt=""/>
    <img class="coil_icon_container" src=${dict_button_resource[coils[1]]} alt=""/>
    <img class="coil_icon_container" src=${dict_button_resource[coils[2]]} alt=""/>`
}

doc.addEventListener("keydown", (event) => {
    keys.push(event.code)
    if (coils.indexOf(event.code.toString()) >= 0) {
        icons[coils.indexOf(event.code.toString())].classList.add("clicked_animation")
    }
    if (keys.toString().indexOf(zxc_permutations[index_of_current_zxc_string]) >= 0 ) {
        if (is_playing_in_minigame) {
            if ((Date.now() - interval_start) / 1000 >= 4) {
                endMiniGame()
            }
        }

        sleep(400).then(() => {
            interval_start = Date.now()
            streak += 1
            if (streak === 1) {
                coils_container.classList.add("on_game_started")
                is_playing_in_minigame = true
            }
            index_of_current_zxc_string = getRandomInt(zxc_permutations.length)
            coils = zxc_permutations[index_of_current_zxc_string].split(",")

            coils_container.innerHTML =
                `
                <img class="coil_icon_container" src=${dict_button_resource[coils[0]]} alt=""/>
                <img class="coil_icon_container" src=${dict_button_resource[coils[1]]} alt=""/>
                <img class="coil_icon_container" src=${dict_button_resource[coils[2]]} alt=""/>
                `
            keys = []
        })



    } else if (keys.length >= 3 && is_playing_in_minigame) {
        endMiniGame()
    }

    if (keys.toString().indexOf(string_xyz) >= 0) {
        window.open(hidden_link, "blank_")
        keys = []
    }
})
