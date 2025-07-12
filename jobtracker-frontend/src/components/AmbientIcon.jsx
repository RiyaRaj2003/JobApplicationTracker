import { useTheme } from '../context/ThemeContext';

const AmbientIcon = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '🌙' : '🌞'}
        </div>
    );
};

export default AmbientIcon;

