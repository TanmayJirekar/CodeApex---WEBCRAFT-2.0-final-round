// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById("contactForm")

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("contactName").value.trim()
  const email = document.getElementById("contactEmail").value.trim()
  const subject = document.getElementById("contactSubject").value.trim()
  const message = document.getElementById("contactMessage").value.trim()

  if (!name || !validateEmail(email) || !subject || !message.length < 10) {
    alert("Please fill all fields with valid information")
    return
  }

  // Store contact message
  const contactData = {
    name,
    email,
    subject,
    message,
    sentAt: new Date().toLocaleString(),
  }

  // Save to localStorage
  const messages = JSON.parse(localStorage.getItem("contactMessages")) || []
  messages.push(contactData)
  localStorage.setItem("contactMessages", JSON.stringify(messages))

  alert(`Thank you ${name}! Your message has been sent successfully. We will get back to you soon.`)
  contactForm.reset()
})
