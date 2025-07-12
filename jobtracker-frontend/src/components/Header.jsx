const greetings = [
    "Keep pushing forward 🚀",
    "One step at a time 🧗‍♀️",
    "You’ve got this 💪",
    "Eyes on the prize 🎯",
    "Every rejection is redirection 🔁",
];

const Header = () => {
    const greeting =
        new Date().getHours() < 12 ? "Good Morning🌅" : "Good Evening🌙";
    const quote = greetings[Math.floor(Math.random() * greetings.length)];

    return (
        <header className="header">
            <h2>{greeting}, Riya!</h2>
            <p>{quote}</p>
        </header>
    );
};

export default Header;
