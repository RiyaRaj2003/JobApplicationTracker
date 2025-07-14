// AddJobModal.jsx
import React, { useState } from "react";
import "../styles/AddJobModal.css";

const AddJobModal = ({ onClose, onAdd }) => {
    const [form, setForm] = useState({
        title: "",
        company: "",
        location: "",
        appliedDate: "",
        status: "Applied"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New Job</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <input name="title" placeholder="Job Title" required onChange={handleChange} />
                    <input name="company" placeholder="Company" required onChange={handleChange} />
                    <input name="location" placeholder="Location" onChange={handleChange} />
                    <input type="date" name="appliedDate" required onChange={handleChange} />
                    <select name="status" value={form.status} onChange={handleChange}>
                        <option>Applied</option>
                        <option>Interviewing</option>
                        <option>Rejected</option>
                        <option>Offered</option>
                    </select>
                    <div className="modal-actions">
                        <button type="submit">Add Job</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobModal;
