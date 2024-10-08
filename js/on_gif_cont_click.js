const AUDIO_PATH = "../audio/"

let button_play = document.querySelector(".gif_container")
let is_playing = false;

let current_audio_index = 0;

let audios = [
    new Audio(AUDIO_PATH + "zxcursed.mp3"),
    new Audio(AUDIO_PATH + "cupsize_bus.mp3"),
    new Audio(AUDIO_PATH + "cupsize_love_me_alina.mp3")
]

audios.forEach((audio) => audio.volume = .1)

button_play.addEventListener("click", () => {
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