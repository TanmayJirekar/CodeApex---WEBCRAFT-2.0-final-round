// ===== COMPETITIONS DATA =====
const competitionsData = [
  {
    id: 1,
    name: "Code Sprint Battle",
    category: "Programming",
    prize: "₹5,00,000",
    teamSize: "1-4",
    description: "Solve algorithmic challenges in a 24-hour sprint",
    difficulty: "Hard",
    slots: "15/20",
  },
  {
    id: 2,
    name: "AI/ML Challenge",
    category: "AI & ML",
    prize: "₹7,00,000",
    teamSize: "2-5",
    description: "Build ML models to solve real-world problems",
    difficulty: "Hard",
    slots: "10/15",
  },
  {
    id: 3,
    name: "Robotics Battle",
    category: "Robotics",
    prize: "₹4,00,000",
    teamSize: "2-4",
    description: "Design and build autonomous robots",
    difficulty: "Hard",
    slots: "8/12",
  },
  {
    id: 4,
    name: "Gaming Tournament",
    category: "Gaming",
    prize: "₹2,00,000",
    teamSize: "1-2",
    description: "Competitive esports across multiple games",
    difficulty: "Medium",
    slots: "20/30",
  },
  {
    id: 5,
    name: "Web Development",
    category: "Web",
    prize: "₹3,00,000",
    teamSize: "1-3",
    description: "Build full-stack web applications",
    difficulty: "Medium",
    slots: "12/20",
  },
  {
    id: 6,
    name: "Innovation Pitch",
    category: "Entrepreneurship",
    prize: "₹6,00,000",
    teamSize: "2-5",
    description: "Pitch your innovative startup ideas",
    difficulty: "Medium",
    slots: "18/25",
  },
]

// ===== RENDER COMPETITIONS =====
function renderCompetitions() {
  const grid = document.getElementById("competitionsGrid")
  if (!grid) return

  grid.innerHTML = competitionsData
    .map(
      (comp) => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
        <h3>${comp.name}</h3>
        <span style="background: var(--accent-secondary); color: var(--bg-primary); padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">${comp.difficulty}</span>
      </div>
      <p style="color: var(--text-muted); margin-bottom: 15px;"><strong>Category:</strong> ${comp.category}</p>
      <p style="margin-bottom: 15px;">${comp.description}</p>
      <div style="margin: 15px 0; padding: 15px 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <p style="color: var(--accent-glow); font-size: 18px; font-weight: bold; margin-bottom: 10px;">${comp.prize}</p>
        <p style="color: var(--text-muted); margin-bottom: 8px;"><strong>👥 Team Size:</strong> ${comp.teamSize} members</p>
        <p style="color: var(--text-muted);"><strong>Slots:</strong> ${comp.slots}</p>
      </div>
      <button class="btn btn-primary" style="width: 100%; margin-top: 15px;">Register Team</button>
    </div>
  `,
    )
    .join("")
}

renderCompetitions()
