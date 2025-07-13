// src/services/api.js
// api.js - ✅ Optional but recommended – Centralized place for backend API calls.
import axios from "axios";

// Base URL for your Spring Boot backend API
const API_BASE_URL = "http://localhost:8080/api/applications";

// -----------------------------
// 🔍 GET All Applications
// -----------------------------
export const getApplications = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching applications:", error);
        return [];
    }
};

// -----------------------------
// ➕ POST - Add New Application
// -----------------------------
export const addApplication = async (job) => {
    try {
        const response = await axios.post(API_BASE_URL, job);
        return response.data;
    } catch (error) {
        console.error("Error adding application:", error);
        throw error;
    }
};

// -----------------------------
// ✏️ PUT - Update Application
// -----------------------------
export const updateApplication = async (id, updatedJob) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, updatedJob);
        return response.data;
    } catch (error) {
        console.error(`Error updating application ${id}:`, error);
        throw error;
    }
};

// -----------------------------
// 🗑️ DELETE - Remove Application
// -----------------------------
export const deleteApplication = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting application ${id}:`, error);
        throw error;
    }
};

// -----------------------------
// 🔍 FILTER - Search/Filter
// -----------------------------

// Filter by keyword (company/title/location)
export const searchApplications = async (keyword) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search?keyword=${keyword}`);
        return response.data;
    } catch (error) {
        console.error("Error searching applications:", error);
        return [];
    }
};

// Filter by status (Applied, Interviewing, etc.)
export const filterByStatus = async (status) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/status/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Error filtering by status ${status}:`, error);
        return [];
    }
};

// Filter by location
export const filterByLocation = async (location) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/location/${location}`);
        return response.data;
    } catch (error) {
        console.error(`Error filtering by location ${location}:`, error);
        return [];
    }
};
