const observer = new IntersectionObserver((entities, observer) => {
    entities.forEach(entry => {
        if (entry.isIntersecting)
        {
            document.querySelector("header").style.backgroundColor = "white";
            document.querySelectorAll(".header_button").forEach(element => {
                element.style.color = "black";
            });

            document.querySelector(".header_icon").style.display = "block";
        }
        else
        {
            document.querySelector("header").style.backgroundColor = "transparent";
            document.querySelectorAll(".header_button").forEach(element => {
                element.style.color = "white";
            });

            document.querySelector(".header_icon").style.display = "none";
        }
    });
}, { })

observer.observe(document.querySelector("#main_about"));
