// ===== GALLERY DATA =====
const galleryImages = [
  {
    title: "Opening Ceremony 2024",
    url: "./public/tech-fest-opening-ceremony-stage-lights.jpg",
  },
  {
    title: "Hackathon Session",
    url: "./public/developers-coding-at-tech-hackathon.jpg",
  },
  {
    title: "Innovation Showcase",
    url: "./public/robot-and-ai-technology-showcase.jpg",
  },
  {
    title: "Networking Event",
    url: "./public/people-networking-at-tech-conference.jpg",
  },
  {
    title: "Award Ceremony",
    url: "./public/winners-receiving-awards-on-stage.jpg",
  },
  {
    title: "Gaming Tournament",
    url: "./public/esports-gaming-tournament-competition.jpg",
  },
  {
    title: "Workshop Session",
    url: "./public/instructor-teaching-workshop-to-students.jpg",
  },
  {
    title: "Closing Celebration",
    url: "./public/festival-closing-celebration-fireworks.jpg",
  },
]

// ===== RENDER GALLERY =====
function renderGallery() {
  const gallery = document.getElementById("galleryGrid")
  if (!gallery) return

  gallery.innerHTML = galleryImages
    .map(
      (img, index) => `
    <div class="gallery-item" onclick="openLightbox('${img.url}', '${img.title}')">
      <img src="${img.url}" alt="${img.title}">
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, transparent, rgba(6, 11, 23, 0.9)); padding: 15px; color: var(--text-primary); font-size: 14px;">${img.title}</div>
    </div>
  `,
    )
    .join("")
}

function openLightbox(src, title) {
  const lightbox = document.getElementById("lightbox")
  const lightboxImage = document.getElementById("lightboxImage")
  lightboxImage.src = src
  lightboxImage.alt = title
  lightbox.classList.add("active")
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.classList.remove("active")
}

// Close lightbox on Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox()
  }
})

renderGallery()