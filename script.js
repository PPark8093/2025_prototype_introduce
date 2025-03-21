const sectionMap = {
  main_introduce: "header_home",
  main_about: "header_about",
  main_activity: "header_activity",
  main_questions: "header_others",
};

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

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 모든 버튼 초기화
      document.querySelectorAll(".header_button").forEach((btn) => {
        btn.style.color = "#000";
      });

      // 해당 섹션에 맞는 버튼 색상 변경
      const activeButton = document.querySelector(`.${sectionMap[entry.target.id]}`);
      if (activeButton) {
        activeButton.style.color = "rgb(232, 69, 69)";
      }
    } 
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector("#introduce_background"));
Object.keys(sectionMap).forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer2.observe(section);
});

function onClick_Submit() {
  window.open("https://forms.gle/gjWh7iCZ4aF3TRSn8");
}

document.querySelectorAll(".question").forEach(button => {
  button.addEventListener("click", () => {
    const description = button.nextElementSibling;
    const arrow = button.querySelector(".question_arrow"); // 해당 버튼 안의 화살표 선택
    const margin_a = button.parentElement.querySelector(".question_describe");

    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      description.style.opacity = "0";
      arrow.innerText = "▼";
      margin_a.style.margin = "0.12rem";
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
      description.style.opacity = "1";
      arrow.innerText = "▲";
      margin_a.style.margin = "0.5rem";
    }
  });
});


function onClick_Goto(where) {

  switch (where) {
    case "home":
      var location = document.querySelector("#main_introduce").offsetTop;
      break;
    case "about":
      var location = document.querySelector("#main_about").offsetTop;
      break;
    case 'activity':
      var location = document.querySelector("#main_activity").offsetTop;
      break;
    case "question":
      var location = document.querySelector("#main_questions").offsetTop;
      break;
    case "contact":
      var location = document.querySelector("#main_contact").offsetTop;
      break;
    case "submit":
      var location = document.querySelector("#main_submit").offsetTop;
      break;
    default:
      break;
  }

  console.log(location);

  if (where != "home") location -= 80; // 5rem = 80px

  window.scrollTo({top: location, behavior: 'smooth'});
}