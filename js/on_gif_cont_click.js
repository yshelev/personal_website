const AUDIO_PATH = "../audio/"

let button_play = document.querySelector(".gif_container")
let cursed_container = document.querySelector(".vertical_container_cursed")
let is_playing = false;

let current_audio_index = 0;

let audios = [
    new Audio(AUDIO_PATH + "zxcursed.mp3"),
    new Audio(AUDIO_PATH + "cupsize_bus.mp3"),
    new Audio(AUDIO_PATH + "cupsize_love_me_alina.mp3")
]

audios[0].loop = false

audios.forEach((audio) => audio.volume = .1)
audios[0].volume = 1;

let first_time_played = true

button_play.addEventListener("click", () => {
    if (first_time_played) {
        first_time_played = false
        button_play.classList.add("block_hover")
        intro_container.classList.add("anim__cursed")

        setTimeout(() => {
            cursed_container.classList.add("anim__show")
        }, 17000)

        setTimeout(() => {
            intro_container.classList.remove("anim__cursed")
            cursed_container.classList.remove("anim__show")
            cursed_container.classList.remove("block_hover")
            audios.splice(0, 1)
        }, 31500)
    }



    if (is_playing) {
        audios[current_audio_index].pause()
        is_playing = false
    }
    else {
        audios[current_audio_index].play()
        is_playing = true
    }
})

button_play.addEventListener("dblclick", () => {
    audios[current_audio_index].pause()
    audios[current_audio_index].currentTime = 0

    current_audio_index = current_audio_index + 1 === audios.length ? 0 : current_audio_index + 1   ;
    audios[current_audio_index].play()
})