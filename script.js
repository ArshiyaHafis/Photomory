let sections = document.querySelectorAll('section');

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop- 150;
        let height = sec.offsetHeight;

        if(top >= offset && top<offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}

function scrollToNextSection() {
    const sec5 = document.querySelector('.sec-5');
    sec5.scrollIntoView({ behavior: 'smooth' });
}
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scrolled'), window.scrollY > 0
// })

function openModal(src, alt) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modalImage.alt = alt;

    document.body.classList.add('modal-open');
    modal.style.display = "flex"; // Use "flex" instead of "block"
}

function closeModal() {
    var modal = document.getElementById("modal");
    document.body.classList.remove('modal-open');
    modal.style.display = "none";
}

// Add click event listeners to each image in the gallery
var images = document.querySelectorAll('.image img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        var src = this.src;
        var alt = this.alt;
        openModal(src, alt);
    });
});

// Close the modal when clicking outside the image
var modal = document.getElementById("modal");
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Add a click event listener to the close button
var closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    closeModal();
});


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

var navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetSectionId = link.getAttribute('href').substring(1); 
        scrollToSection(targetSectionId);
    });
});