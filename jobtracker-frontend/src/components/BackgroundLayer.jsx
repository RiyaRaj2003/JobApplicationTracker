import React from "react";
import { useTheme } from "../context/ThemeContext";

const BackgroundLayer = () => {
    const { theme } = useTheme();

    return (
        <div className="background-layer">
            {theme === "light" && (
                <>
                    <div className="sunray-light" />
                    <div className="clouds-light" />
                    <div className="glow-light" />
                    {/* Flying birds using custom bird.svg */}
                    <div className="flying-birds">
                        <img src="/bird.svg" className="bird-svg bird-1" alt="bird" />
                        <img src="/bird.svg" className="bird-svg bird-2" alt="bird" />
                        <img src="/bird.svg" className="bird-svg bird-3" alt="bird" />
                    </div>
                </>
            )}
            {theme === "dark" && (
                <div className="starfield">
                    {[...Array(60)].map((_, i) => (
                        <div
                            key={i}
                            className="star"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BackgroundLayer;
