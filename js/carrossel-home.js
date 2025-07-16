document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("#ofertasCarousel .carousel-item");
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("active");
    }

    // Troca de imagem a cada 5 segundos (5000 ms)
    setInterval(showNextItem, 3000);
});
