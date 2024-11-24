document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lightbox');
    const modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    const modalImage = document.createElement('img');
    const prevButton = document.createElement('div');
    prevButton.classList.add('nav', 'prev');
    prevButton.textContent = '←';
    const nextButton = document.createElement('div');
    nextButton.classList.add('nav', 'next');
    nextButton.textContent = '→';
    modal.appendChild(modalImage);
    modal.appendChild(prevButton);
    modal.appendChild(nextButton);
    document.body.appendChild(modal);

    let currentIndex = 0;
    let modalImages = [];

    
    images.forEach((image, index) => {
        modalImages.push(image.href);
        image.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            modalImage.src = modalImages[currentIndex];
            modal.style.display = 'flex';
        });
    });

    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

  
    prevButton.addEventListener('click', function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex === 0) ? modalImages.length - 1 : currentIndex - 1;
        modalImage.src = modalImages[currentIndex];
    });

    
    nextButton.addEventListener('click', function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex === modalImages.length - 1) ? 0 : currentIndex + 1;
        modalImage.src = modalImages[currentIndex];
    });
});