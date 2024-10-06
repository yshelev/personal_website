let button_open_links = document.querySelector(".image_container_3")
let link_ = 'info.html'

button_open_links.addEventListener("click", () => {
    window.open(link_, '_blank').focus()
})