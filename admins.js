// ===== ADMIN DASHBOARD =====
function loadAdminData() {
  // Load registrations
  const registrations = JSON.parse(localStorage.getItem("registrations")) || []
  const regBody = document.getElementById("registrationsBody")
  const noReg = document.getElementById("noRegistrations")
  const regCount = document.getElementById("totalRegCount")

  regCount.textContent = registrations.length

  if (registrations.length === 0) {
    regBody.parentElement.parentElement.style.display = "none"
    noReg.style.display = "block"
  } else {
    noReg.style.display = "none"
    regBody.innerHTML = registrations
      .map(
        (reg) => `
      <tr>
        <td>${reg.fullName}</td>
        <td>${reg.email}</td>
        <td>${reg.events.split(", ").length} events</td>
        <td><span class="badge badge-verified">✓ Verified</span></td>
        <td><small>${reg.registeredAt}</small></td>
      </tr>
    `,
      )
      .join("")
  }

  // Load contact messages
  const messages = JSON.parse(localStorage.getItem("contactMessages")) || []
  const msgBody = document.getElementById("messagesBody")
  const noMsg = document.getElementById("noMessages")

  if (messages.length === 0) {
    msgBody.parentElement.parentElement.style.display = "none"
    noMsg.style.display = "block"
  } else {
    noMsg.style.display = "none"
    msgBody.innerHTML = messages
      .map(
        (msg) => `
      <tr>
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.subject}</td>
        <td><small>${msg.message.substring(0, 50)}...</small></td>
        <td><small>${msg.sentAt}</small></td>
      </tr>
    `,
      )
      .join("")
  }
}

loadAdminData()
