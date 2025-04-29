// Time Display (Clock)
setInterval(function () {
    var dt = new Date();
    var hours = dt.getHours() % 12 || 12; // If hours is 0, set it to 12
    var minutes = dt.getMinutes();
    var formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[dt.getMonth()];

    var date = dt.getDate(); // Date value

    document.querySelector('.time').textContent = formattedTime;
    document.querySelector('.ftime').textContent = formattedTime;
    document.querySelector('.fdate').textContent = date;
    document.querySelector('.fmonth').textContent = monthName;
}, 1000);

// Cursor Styling
var main = document.querySelector('.picture');
var crsr  = document.querySelector('.cursor');
main.addEventListener('mousemove',function(e){
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
});

// Hover effect for elements
let elem = document.querySelectorAll('.elem');
elem.forEach(function (item){
    item.addEventListener('mouseenter',function(){
        item.childNodes[3].style.opacity = '1';
    });

    item.addEventListener('mouseleave',function(){
        item.childNodes[3].style.opacity = '0';
    });

    item.addEventListener('mousemove',function(e){
        item.childNodes[3].style.left = e.x + 'px';
    });
});

// Box Active/Deactive State
let boxs = document.querySelectorAll('.box');
boxs.forEach(box => {
    box.addEventListener('click',function(){
        deactive();
        box.classList.add("active");
    });
});

function deactive(){
    boxs.forEach(box =>{
        box.classList.remove("active");
    });
}

// Menu Toggle (Responsive Navigation)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    document.body.classList.toggle("show-icon");

    const menuicon = document.querySelector('.w-8');
    const closeicon = document.querySelector('.wrong');

    if (menuicon.style.display === "none") {
        menuicon.style.display = "block";
        closeicon.style.display = "none";
    } else {
        menuicon.style.display = "none";
        closeicon.style.display = "block";
    }
});

// Close menu after clicking a link on smaller screens
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth < 1280) {
            menu.classList.add("hidden");
            menu.classList.remove("flex");
        }
    });
});

// Image Slider (Certificate images)
let images = ["01.jpg", "03.png", "04.png", "05.png", "06.jpeg", "02.jpg"];
let img = document.getElementById('img');
var count = -1;

function next() {
    count++;
    if (count >= images.length) {
        count--;
    }
    if (count < images.length) {
        img.setAttribute('src', images[count]);
    }
}

function prev() {
    count--;
    if (count < 0) {
        count++;
    }
    if (count >= 0) {
        img.setAttribute('src', images[count]);
    }
}

// Preloader Hide After Page Load
window.addEventListener("load", function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".content").style.display = "block";
});

// Navbar Hide/Show on Scroll
let prevScrollPos = window.scrollY;
const navbar = document.querySelector('nav');
let scrollTimeout;

window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    // Hide navbar when scrolling down
    if (currentScrollPos > prevScrollPos) {
        navbar.style.top = "-100px";
    } else {
        // Show navbar when scrolling up
        navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;

    // Show navbar again if scrolling stops for 200ms
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        navbar.style.top = "0";
    }, 200);
});

// Form Submission (Contact Form)
const form = document.querySelector("form");
const messageBox = document.getElementById("responseMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        // Clear input fields and textarea
        form.reset();

        // Display success message
        messageBox.textContent = "✅ Thank you! Your message has been sent.";
        messageBox.classList.remove("error");
        messageBox.style.display = "block";

        // Optionally hide the message after a few seconds
        setTimeout(() => {
            messageBox.style.display = "none";
        }, 5000);
    })
    .catch((error) => {
        messageBox.textContent = "❌ Oops! Something went wrong.";
        messageBox.classList.add("error");
        messageBox.style.display = "block";
        console.error("Form submission error:", error);
    });
});
