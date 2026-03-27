// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 90;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// CTA Button handler
const ctaBtn = document.querySelector(".cta-btn-industrial");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    const offsetTop = contactSection.offsetTop - 90;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });
}

// Form submission handler
const contactForm = document.querySelector(".contact-form-industrial form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const phone = contactForm.querySelector('input[type="phone"]').value;
  const projectType = contactForm.querySelector("select").value;
  const message = contactForm.querySelector("textarea").value;

  // Simple validation
  if (name && email && phone && projectType) {
    // Show success message
    const submitBtn = contactForm.querySelector(".submit-btn-industrial");
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "✓ MESSAGE SENT! WE'LL CONTACT YOU SOON.";
    submitBtn.style.background = "#10b981";
    submitBtn.disabled = true;

    // Reset form
    contactForm.reset();

    // Restore button after 4 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      submitBtn.disabled = false;
    }, 4000);

    // In a real application, you would send this data to a server
    console.log("Form submitted:", {
      name,
      email,
      phone,
      projectType,
      message,
    });
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observe portfolio items
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(item);
});

// Observe testimonial cards
document.querySelectorAll(".testimonial-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observe team cards
document.querySelectorAll(".team-card-industrial").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observe cert cards
document.querySelectorAll(".cert-card-industrial").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observe FAQ items
document.querySelectorAll(".faq-item-industrial").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(item);
});

// FAQ Accordion
document.querySelectorAll(".faq-question-industrial").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item-industrial");
    const answer = item.querySelector(".faq-answer-industrial");
    const isOpen = item.classList.contains("open");

    // Close all open items
    document
      .querySelectorAll(".faq-item-industrial.open")
      .forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer-industrial").style.maxHeight = "0";
        openItem
          .querySelector(".faq-question-industrial")
          .setAttribute("aria-expanded", "false");
      });

    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// Lazy load portfolio images (if they have actual image sources)
const portfolioImages = document.querySelectorAll(".portfolio-image");
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.transition = "transform 0.3s ease";
        observer.unobserve(img);
      }
    });
  });

  portfolioImages.forEach((img) => imageObserver.observe(img));
}

// Counter animation for stats
const stats = document.querySelectorAll(".stat h3");
let hasAnimated = false;

const animateCounters = () => {
  if (hasAnimated) return;

  stats.forEach((stat) => {
    const target = parseInt(stat.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = stat.textContent;
        clearInterval(counter);
      } else {
        stat.textContent =
          Math.floor(current) +
          (stat.textContent.includes("+")
            ? "+"
            : stat.textContent.includes("%")
              ? "%"
              : "");
      }
    }, 16);
  });

  hasAnimated = true;
};

// Trigger counter animation when stats section comes into view
const statsSection = document.querySelector(".stats");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        animateCounters();
      }
    });
  },
  { threshold: 0.5 },
);

statsObserver.observe(statsSection);

// Add active nav link styling based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--primary-color)";
    }
  });
});
