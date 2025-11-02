const modal = document.getElementById("successModal")
const closeModal = document.getElementById("closeModal")
const okButton = document.getElementById("okButton")

window.showSuccessModal = (message = "Your action was completed successfully!") => {
  const modalMessage = document.getElementById("modalMessage")
  if (modalMessage) {
    modalMessage.textContent = message
  }
  if (modal) {
    modal.classList.add("active")
  }
}

function closeSuccessModal() {
  if (modal) {
    modal.classList.remove("active")
  }
}

closeModal?.addEventListener("click", closeSuccessModal)
okButton?.addEventListener("click", closeSuccessModal)
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeSuccessModal()
  }
})

// ===== HAMBURGER MENU & SIDEBAR TOGGLE =====
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar")

hamburger?.addEventListener("click", () => {
  sidebar.classList.toggle("active")
})

// Close sidebar when a link is clicked
document.querySelectorAll(".sidebar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active")
  })
})

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("nav") && !e.target.closest(".sidebar")) {
    sidebar.classList.remove("active")
  }
})

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  document.querySelectorAll(".nav-menu a, .sidebar-menu a").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
}

updateActiveNav()

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// ===== BUTTON EVENT LISTENERS =====
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (!this.type || this.type !== "submit") {
      if (this.textContent.includes("Register")) {
        e.preventDefault()
        window.location.href = "register.html"
      } else if (this.textContent.includes("Schedule")) {
        e.preventDefault()
        window.location.href = "schedule.html"
      } else if (this.textContent.includes("Enroll")) {
        e.preventDefault()
        window.showSuccessModal("You have been enrolled successfully!")
      } else if (this.textContent.includes("Team")) {
        e.preventDefault()
        window.showSuccessModal("Team registration initiated!")
      }
    }
  })
})

// ===== FORM VALIDATION HELPERS =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\d{10}$/
  return re.test(phone.replace(/\D/g, ""))
}

// ===== PAGE ANIMATIONS =====
document.addEventListener("DOMContentLoaded", () => {
  // Animate cards on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 0.6s ease forwards"
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".card").forEach((card) => {
    observer.observe(card)
  })
})

// ===== PARALLAX EFFECT =====
window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".hero-bg")
  if (heroBg) {
    const scrolled = window.pageYOffset
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
