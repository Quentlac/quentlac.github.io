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


    // Gestion du bouton pour remonter en haut de la page
    if(this.window.scrollY > 100) {
        document.querySelector('.go-top').style.right = '20px';
    }

    this.window.addEventListener('scroll', function() {
        if(this.window.scrollY > 100) {
            document.querySelector('.go-top').style.right = '20px';
        } else {
            document.querySelector('.go-top').style.right = '-150%';
        }
    });

    document.querySelector('.go-top').addEventListener('click', function() {
        window.scrollTo(0, 0);
    });

    // On regarde si on doit aller sur un projet en particulier
    const params = new URLSearchParams(window.location.search);
    const projet = params.get('projet');

    if(projet) {
        this.setTimeout(() => {
            goToProjet(projet);
        }, 1000);
    }

    this.document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function() {
            goToProjet(dot.getAttribute('data-project'));
        });
    });



    let prevX = 0;
    let prevY = 0;

    let count = 0;

    // Fonction permettant de détecter l'intention de l'utilisateur
    /*this.document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;


        // On récupère les coordonnées du bouton de retour en haut de la page
        const goTop = document.querySelector('.go-top');
        const goTopRect = goTop.getBoundingClientRect();

        const goTopX = goTopRect.x;
        const goTopY = goTopRect.y;

        // On calcule la direction de la souris
        const directionX = x - goTopX;
        const directionY = y - goTopY;

        if(directionX == 0) return;

        const direction = directionY / directionX;

        // Calcul de la direction de la souris
        const mouseDirectionX = prevX - x;
        const mouseDirectionY = prevY - y;

        if(mouseDirectionX == 0) return;

        const mouseDirection = mouseDirectionY / mouseDirectionX;


        console.log(Math.abs(mouseDirection - direction));

        if(prevX > 0 && prevY > 0 && x > window.innerWidth / 2 && Math.abs(mouseDirection - direction) < 0.5) {
            count++;
            if(count > 10) {
                document.querySelector('.go-top').classList.add('dev');
            }
        }
        else {
            count = 0;
        }


        prevX = x;
        prevY = y;
    
    });*/

});

function goToProjet (projet) {
    if(projet) {
        const projetElement = document.querySelector(`#${projet}`);
        if(projetElement) {
            projetElement.scrollIntoView();
        }
    }
}
    

function closePopupImage () {
    document.querySelector('.popup-image').classList.remove('popup-fadeIn');
    document.querySelector('.popup-image').classList.add('popup-fadeOut');

    setTimeout(() => {
        document.querySelector('.popup-image').style.display = 'none';
    }, 150);
}