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