package com.riya.jobapplicationtracker.service;

import com.riya.jobapplicationtracker.model.JobApplication;
import com.riya.jobapplicationtracker.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class JobApplicationService {

    // Dependency injection of repository
    private final JobApplicationRepository jobRepo;

    public JobApplicationService(JobApplicationRepository jobRepo) {
        this.jobRepo = jobRepo;
    }

    // 🔍 Retrieve all job applications from the database
    public List<JobApplication> getAllApplications() {
        return jobRepo.findAll();
    }

    // ➕ Create a new job application
    public JobApplication createApplication(JobApplication jobApplication) {
        // Defensive check: ensure appliedDate is not null (fallback to today)
        if (jobApplication.getAppliedDate() == null) {
            jobApplication.setAppliedDate(LocalDate.now());
        }
        // No need to set lastUpdated here — it's handled by @PrePersist in entity
        return jobRepo.save(jobApplication);
    }

    // ❌ Delete a job application by ID
    public void deleteApplication(Long id) {
        jobRepo.deleteById(id);
    }

    // 🔁 Update an existing job application by ID
    public JobApplication updateApplication(Long id, JobApplication updatedApplication) {
        // First fetch the application from DB or throw an error
        JobApplication existing = jobRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found with ID: " + id));

        // Update all fields from the request
        existing.setCompanyName(updatedApplication.getCompanyName());
        existing.setJobTitle(updatedApplication.getJobTitle());
        existing.setLocation(updatedApplication.getLocation());
        existing.setStatus(updatedApplication.getStatus());
        existing.setAppliedDate(updatedApplication.getAppliedDate());
        existing.setInterviewDate(updatedApplication.getInterviewDate());
        existing.setRejectionDate(updatedApplication.getRejectionDate());

        // No need to manually set lastUpdated — it's handled by @PreUpdate in entity
        return jobRepo.save(existing);
    }

    // 🎯 Filter applications by status
    public List<JobApplication> getApplicationsByStatus(String status) {
        return jobRepo.findByStatus(status);
    }

    public List<JobApplication> searchByCompanyName(String keyword) {
        return jobRepo.findByCompanyNameContainingIgnoreCase(keyword);
    }

    public List<JobApplication> searchByJobTitle(String keyword) {
        return jobRepo.findByJobTitleContainingIgnoreCase(keyword);
    }

    public List<JobApplication> searchByLocation(String keyword) {
        return jobRepo.findByLocationContainingIgnoreCase(keyword);
    }

    // 🧠 Summary:
    // - This service layer contains business logic to connect controller ⇄
    // repository
    // - Handles validation, conditional logic, and defensive programming
    // - Keeps your code maintainable and interview-ready!

    // Service Layer:
    // This is where we:
    // Write business logic (e.g., saving, updating, retrieving applications)
    // Connect the controller (HTTP requests) to the repository (database)
    // We can add more like update, getById, filterByStatus later

    // Quick Recap of What This Service Layer Does:
    // It’s a middleman between the controller and repository.
    // All your business logic lives here — clean separation of concerns.
    // This makes your app maintainable and testable (a big deal in interviews).
}
