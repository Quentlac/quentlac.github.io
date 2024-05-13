window.addEventListener('load', function() {
    //tippy('i');

    tippy('images-list img', {
        content: 'Cliquez pour agrandir'
    });

    const images = document.querySelectorAll('.images-list img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            document.querySelector('.popup-image').style.display = 'flex';
            document.querySelector('.popup-image').classList.remove('popup-fadeOut');
            document.querySelector('.popup-image').classList.add('popup-fadeIn');

            document.querySelector('.popup-image span').innerHTML = img.getAttribute('data-description');
            document.querySelector('.popup-image img').src = img.src;
        });
    });

    document.querySelector('.popup-image').addEventListener('click', function() {
        closePopupImage();
    });

    document.querySelector('#popup-close').addEventListener('click', function() {
        closePopupImage();
    });

    document.addEventListener('scroll', function() {
        closePopupImage();

    });


});

function closePopupImage () {
    document.querySelector('.popup-image').classList.remove('popup-fadeIn');
    document.querySelector('.popup-image').classList.add('popup-fadeOut');

    setTimeout(() => {
        document.querySelector('.popup-image').style.display = 'none';
    }, 150);
}