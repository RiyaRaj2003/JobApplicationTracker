const Card = ({ children, status = '', className = '' }) => {
    return (
        <div className={`card ${status} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
