# EventVerse – Tech Fest Event Portal

A modern, dark-themed event management portal built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies – just clean, efficient code.

## Project Structure

\`\`\`
EventVerse/
├── index.html                 # Home page with hero section
├── about.html                 # About EventVerse & team
├── events.html                # Event catalog with filtering
├── event-detail.html          # Individual event details
├── schedule.html              # Interactive fest schedule
├── competitions.html          # Competition showcase
├── register.html              # Registration form with validation
├── dashboard.html             # User registration dashboard
├── gallery.html               # Photo gallery with lightbox
├── contact.html               # Contact form & info
├── style.css                  # Global styles & animations
├── main.js                    # Shared functionality
├── index.js                   # Homepage specific
├── events.js                  # Events page logic
├── event-detail.js            # Event details
├── schedule.js                # Schedule timeline
├── register.js                # Registration validation
├── dashboard.js               # Dashboard logic
├── gallery.js                 # Gallery & lightbox
├── contact.js                 # Contact form
\`\`\`

## Features

### Design & UX
- Ultra-modern dark theme inspired by AI/neural design
- Smooth animations and transitions throughout
- Glowing effects and glassmorphism elements
- Fully responsive across all devices
- Color scheme: Deep blues, cyans, and glowing accents

### Functionality
- **Registration**: Client-side validation with localStorage persistence
- **Dashboard**: Track registered events with confirmation status
- **Gallery**: Image lightbox with hover animations
- **Schedule**: Interactive timeline with day filtering
- **FAQ**: Accordion-style collapsible sections
- **Admin Panel**: View all registrations and contact messages
- **Navigation**: Fixed navbar, responsive sidebar, smooth scrolling

### Technical Details
- Pure HTML5, CSS3, JavaScript (ES6+)
- No external dependencies or frameworks
- localStorage for data persistence
- Responsive flexbox & grid layouts
- CSS animations and transitions
- Intersection Observer for scroll animations
- Event delegation for dynamic content

## Color Palette

| Element | Color | Use |
|---------|-------|-----|
| Primary BG | #060B17 | Deep immersive background |
| Surface | #0E1627 | Cards and panels |
| Primary Accent | #3A80F6 | Main highlights |
| Secondary Accent | #00C4FF | Interactive elements |
| Glow | #8AEFFF | Luminescent effects |
| Primary Text | #E6ECFF | Main content |
| Muted Text | #9AA4C2 | Secondary text |
| Border | #1C2942 | Structural lines |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

1. Download all files
2. Open `index.html` in your browser
3. No build process required!

## Usage

### Navigation
- Use the navbar to navigate between main pages
- Click the hamburger icon for the responsive sidebar
- Sidebar contains links to all 15 pages

### Registration
- Fill out the registration form on `/register.html`
- Select multiple events
- Form validation ensures data integrity
- Data stored in browser's localStorage

### Admin Panel
- Visit `/admins.html` to view all registrations
- See contact messages and analytics
- No authentication required (demo only)

## Data Persistence

All data is stored in the browser's localStorage:
- `registrations` - User registrations
- `contactMessages` - Contact form submissions

Clear browser cache to reset all data.

## Customization

### Colors
Edit CSS variables in `style.css`:
\`\`\`css
:root {
  --bg-primary: #060B17;
  --accent-primary: #3A80F6;
  /* ... more variables ... */
}
\`\`\`

### Content
All page content is hardcoded in HTML. Edit individual `.html` files to change text, images, or structure.

### Events Data
Event data is stored in JavaScript arrays in each page's `.js` file. Modify arrays to add/remove events.

## Performance

- Lightweight: ~50KB total (all files combined)
- Fast load times with no external dependencies
- Smooth 60fps animations
- Optimized image placeholders

## Future Enhancements

- Backend API integration
- User authentication
- Database for persistent storage
- Payment integration
- Email notifications
- Real-time updates

## Credits

Built with passion for EventVerse 2025. Designed for maximum innovation and engagement.

---

**EventVerse – Ignite the Future of Innovation**
