/*shop*/
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})





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
    todayHighlight: true,
    disabledDate: ["1/01/2021", "2/31/2021"],
    
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
        id: 'Valentines', // Event's ID (required)
        name: "Valentines Day", // Event name (required)
        date: "February/14/2022", // Event date (required)
        description: "St Valentine's Day is an annual festival to celebrate romantic love, friendship and admiration. Every year on 14 February people celebrate this day by sending messages of love and affection to partners, family and friends.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'New Year', // Event's ID (required)
        name: "New Year's Day", // Event name (required)
        date: "1/1/2022", // Event date (required)
        description: "New Year is the time or day currently at which a new calendar year begins and the calendar's year count increments by one. Many cultures celebrate the event in some manner. In the Gregorian calendar, the most widely used calendar system today, New Year occurs on January 1 (New Year's Day, preceded by New Year's Eve).",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'Valor', // Event's ID (required)
        name: "Valor Day", // Event name (required)
        date: "4/9/2022", // Event date (required)
        description: "The Day of Valor, officially known as Araw ng Kagitingan, is a national observance in the Philippines which commemorates the fall of Bataan to Japanese troops during World War II. It falls every April 9, although in 2009, its celebration was moved to April 6 to avoid it from coinciding with Maundy Thursday.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'holiday1', // Event's ID (required)
        name: "Labor Day", // Event name (required)
        date: "5/1/2022", // Event date (required)
        description: "Philippines Labor Day is celebrated annually on May 1 to celebrate hardworking Filipinos across the country. In Filipino, it is known as 'Araw ng mga Manggagawa'. People in the Philippines relax and spend the day with their family and friends.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'holiday2', // Event's ID (required)
        name: "Independence Day", // Event name (required)
        date: "6/12/2022", // Event date (required)
        description: "THIS DAY IN HISTORY: 1898 June 12, Philippine independence declared: “During the Spanish-American War, Filipino rebels led by Emilio Aguinaldo proclaim the independence of the Philippines after 300 years of Spanish rule.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'holiday3', // Event's ID (required)
        name: "National Heroes’ Day", // Event name (required)
        date: "August/28/2022", // Event date (required)
        description: "The National Heroes of Philippines Day is celebrated on August 28. The day is celebrated by the Filipino people to honor and remember all the heroes of the revolution who helped to establish the foundation for the country's independence.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'holiday4', // Event's ID (required)
        name: "Bonifacio Day", // Event name (required)
        date: "11/30/2022", // Event date (required)
        description: "Bonifacio Day is celebrated annually on November 30 in the Philippines. It is a national holiday commemorating Andrés Bonifacio, a national hero. Bonifacio was one of the founders of a secret society of revolutionaries commonly known as the Katipunan.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'holiday5', // Event's ID (required)
        name: "Rizal Day", // Event name (required)
        date: "12/30/2022", // Event date (required)
        description: "Rizal Day is a Philippine national holiday celebrated on December 30 to commemorate the life and works of José Rizal, a national hero of the Philippines. The date, December 30, is the anniversary of Rizal's execution in 1896 at Bagumbayan, Manila.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      // Special Non-Working Holidays

      {
        id: 'chineseNewYear', // Event's ID (required)
        name: "Lunar New Year", // Event name (required)
        date: "2/1/2022", // Event date (required)
        description: "Chinese Lunar New Year --- Lunar New Year is considered to be the most important festival for the Chinese community in the Philippines. It does not follow a fixed date in the Gregorian calendar, which is widely used in many countries. The celebration stretches to about 15 days with varied observations each day.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'EDSARev', // Event's ID (required)
        name: "EDSA People Power Revolution", // Event name (required)
        date: "2/25/2022", // Event date (required)
        description: "EDSA People Power Revolution Anniversary --- The 1986 EDSA People Power Revolution gathered millions of Filipinos from all walks of life to march along Epifanio de los Santos Avenue (EDSA), the main artery of Metro Manila, to end the dictatorship of President Ferdinand E. Marcos and begin a new era marked by true freedom and democracy.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'NinoyAquinoDay', // Event's ID (required)
        name: "Ninoy Aquino Day", // Event name (required)
        date: "7/21/2022", // Event date (required)
        description: "Republic Act No. 2956, signed into law in 2004, declares August 21 of every year as “Ninoy Aquino Day.” It is a non-working holiday nationwide commemorating the death anniversary of former Senator Benigno “Ninoy” S. Aquino Jr.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'EveAllSaints', // Event's ID (required)
        name: "Eve of All Saints' Day", // Event name (required)
        date: "10/31/2022", // Event date (required)
        description: "In the Western Christian practice, the liturgical celebration begins with its first Vespers on the evening of 31 October, All Hallows' Eve (All Saints' Eve), and ends at the compline of 1 November. It is thus the day before All Souls' Day, which commemorates the faithful departed.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'AllSaints', // Event's ID (required)
        name: "All Saints' Day", // Event name (required)
        date: "11/1/2022", // Event date (required)
        description: "On the Solemnity of All Saints, November 1, the Church celebrates those Christians who achieved spiritual maturity. It is a day to venerate all the holy men and women who have been canonized by the Church.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'FeastOfMary', // Event's ID (required)
        name: "Feast of the Immaculate Conception of Mary", // Event name (required)
        date: "12/8/2022", // Event date (required)
        description: "Feast of the Immaculate Conception of Mary --- December 8 of every year a Special Non-working holiday in the entire country to commemorate the Feast of the Immaculate Conception of Mary, the Principal Patroness of the Philippines.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      // Special Working Holidays

      {
        id: 'ChristmasEve', // Event's ID (required)
        name: "Christmas Eve", // Event name (required)
        date: "12/24/2022", // Event date (required)
        description: "Christmas Eve is the day or the evening before Christmas, the Christian holiday to celebrate the birth of Jesus, the central figure of Christianity. Most Christians celebrate Christmas on December 25, making Christmas Eve December 24.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'NewYearsEve', // Event's ID (required)
        name: "New Year's Eve", // Event name (required)
        date: "12/31/2022", // Event date (required)
        description: "The last day of the year is commonly referred to as “New Year's Eve”. In many countries, New Year's Eve is celebrated with dancing, eating, drinking, and watching or lighting fireworks. Some Christians attend a watchnight service. The celebrations generally go on past midnight into New Year's Day, 1 January.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'SoulsDay', // Event's ID (required)
        name: "All Souls’ Day", // Event name (required)
        date: "11/2/2022", // Event date (required)
        description: "All Souls' Day, in Roman Catholicism, a day for commemoration of all the faithful departed, those baptized Christians who are believed to be in purgatory because they died with the guilt of lesser sins on their souls. It is observed on November 2.",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },


      // Multiple Events

      {
        name: "Gym Closed",
        badge: "12/26 - 12/28", // Event badge (optional)
        date: ["0/0/0", "0/0/0"], // Date range
        description: "Gym close for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]

  })
})
