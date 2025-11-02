// ===== INDEX PAGE SPECIFIC FUNCTIONALITY =====

// Handle "Register Now" and "View Schedule" buttons on index page
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.textContent.includes("Register")) {
      e.preventDefault()
      window.location.href = "register.html"
    } else if (this.textContent.includes("Schedule")) {
      e.preventDefault()
      window.location.href = "schedule.html"
    }
  })
})

// Particle background animation
function createParticles() {
  const heroBg = document.querySelector(".hero-bg")
  if (!heroBg) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = Math.random() * 3 + 1 + "px"
    particle.style.height = particle.style.width
    particle.style.background = Math.random() > 0.5 ? "#3A80F6" : "#00C4FF"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.borderRadius = "50%"
    particle.style.opacity = Math.random() * 0.5 + 0.3
    particle.style.boxShadow = "0 0 10px currentColor"
    particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`
    particle.style.pointerEvents = "none"

    heroBg.appendChild(particle)
  }
}

createParticles()
