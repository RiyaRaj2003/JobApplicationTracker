import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="app-title">JobQuest</span>
                <span className="theme-icon" onClick={toggleTheme} title="Toggle Theme">
                    {theme === 'dark' ? '🌙' : '🌞'}
                </span>
            </div>

            {/* XP bar placeholder */}
            <div className="xp-bar">
                <p>XP: 70 / 100</p>
                <div className="bar">
                    <div className="fill" style={{ width: '70%' }}></div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;


