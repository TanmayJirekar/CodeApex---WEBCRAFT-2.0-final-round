// ===== SPEAKERS DATA =====
const speakersData = [
  {
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    bio: "Visionary leader transforming cloud and AI technology",
  },
  {
    name: "Sundar Pichai",
    title: "CEO, Google",
    bio: "Pioneering AI and internet innovation globally",
  },
  {
    name: "Jensen Huang",
    title: "Founder & CEO, NVIDIA",
    bio: "Revolutionary in AI computing and GPU technology",
  },
]

const judgesData = [
  {
    name: "Dr. Fei-Fei Li",
    title: "AI Researcher & Entrepreneur",
    bio: "Expert in AI ethics and computer vision",
  },
  {
    name: "Andreessen Horowitz",
    title: "Venture Capitalist",
    bio: "Investor in breakthrough technologies",
  },
  {
    name: "Dr. Yann LeCun",
    title: "AI Scientist",
    bio: "Deep learning pioneer and researcher",
  },
]

// ===== RENDER SPEAKERS =====
function renderSpeakers() {
  const grid = document.getElementById("speakersGrid")
  if (!grid) return

  grid.innerHTML = speakersData
    .map(
      (speaker) => `
    <div class="speaker-card">
      <div class="speaker-avatar">🎤</div>
      <div class="speaker-info">
        <h3>${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p class="speaker-bio">${speaker.bio}</p>
      </div>
    </div>
  `,
    )
    .join("")
}

function renderJudges() {
  const grid = document.getElementById("judgesGrid")
  if (!grid) return

  grid.innerHTML = judgesData
    .map(
      (judge) => `
    <div class="speaker-card">
      <div class="speaker-avatar">⭐</div>
      <div class="speaker-info">
        <h3>${judge.name}</h3>
        <p class="speaker-title">${judge.title}</p>
        <p class="speaker-bio">${judge.bio}</p>
      </div>
    </div>
  `,
    )
    .join("")
}

renderSpeakers()
renderJudges()
