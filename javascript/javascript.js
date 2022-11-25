let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper('.facility-slider', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {
  $('#calendar').evoCalendar({
    
    calendarEvents: [
      {
        id: 'Christmas', // Event's ID (required)
        name: "Christmas Day", // Event name (required)
        date: "December/25/2022", // Event date (required)
        description: "Christmas is a Christian festival that celebrates the birth of Jesus Christ, who Christians believe was the son of God. For most people, it takes place every year on 25 December – the day that the Roman Catholic Church chose to mark Jesus' birthday. But, in fact, no one actually knows the exact date Jesus was born!",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        name: "Gym Closed",
        badge: "12/26 - 12/28", // Event badge (optional)
        date: ["December/26/2022", "December/28/2022"], // Date range
        description: "Gym close for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]

  })
})