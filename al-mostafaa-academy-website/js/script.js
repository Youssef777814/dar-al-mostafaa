const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const backTop = document.querySelector(".back-top");
window.addEventListener(
  "scroll",
  () => {
    backTop.classList.toggle("visible", window.scrollY > 450);
  },
  { passive: true },
);

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const message = [
    "Al Mostafaa Academy enquiry",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email") || "Not provided"}`,
    `Service: ${data.get("service")}`,
    `Message: ${data.get("message")}`,
  ].join("\n");

  const academyWhatsAppNumber = "+201114625823";
  if (academyWhatsAppNumber) {
    window.open(
      `https://wa.me/${+201114625823}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
    formNote.textContent =
      "Your enquiry has been prepared in WhatsApp. Please review and send it there.";
  } else {
    const blob = new Blob([message], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const download = document.createElement("a");
    download.href = url;
    download.download = "al-mostafaa-enquiry.txt";
    download.click();
    URL.revokeObjectURL(url);
    formNote.textContent =
      "the message sent now for sheikh mostafaa we contact with you soon .";
  }
});
