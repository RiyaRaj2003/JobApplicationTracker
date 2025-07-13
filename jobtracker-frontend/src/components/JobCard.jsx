// JobCard.jsx – Renders a single job application card
import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ job }) => {
    const { company, title, location, appliedDate, status } = job;
    const statusClass = status ? status.toLowerCase() : "";

    return (
        <div className={`job-card ${statusClass}`}>
            <h4 className="job-title">{title || "Untitled Role"}</h4>
            <p className="job-company">{company || "Unknown Company"}</p>
            <p className="job-location">{location || "Unknown Location"}</p>
            {appliedDate && <p className="job-date">📅 Applied: {appliedDate}</p>}
        </div>
    );
};

export default JobCard;

