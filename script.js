setInterval(function () {
    var dt = new Date();
    var hours = dt.getHours() % 12 || 12; // अगर 0 हो तो 12 बना दें
    var minutes = dt.getMinutes();
    var formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[dt.getMonth()];

    var date = dt.getDate(); // ✅ Fix: Define date correctly

    document.querySelector('.time').textContent = formattedTime;
    document.querySelector('.ftime').textContent = formattedTime;
    document.querySelector('.fdate').textContent = date; // ✅ Now it will work
    document.querySelector('.fmonth').textContent = monthName;
}, 1000);
var main = document.querySelector('.picture');
var crsr  = document.querySelector('.cursor');
main.addEventListener('mousemove',function(e){
 crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
});
let elem = document.querySelectorAll('.elem');


elem.forEach(function (item){
    console.log(item.childNodes);
   item.addEventListener('mouseenter',function(){
     item.childNodes[3].style.opacity = '1';
   }) 
  
   item.addEventListener('mouseleave',function(){
    item.childNodes[3].style.opacity = '0';

   }) 
   item.addEventListener('mousemove',function(e){
    item.childNodes[3].style.left = e.x+'px';
    // item.childNodes[3].style.top = e.y+'px';
 }) 


})


let boxs = document.querySelectorAll('.box');
boxs.forEach(box => {
    box.addEventListener('click',function(){
        deactive();
        box.classList.add("active");
    })
});

function deactive(){
    boxs.forEach(box =>{
        box.classList.remove("active")
    })
}


const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll('a'); // Get all the links inside the menu


menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    document.body.classList.toggle("show-icon"); // Add class to toggle visibility

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


        // Add event listeners to each menu link
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                if (window.innerWidth < 1280) { // Only close on smaller screens (adjust breakpoint if needed)
                    menu.classList.add("hidden"); // Close the menu
                    menu.classList.remove("flex");
                }
            });
        });
        let images = ["01.jpg",  "03.png", "04.png", "05.png", "06.jpeg","02.jpg"]; // Array of certificate image paths
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

         // Remove preloader when page loads
         window.addEventListener("load", function () {
            document.querySelector(".preloader").style.display = "none";
            document.querySelector(".content").style.display = "block";
        });
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
        