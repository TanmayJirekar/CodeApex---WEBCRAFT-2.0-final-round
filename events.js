// ===== EVENTS DATA =====
const eventsData = [
  {
    id: 1,
    name: "Code Sprint Battle",
    category: "technical",
    prize: "₹5 Lakhs",
    description: "24-hour intensive coding competition",
    date: "March 15-16, 2025",
    image: "public/coding-in-blue-stockcake.jpg",
  },
  {
    id: 2,
    name: "Web Dev Marathon",
    category: "technical",
    prize: "₹3 Lakhs",
    description: "Build full-stack web applications",
    date: "March 15, 2025",
    image: "public/web-performance-optimization.png",
  },
  {
    id: 3,
    name: "AI/ML Hackathon",
    category: "technical",
    prize: "₹7 Lakhs",
    description: "Develop AI solutions for real-world problems",
    date: "March 16-17, 2025",
    image: "public/ai-conference-presentation.jpg",
  },
  {
    id: 4,
    name: "Gaming Tournament",
    category: "gaming",
    prize: "₹2 Lakhs",
    description: "Competitive esports tournament",
    date: "March 18, 2025",
    image: "public/mobile-app-development.png",
  },
  {
    id: 5,
    name: "Robotics Challenge",
    category: "technical",
    prize: "₹4 Lakhs",
    description: "Build and program autonomous robots",
    date: "March 17-18, 2025",
    image: "public/robot-and-ai-technology-showcase.jpg",
  },
  {
    id: 6,
    name: "Design Thinking Workshop",
    category: "workshop",
    prize: "Free",
    description: "Learn UX/UI design principles",
    date: "March 16, 2025",
    image: "public/people-networking-at-tech-conference.jpg",
  },
  {
    id: 7,
    name: "Cultural Dance Night",
    category: "cultural",
    prize: "₹1 Lakh",
    description: "Traditional and modern dance performances",
    date: "March 17, 2025",
    image: "images/cultural-dance.jpg",
  },
  {
    id: 8,
    name: "Cloud Computing Bootcamp",
    category: "workshop",
    prize: "Free",
    description: "AWS and Azure fundamentals",
    date: "March 15, 2025",
    image: "images/cloud-bootcamp.jpg",
  },
];

// ===== RENDER EVENTS =====
function renderEvents(filter = "", sort = "") {
  const grid = document.getElementById("eventsGrid")
  if (!grid) return

  let filtered = eventsData

  // Apply category filter
  if (filter) {
    filtered = filtered.filter((event) => event.category === filter)
  }

  // Apply sorting
  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sort === "prize") {
    filtered.sort((a, b) => {
      const aPrize = Number.parseInt(a.prize.replace(/[^\d]/g, "")) || 0
      const bPrize = Number.parseInt(b.prize.replace(/[^\d]/g, "")) || 0
      return bPrize - aPrize
    })
  }

  // Render events
  grid.innerHTML = filtered
    .map(
      (event) => `
    <div class="card" style="cursor: pointer;" onclick="viewEventDetail(${event.id})">
      <h3>${event.name}</h3>
      <p><strong>Category:</strong> ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</p>
      <p><strong>Prize:</strong> <span style="color: var(--accent-secondary);">${event.prize}</span></p>
      <p>${event.description}</p>
      <p style="color: var(--text-muted); font-size: 14px; margin-top: 15px;">📅 ${event.date}</p>
      <button class="btn btn-primary" style="margin-top: 15px; width: 100%;">View Details</button>
    </div>
  `,
    )
    .join("")
}

function viewEventDetail(eventId) {
  // Store event ID in sessionStorage and redirect
  sessionStorage.setItem("selectedEventId", eventId)
  window.location.href = "event-detail.html"
}

// ===== FILTER & SORT EVENT LISTENERS =====
const categoryFilter = document.getElementById("categoryFilter")
const sortFilter = document.getElementById("sortFilter")

categoryFilter?.addEventListener("change", function () {
  renderEvents(this.value, sortFilter?.value || "")
})

sortFilter?.addEventListener("change", function () {
  renderEvents(categoryFilter?.value || "", this.value)
})

// Initial render
renderEvents()

const eventsContainer = document.getElementById("events-container");

eventsData.forEach(event => {
  const card = document.createElement("div");
  card.classList.add("event-card");
  card.innerHTML = `
    <img src="${event.image}" alt="${event.name}" class="event-img">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    <div class="event-meta">
      <span>${event.date}</span>
      <span>${event.prize}</span>
    </div>
  `;
  eventsContainer.appendChild(card);
});

