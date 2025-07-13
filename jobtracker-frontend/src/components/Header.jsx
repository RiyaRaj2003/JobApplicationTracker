// Header.jsx
const greetings = [
    "Keep pushing forward 🚀",
    "One step at a time 🧗‍♀️",
    "You’ve got this 💪",
    "Eyes on the prize 🎯",
    "Every rejection is redirection 🔁",
];

const Header = () => {
    const hour = new Date().getHours();
    const greeting = hour < 6 ? "Good Night 🌙" : hour < 12 ? "Good Morning 🌅" : hour < 18 ? "Good Afternoon ☀️" : "Good Evening 🌆";
    const quote = greetings[Math.floor(Math.random() * greetings.length)];

    return (
        <header className="header">
            <h2 className="greeting">{greeting}, Riya!</h2>
            <p className="quote">{quote}</p>
        </header>
    );
};

export default Header;
