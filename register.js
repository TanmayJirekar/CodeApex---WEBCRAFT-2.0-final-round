// ===== REGISTRATION FORM VALIDATION & HANDLING =====
const registrationForm = document.getElementById("registrationForm")

// Declare validation functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\d{10}$/
  return re.test(phone)
}

// Declare showSuccessModal function
function showSuccessModal(message) {
  alert(message)
}

registrationForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const fullName = document.getElementById("fullName").value.trim()
  const email = document.getElementById("email").value.trim()
  const phone = document.getElementById("phone").value.trim()
  const college = document.getElementById("college").value.trim()
  const eventsCheckboxes = document.querySelectorAll('input[name="events"]:checked')
  const termsChecked = document.getElementById("terms").checked

  // Clear previous errors
  document.querySelectorAll('small[id*="Error"]').forEach((el) => {
    el.style.display = "none"
    el.textContent = ""
  })

  let isValid = true

  // Validate Full Name
  if (!fullName || fullName.length < 3) {
    document.getElementById("nameError").textContent = "Please enter a valid name (at least 3 characters)"
    document.getElementById("nameError").style.display = "block"
    isValid = false
  }

  // Validate Email
  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address"
    document.getElementById("emailError").style.display = "block"
    isValid = false
  }

  // Validate Phone
  if (!validatePhone(phone)) {
    document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number"
    document.getElementById("phoneError").style.display = "block"
    isValid = false
  }

  // Validate Events Selection
  if (eventsCheckboxes.length === 0) {
    document.getElementById("eventsError").textContent = "Please select at least one event"
    document.getElementById("eventsError").style.display = "block"
    isValid = false
  }

  // Validate Terms
  if (!termsChecked) {
    document.getElementById("termsError").textContent = "Please accept the terms and conditions"
    document.getElementById("termsError").style.display = "block"
    isValid = false
  }

  if (isValid) {
    // Collect selected events
    const selectedEvents = Array.from(eventsCheckboxes)
      .map((cb) => cb.value)
      .join(", ")

    // Store registration data
    const registrationData = {
      fullName,
      email,
      phone,
      college,
      events: selectedEvents,
      registeredAt: new Date().toLocaleString(),
    }

    // Save to localStorage
    const registrations = JSON.parse(localStorage.getItem("registrations")) || []
    registrations.push(registrationData)
    localStorage.setItem("registrations", JSON.stringify(registrations))

    // Show success modal
    showSuccessModal(`Welcome ${fullName}! You have been registered for: ${selectedEvents}`)

    // Reset form
    registrationForm.reset()

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      window.location.href = "dashboard.html"
    }, 2000)
  }
})
