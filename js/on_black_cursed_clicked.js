let button_volume_plus = document.querySelector(".image_container_2")

button_volume_plus.addEventListener("click", () => {
    audios.forEach(
        (audio_) => {
            audio_.volume = Math.min(audio_.volume + .1, .99)
        }
    )
})