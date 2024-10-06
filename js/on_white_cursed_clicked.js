let button_volume_minus = document.querySelector(".image_container_1")

button_volume_minus.addEventListener("click", () => {
    audios.forEach(
        (audio_) => audio_.volume = Math.max(audio_.volume - 0.1, .1)
    )
})