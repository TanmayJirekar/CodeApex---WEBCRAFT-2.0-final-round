// ===== EVENT DETAIL DATA =====
const eventsDatabase = [
  {
    id: 1,
    name: "Code Sprint Battle",
    category: "technical",
    prize: "₹5 Lakhs",
    description:
      "24-hour intensive coding competition where teams compete to solve complex algorithmic problems and implement innovative solutions.",
    date: "March 15-16, 2025",
    time: "10:00 AM - 10:00 AM",
    location: "Tech Auditorium",
    teamSize: "1-4 members",
    registrationFee: "Free",
    organizer: "Dr. Amit Singh",
    email: "amit.singh@eventverse.com",
    fullDescription:
      "In this 24-hour coding marathon, participants will face a series of challenging problems covering data structures, algorithms, and system design. Teams must work together to solve as many problems as possible within the time limit.",
  },
  {
    id: 2,
    name: "Web Dev Marathon",
    category: "technical",
    prize: "₹3 Lakhs",
    description: "Build full-stack web applications from concept to deployment in a limited timeframe.",
    date: "March 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Development Lab",
    teamSize: "1-3 members",
    registrationFee: "Free",
    organizer: "Priya Sharma",
    email: "priya.sharma@eventverse.com",
    fullDescription:
      "Create a complete web application within 8 hours. You will be provided with a problem statement and must design, develop, and deploy a functional web application.",
  },
  {
    id: 3,
    name: "AI/ML Hackathon",
    category: "technical",
    prize: "₹7 Lakhs",
    description: "Develop AI solutions for real-world problems using machine learning and deep learning.",
    date: "March 16-17, 2025",
    time: "10:00 AM - 10:00 AM",
    location: "Innovation Hub",
    teamSize: "2-5 members",
    registrationFee: "Free",
    organizer: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@eventverse.com",
    fullDescription:
      "Participants will work on real-world datasets and build AI/ML models to solve specific problems. Judging will be based on accuracy, innovation, and presentation.",
  },
]

// ===== LOAD EVENT DETAIL =====
function loadEventDetail() {
  const eventId = sessionStorage.getItem("selectedEventId")
  const detailDiv = document.getElementById("eventDetail")

  if (!eventId || !detailDiv) return

  const event = eventsDatabase.find((e) => e.id === Number.parseInt(eventId))

  if (event) {
    detailDiv.innerHTML = `
      <h1 style="font-size: 42px; margin-bottom: 20px; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${event.name}</h1>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
        <div class="card">
          <h4 style="color: var(--accent-secondary); margin-bottom: 10px;">Prize Pool</h4>
          <p style="font-size: 24px; color: var(--accent-glow); font-weight: bold;">${event.prize}</p>
        </div>
        <div class="card">
          <h4 style="color: var(--accent-secondary); margin-bottom: 10px;">Date & Time</h4>
          <p>${event.date}<br><small>${event.time}</small></p>
        </div>
        <div class="card">
          <h4 style="color: var(--accent-secondary); margin-bottom: 10px;">Location</h4>
          <p>${event.location}</p>
        </div>
        <div class="card">
          <h4 style="color: var(--accent-secondary); margin-bottom: 10px;">Team Size</h4>
          <p>${event.teamSize}</p>
        </div>
      </div>

      <div style="background: var(--bg-surface); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 30px;">
        <h3 style="color: var(--accent-secondary); margin-bottom: 15px;">About This Event</h3>
        <p style="color: var(--text-muted); line-height: 1.8;">${event.fullDescription}</p>
      </div>

      <div style="background: var(--bg-surface); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color);">
        <h3 style="color: var(--accent-secondary); margin-bottom: 15px;">Event Organizer</h3>
        <p><strong style="color: var(--text-primary);">Name:</strong> ${event.organizer}</p>
        <p><strong style="color: var(--text-primary);">Email:</strong> <a href="mailto:${event.email}" style="color: var(--accent-primary); text-decoration: none;">${event.email}</a></p>
        <p><strong style="color: var(--text-primary);">Registration Fee:</strong> ${event.registrationFee}</p>
      </div>
    `
  }
}

function registerForEvent() {
  window.location.href = "register.html"
}

// Load event detail when page loads
loadEventDetail()
