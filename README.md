# Feedback Dashboard

A modern, responsive React.js application designed to collect user feedback and display responses in real-time. This project demonstrates proficiency in React.js, state management, and UI/UX design principles, meeting the requirements of a take-home assignment.

## 📖 Overview

The **Feedback Dashboard** allows users to submit their names and comments through an intuitive form. It simulates a real-time response mechanism with a brief delay and stores feedback history in localStorage for persistence. The application is styled for responsiveness and ease of use.

### Features

#### Core Features
1. **Responsive User Interface**:
   - A single-page application (SPA) built with React.js.
   - Includes a user-friendly form for inputting feedback.
   - Displays feedback with system-generated responses.
   
2. **Simulated Real-Time Interaction**:
   - Uses a `setTimeout` function to simulate feedback processing delays.
   - Displays a "processing" message during the delay.

3. **State Management**:
   - Utilizes `useState` and `useEffect` hooks to manage:
     - User inputs
     - Feedback history
     - Loading state

4. **Styling**:
   - Built with TailwindCSS for a clean and responsive layout.

#### Optional Features
1. **Persistent State**:
   - Saves feedback history in localStorage to retain data after a page refresh.

2. **Feedback History**:
   - Displays all previous comments and feedback in a sortable table.

3. **Deployment**:
   - Ready for deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- npm or yarn for dependency management

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-dashboard.git
   cd feedback-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

- **`/src/components`**: Reusable components like `Navbar`, `Footer`, `ReactTable`, etc.
- **`/src/pages`**: Contains the `FeedbackDashboard` page.
- **`/src/styles`**: TailwindCSS configurations and additional styles.

---

## 🧪 Testing

Ensure all features work as expected:
1. Submit feedback through the form and verify the simulated response.
2. Refresh the page to confirm data persistence via localStorage.
3. Test responsiveness on different screen sizes.

---

## 🖌️ Customization

- **Styling**: Modify TailwindCSS configurations in the `tailwind.config.js` file.
- **Features**: Extend functionality by adding new columns or actions in the feedback table.

---

## Challenges Faced

1. **Simulating Real-Time Interaction**: Ensured the response delay was realistic while maintaining a seamless user experience.
2. **Persisting Data**: Leveraged localStorage effectively without introducing performance bottlenecks.
3. **Responsive Design**: Ensured the UI worked well across devices of varying screen sizes.

---

## 📈 Future Enhancements
1. Add user authentication to allow personalized feedback tracking.
2. Enable advanced filtering and sorting in the feedback history table.
3. Deploy the application for wider accessibility.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Live Demo

If deployed, you can access the live application here: [Live Demo]([https://your-deployment-link.com](https://feedback-dashboard-spa.vercel.app/)).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/feedback-dashboard/issues).

---

## 👤 Author

- **Name**: Joshua Olujimi  
- **GitHub**: [github.com/your-username](https://github.com/dafejimi)  

---

