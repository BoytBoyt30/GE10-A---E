const faqs = document.querySelectorAll(".contentDropDown");

faqs.forEach(faq => {
  const question = faq.querySelector(".entryTitleDiv");
  const answer = faq.querySelector(".entryContentDiv");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {

      faqs.forEach(otherFaq => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".entryContentDiv").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
      header.style.backgroundColor = "#ffffff"; // White background
      header.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.1)"; // Add subtle shadow
  } else {
      header.style.backgroundColor = "#ff3c4b"; // Original color
      header.style.boxShadow = "none"; // Remove shadow
  }
});