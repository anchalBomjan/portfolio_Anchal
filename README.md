# 🎯 Modern and Animated Portfolio – Aashish Basyal

💻 **GitHub Repository:** [https://github.com/anchalBomjan/portfolio_Anchal]

---

## 📜 Description

This is a modern, interactive, and fully responsive web portfolio built to showcase the skills, experience, and projects of a **Full-Stack Developer**.
It was developed using cutting-edge frontend technologies, focusing on a smooth **user experience (UX)**, appealing **user interface (UI)**, and high performance.

The design features a subtle **neumorphism** aesthetic, creating a clean and tactile interface, enhanced with high-performance animations using **Framer Motion**.

---

## ✨ Key Features

- **🎨 Modern & Responsive Design:** Elegant layout that adapts seamlessly across all devices—from desktops to mobile phones.
- **🌗 Light & Dark Themes:** Theme switching with persistence in `localStorage`, respecting the user's system preference.
- **🚀 Smooth Animations:** Seamless animations and transitions powered by Framer Motion for an immersive browsing experience.
- **🌌 Parallax Scrolling Effects:** Decorative elements and textures move at different speeds during scrolling, adding depth to the design.
- **🃏 Interactive Components:**

  - **3D Project Cards:** Cards respond to mouse movement to create a depth effect.
  - **Switchable Timeline Layout:** The experience section features a toggleable timeline layout.

- **💻 Interactive Terminal:** Accessible via shortcut (`Ctrl + K`), allowing users to interact with the portfolio using commands (`help`, `skills`, `projects`, etc.).
- **🔧 Robust Architecture:** Built with React and TypeScript to ensure clean, maintainable, and scalable code.

---

## 🛠️ Skills and Technologies Demonstrated

This project serves as a showcase of key skills in modern frontend development.

### **Core Frontend**

- **React:** Extensive use of hooks (`useState`, `useEffect`, `useRef`, `useContext`) to build a reactive and modular application.
- **TypeScript:** Static typing for improved code safety, scalability, and maintainability.
- **Semantic HTML5:** Proper page structure for better accessibility and SEO.

### **Styling & UI/UX**

- **Tailwind CSS:** Fast and consistent UI development with a _utility-first_ approach. The theme (colors, fonts, shadows) is fully customized and dark-mode ready.
- **Design System:** A cohesive system defining colors, typography, and spacing for both light and dark themes.
- **User-Centered Design:** Attention to details, micro-interactions, clear visual hierarchy, and intuitive navigation for optimal UX.
- **Neumorphism:** Subtle shadow effects to create a tactile, modern interface.

### **Animation & Interactivity**

- **Framer Motion:** The leading animation library for React, used for:

  - Entry animations (`initial`, `animate`)
  - Scroll-based animations (`useScroll`, `useTransform`)
  - Hover and tap interactions (`whileHover`, `whileTap`)
  - Component presence management (`AnimatePresence`)

### **State Management**

- **React Context API:** Efficient global state management for theme handling, avoiding prop drilling.
- **State Lifting:** Used to share state between components (e.g., opening a project modal from a card click).

### **Accessibility (A11y)**

- **ARIA Attributes:** Use of `aria-label`, `aria-invalid`, `aria-describedby` for improved accessibility, especially in forms.
- **Keyboard Navigation:** The entire app is navigable using only the keyboard.
- **Color Contrast:** Colors are chosen to ensure legibility in both light and dark modes.

### **Development Best Practices**

- **Modular Project Structure:** Organized into logical folders (`components`, `contexts`, `constants`, `types`) for easier navigation and maintenance.
- **Reusable Components:** Generic components (`SectionWrapper`, `ProjectCard`) promote DRY principles and consistency.
- **Performance Optimization:**

  - Inline theme script in `<head>` to prevent FOUC (_Flash of Unstyled Content_).
  - Optimized animations using `will-change` and `transform`.
  - Asynchronous font loading for faster rendering.

---

## 🚀 Run Locally

To run this project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anchalBomjan/portfolio_Anchal.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   (Assuming you’re using npm)

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) in your browser to view the app.

---

## 📄 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for more details.
# portfolio_Anchal
