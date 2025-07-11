package com.riya.jobapplicationtracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;

//This class represents the JobApplication entity.
//It is mapped to a table in the MySQL database using JPA annotations.
@Entity
public class JobApplication {

    // Primary key with auto-increment strategy (like MySQL AUTO_INCREMENT)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Job application fields
    private String companyName; // Name of the company applied to
    private String jobTitle; // Title of the job position
    private String location; // Job location
    private String status; // Status: Applied, Interviewing, Rejected, etc.
    private LocalDate appliedDate; // Date of application
    private LocalDate interviewDate; // Date of interview (nullable)
    private LocalDate rejectionDate; // Date of rejection (nullable)
    private LocalDate lastUpdated; // Timestamp of last update (automatically maintained)

    // Default constructor required by JPA.
    public JobApplication() {
    }

    // Parameterized constructor for convenience.
    // Automatically fills appliedDate with current date if null.
    public JobApplication(String companyName, String jobTitle, String location, String status,
            LocalDate appliedDate, LocalDate interviewDate, LocalDate rejectionDate) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.location = location;
        this.status = status;
        this.appliedDate = (appliedDate != null) ? appliedDate : LocalDate.now();
        this.interviewDate = interviewDate;
        this.rejectionDate = rejectionDate;
        // lastUpdated will be handled by lifecycle methods
    }

    // Automatically updates the lastUpdated field before insert or update.
    // This ensures we always have the correct "last touched" timestamp.
    @PrePersist
    @PreUpdate
    public void updateLastModifiedDate() {
        this.lastUpdated = LocalDate.now();
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(LocalDate appliedDate) {
        this.appliedDate = appliedDate;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }

    public LocalDate getRejectionDate() {
        return rejectionDate;
    }

    public void setRejectionDate(LocalDate rejectionDate) {
        this.rejectionDate = rejectionDate;
    }

    public LocalDate getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    // For debugging and logging: Converts object to readable string.
    // Includes null safety (prints N/A if value is null).
    @Override
    public String toString() {
        return "JobApplication{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", location='" + location + '\'' +
                ", status='" + status + '\'' +
                ", appliedDate=" + (appliedDate != null ? appliedDate : "N/A") +
                ", interviewDate=" + (interviewDate != null ? interviewDate : "N/A") +
                ", rejectionDate=" + (rejectionDate != null ? rejectionDate : "N/A") +
                ", lastUpdated=" + (lastUpdated != null ? lastUpdated : "N/A") +
                '}';
    }

    // 🔁 Quick Recap:
    // - @Entity maps this class to a database table.
    // - @Id + @GeneratedValue sets up the primary key.
    // - @PrePersist and @PreUpdate auto-track the lastUpdated timestamp.
    // - Null handling avoids crashes and improves UX in logs.

    // Summary:
    // ✅ jobtracker → is the database/schema.
    // ✅ job_application → is the table inside that database.
    // ✅ You always INSERT INTO [table], not into the database.
}