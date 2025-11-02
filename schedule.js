// ===== SCHEDULE DATA =====
const scheduleData = [
  {
    day: "day1",
    date: "March 15, 2025",
    events: [
      { time: "9:00 AM", event: "Registration & Welcome", location: "Main Lobby" },
      { time: "10:00 AM", event: "Opening Ceremony", location: "Tech Auditorium" },
      { time: "11:00 AM", event: "Code Sprint Battle Begins", location: "Development Lab" },
      { time: "1:00 PM", event: "Lunch Break", location: "Cafeteria" },
      { time: "2:00 PM", event: "Web Dev Marathon Begins", location: "Innovation Hub" },
      { time: "6:00 PM", event: "Cloud Computing Bootcamp", location: "Tech Lab A" },
      { time: "8:00 PM", event: "Evening Networking", location: "Main Hall" },
    ],
  },
  {
    day: "day2",
    date: "March 16, 2025",
    events: [
      { time: "8:00 AM", event: "Morning Yoga Session", location: "Outdoor Ground" },
      { time: "9:00 AM", event: "AI/ML Hackathon Begins", location: "Tech Hub" },
      { time: "1:00 PM", event: "Lunch & Industry Talk", location: "Main Hall" },
      { time: "3:00 PM", event: "Design Thinking Workshop", location: "Creative Space" },
      { time: "5:00 PM", event: "Gaming Tournament Round 1", location: "Gaming Arena" },
      { time: "8:00 PM", event: "Cultural Programs", location: "Main Auditorium" },
    ],
  },
  {
    day: "day3",
    date: "March 17, 2025",
    events: [
      { time: "9:00 AM", event: "Robotics Challenge", location: "Robotics Lab" },
      { time: "12:00 PM", event: "Final Round Competitions", location: "Multiple Venues" },
      { time: "2:00 PM", event: "Lunch & Awards Ceremony", location: "Main Hall" },
      { time: "4:00 PM", event: "Prize Distribution", location: "Tech Auditorium" },
      { time: "6:00 PM", event: "Closing Ceremony & Farewell", location: "Main Auditorium" },
      { time: "8:00 PM", event: "Celebration Dinner", location: "Grand Ballroom" },
    ],
  },
]

// ===== RENDER SCHEDULE =====
function renderSchedule(dayFilter = "") {
  const timeline = document.getElementById("scheduleTimeline")
  if (!timeline) return

  timeline.innerHTML = ""

  let filteredSchedule = scheduleData
  if (dayFilter) {
    filteredSchedule = scheduleData.filter((d) => d.day === dayFilter)
  }

  filteredSchedule.forEach((dayData) => {
    const dayTitle = document.createElement("h3")
    dayTitle.style.color = "var(--accent-secondary)"
    dayTitle.style.marginTop = "40px"
    dayTitle.style.marginBottom = "30px"
    dayTitle.style.fontSize = "24px"
    dayTitle.textContent = dayData.date
    timeline.appendChild(dayTitle)

    dayData.events.forEach((item, index) => {
      const timelineItem = document.createElement("div")
      timelineItem.className = "timeline-item"
      if (index === 0) timelineItem.classList.add("active")

      timelineItem.innerHTML = `
        <div class="schedule-card">
          <h4>${item.event}</h4>
          <div class="time">⏰ ${item.time}</div>
          <p style="color: var(--text-muted); margin-top: 10px; font-size: 14px;">📍 ${item.location}</p>
        </div>
      `
      timeline.appendChild(timelineItem)
    })
  })
}

// ===== FILTER EVENT LISTENER =====
const dayFilter = document.getElementById("dayFilter")
dayFilter?.addEventListener("change", function () {
  renderSchedule(this.value)
})

// Initial render
renderSchedule()
