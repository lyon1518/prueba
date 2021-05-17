const MainScripts = {
    handdlePop(data){
        let modal = document.getElementById('modal')
        modal.style.display = data
    },
    handdleActive(id,position) {
        window.event.preventDefault()
        let dropdown = document.querySelector('#'+id)
        // hs-unfold-content-initialized hs-unfold-css-animation animated fadeInRight
        dropdown.classList.add("hs-unfold-content-initialized", "hs-unfold-css-animation", "animated")
        if (dropdown.classList.contains("slideInUp")) {
            dropdown.classList.remove("slideInUp")
            dropdown.classList.toggle("hs-unfold-hidden")
        }else{
            dropdown.classList.remove("hs-unfold-hidden")
            if (position !== undefined) {
                dropdown.classList.toggle(position)
            }
            dropdown.classList.toggle("slideInUp")
        }
    }
}
export default MainScripts