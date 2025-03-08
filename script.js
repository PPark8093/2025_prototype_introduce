const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector("header").style.backgroundColor = "#fff";
        document.querySelectorAll(".header_button").forEach(el => {
          el.style.color = "#000";
        });
        document.querySelector(".header_icon").style.display = "block";
      } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelectorAll(".header_button").forEach(el => {
          el.style.color = "#fff";
        });
        document.querySelector(".header_icon").style.display = "none";
      }
    });
  }, { threshold: 1 });
  
  observer.observe(document.querySelector("#introduce_background"));
  