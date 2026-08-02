/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


// Open / Close Mobile Menu

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



/* =========================
   3D CUBE MOUSE INTERACTION
========================= */

const cube = document.querySelector(".cube");

const hero3D = document.querySelector(".hero-3d");


hero3D.addEventListener("mousemove", (event) => {


    // Get position of the 3D area

    const rect =
        hero3D.getBoundingClientRect();


    // Calculate mouse position

    const mouseX =
        event.clientX - rect.left;


    const mouseY =
        event.clientY - rect.top;


    // Calculate rotation

    const rotateY =
        (mouseX / rect.width - 0.5) * 25;


    const rotateX =
        (mouseY / rect.height - 0.5) * -25;


    // Apply rotation

    cube.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});



/* =========================
   RESET CUBE POSITION
========================= */

hero3D.addEventListener("mouseleave", () => {


    cube.style.transform =
        "rotateX(0deg) rotateY(0deg)";


});



/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        "show-section"
                    );


                }


            });


        },

        {

            threshold: 0.15

        }

    );



sections.forEach(section => {

    observer.observe(section);

});



/* =========================
   CURRENT YEAR
========================= */

const currentYear =
    new Date().getFullYear();


const footerText =
    document.querySelector("footer p");


if (footerText) {

    footerText.innerHTML =
        `© ${currentYear} Motaz Mohamed Fathy. All Rights Reserved.`;

}