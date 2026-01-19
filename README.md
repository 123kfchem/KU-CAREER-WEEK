# KU-CAREER-WEEK
# 🎓 Career Week Landing Page

A modern, **mobile‑first event landing page** built with **HTML, CSS, and JavaScript**.
Designed to promote **Career Week** with animations, music, countdown timer, and visual effects.

---

## ✨ Features

* 📱 **Mobile‑first responsive design**
* 🎵 **Inspirational background music** (user‑activated)
* 🧑‍🦱 **Rotating profile picture** with glow effects
* 🏷️ Person name and **Group C** label
* ⏳ **Live countdown timer** to Saturday 00:00

  * Days
  * Hours
  * Minutes
  * Seconds
  * Microseconds
* 🌟 **Animated motivational slogans**
* 🌈 **North‑to‑South glowing light rays**
* 🖼️ **Left‑side fading image slideshow**
* 🎆 **Right‑side canvas‑based fireworks animation**

---

## 📁 Project Structure

```
career_week/
│── index.html        # Main HTML file
│── styles.css        # Styling & animations
│── script.js         # Timer, slideshow & canvas fireworks
│── background.jpg    # Background image
│── person.jpg        # Profile picture
│── left1.jpg         # Slideshow image 1
│── left2.jpg         # Slideshow image 2
│── left3.jpg         # Slideshow image 3
│── music.mp3         # Inspirational background music
│── README.md         # Project documentation
```

---

## 🚀 Getting Started

1. **Clone or download** the project folder
2. Place all required images and music files in the same directory
3. Open `index.html` in any modern browser (Chrome, Edge, Firefox)

> 📱 For mobile devices, tap the **Play Music** button once to enable sound (browser requirement).

---

## 🛠️ Customization Guide

### Change Person Name / Group

Edit in `index.html`:

```html
<div class="name">John Doe</div>
<div class="group">Group C</div>
```

### Change Countdown Target

Edit in `script.js`:

```javascript
getNextSaturdayMidnight()
```

You can modify this to any date/time you want.

### Add or Remove Slideshow Images

* Add more images to the folder
* Update the `<img>` tags inside `.left-slideshow` in `index.html`

### Change Music

Replace `music.mp3` with any inspirational audio file (MP3 recommended).

---

## 🌐 Browser Compatibility

* ✅ Chrome (Desktop & Mobile)
* ✅ Edge
* ✅ Firefox
* ⚠️ Safari (music requires user interaction)

---

## 📌 Best Use Cases

* Career Week / Career Day events
* University or college announcements
* School exhibitions & open days
* Motivational or awareness campaigns

---

## 🔒 License

This project is **free to use for educational and non‑commercial purposes**.
You may modify and adapt it to your needs.

---

## 🙌 Credits

Designed & developed for **Career Week promotion**.

> *"It is better to create opportunities than to wait."*

---

## 💡 Future Improvements

* Music beat‑synced fireworks
* Online deployment (GitHub Pages / Netlify)
* Admin panel for editing content
* Multi‑speaker profile support

---

🎉 **ALL ARE WELCOME TO CAREER WEEK!**
