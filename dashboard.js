// ===== DASHBOARD FUNCTIONALITY =====
function loadRegistrations() {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || []
  const registrationsList = document.getElementById("registrationsList")
  const emptyState = document.getElementById("emptyState")
  const totalRegistrations = document.getElementById("totalRegistrations")

  totalRegistrations.textContent = registrations.length

  if (registrations.length === 0) {
    registrationsList.style.display = "none"
    emptyState.style.display = "block"
  } else {
    registrationsList.style.display = "grid"
    emptyState.style.display = "none"

    registrationsList.innerHTML = registrations
      .map(
        (reg, index) => `
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div>
            <h3>${reg.fullName}</h3>
            <p style="color: var(--text-muted); margin-bottom: 15px;"><strong>Email:</strong> ${reg.email}</p>
            <p style="color: var(--text-muted); margin-bottom: 15px;"><strong>Phone:</strong> ${reg.phone}</p>
            <p style="color: var(--text-muted); margin-bottom: 15px;"><strong>College:</strong> ${reg.college}</p>
            <p style="margin-bottom: 15px;"><strong>Events:</strong></p>
            <ul style="color: var(--text-muted); margin-left: 20px; margin-bottom: 15px;">
              ${reg.events
                .split(", ")
                .map((event) => `<li>${event}</li>`)
                .join("")}
            </ul>
            <p style="color: var(--text-muted); font-size: 12px;"><strong>Registered:</strong> ${reg.registeredAt}</p>
          </div>
          <div style="text-align: center;">
            <div style="background: var(--success-color); color: var(--bg-primary); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px;">✓</div>
            <p style="margin-top: 10px; color: var(--success-color); font-weight: bold;">Confirmed</p>
          </div>
        </div>
        <button class="btn btn-secondary" style="margin-top: 15px; width: 100%;" onclick="removeRegistration(${index})">Cancel Registration</button>
      </div>
    `,
      )
      .join("")
  }
}

function removeRegistration(index) {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || []
  registrations.splice(index, 1)
  localStorage.setItem("registrations", JSON.stringify(registrations))
  loadRegistrations()
  window.showSuccessModal("Registration cancelled successfully") // Declare or import showSuccessModal
}

function clearAllData() {
  if (confirm("Are you sure you want to clear all registrations? This action cannot be undone.")) {
    localStorage.removeItem("registrations")
    loadRegistrations()
    window.showSuccessModal("All registrations cleared") // Declare or import showSuccessModal
  }
}

// Load registrations on page load
loadRegistrations()

// Declare showSuccessModal function or import it from another module
function showSuccessModal(message) {
  alert(message) // Example implementation
}
