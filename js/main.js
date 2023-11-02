const closeBtn = document.getElementById("close")
const urgentBanner = document.getElementById("urgent-banner")


// Add a click event listener to the close button
closeBtn.addEventListener("click", function() {
  // Hide the banner when the close button is clicked
  urgentBanner.style.display = "none";
});

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en" },
//     "google_translate_element"
//   );
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


window.addEventListener("scroll", onScroll);

function onScroll(e) {
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  document.querySelectorAll("#navbarSupportedContent a").forEach(function(linkElem) {
      let hrefValue = linkElem.getAttribute("href");
      let hashValue = hrefValue ? hrefValue.split('#')[1] : null; // Extract hash portion

      // Only proceed if the href contains a hash
      if (hashValue) {
          let refElement = document.querySelector('#' + hashValue); // Use the hash as a selector
          if (refElement) {  // Ensure the element exists
              if (
                  refElement.getBoundingClientRect().top - 200 <= scrollPos &&
                  refElement.getBoundingClientRect().top + refElement.offsetHeight > scrollPos
              ) {
                  document.querySelectorAll("#menu-center ul li a").forEach(elem => {
                      elem.classList.remove("active");
                  });
                  linkElem.classList.add("active");
              } else {
                  linkElem.classList.remove("active");
              }
          }
      }
  });
}

document.querySelectorAll("#navbarSupportedContent a").forEach(function(linkElem) {
  let hrefValue = linkElem.getAttribute("href");

  // Only process if the href is an ID selector
  if (hrefValue && hrefValue.startsWith("#")) {
    let refElement = document.querySelector(hrefValue);
    if (refElement) {  // Ensure the element exists
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      if (
        refElement.getBoundingClientRect().top - 200 <= scrollPos &&
        refElement.getBoundingClientRect().top + refElement.offsetHeight > scrollPos
      ) {
        document.querySelectorAll("#menu-center ul li a").forEach(elem => {
          elem.classList.remove("active");
        });
        linkElem.classList.add("active");
      } else {
        linkElem.classList.remove("active");
      }
    }
  }
});

document.querySelectorAll(".tab-row a").forEach(function(linkElem) {
  linkElem.addEventListener("click", function(event) {
    event.preventDefault();
    let currentId = linkElem.getAttribute("href");
    setTimeout(() => {
      let scrollDestination = document.querySelector(currentId).getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({
        top: scrollDestination,
        behavior: "auto"  // Use "smooth" for smooth scrolling, or "auto" for instant
      });
    }, 0);
  });
});

// Replace $(window).scroll(function () from jQuery
window.addEventListener("scroll", function() {
  let s = window.scrollY;
  let d = document.documentElement.scrollHeight;
  let c = window.innerHeight;
  let scrollPercent = (s / (d - c)) * 100;

  document.getElementById("progressbar").setAttribute("value", scrollPercent);
});



// ----- Tooltip ----- 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
