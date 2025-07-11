package com.riya.jobapplicationtracker.repository;

import com.riya.jobapplicationtracker.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

// This interface allows us to perform CRUD operations without writing SQL.
// Spring Boot automatically generates the implementation at runtime.

@Repository
// Marks it as a Spring-managed bean.
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

    // Custom Finder Method → Spring will auto-generate the query:
    List<JobApplication> findByStatus(String status);

    // Search by company name (case-insensitive, partial match)
    List<JobApplication> findByCompanyNameContainingIgnoreCase(String keyword);

    // Search by job title (case-insensitive, partial match)
    List<JobApplication> findByJobTitleContainingIgnoreCase(String keyword);

    // Optional: filter by location
    List<JobApplication> findByLocationContainingIgnoreCase(String keyword);

    List<JobApplication> findByStatusAndLocationContainingIgnoreCase(String status, String location);


    // You can add more like:
    // List<JobApplication> findByAppliedDateBetween(LocalDate start, LocalDate
    // end);

    // extends JpaRepository<JobApplication, Long>:
    // Tells Spring: "This repo handles JobApplication entities"
    // Long is the type of the ID field (id in your model).

    // No need to write anything else — Spring Boot will auto-generate all database
    // access methods based on this line

    // JpaRepository gives us:
    // - save()
    // - findAll()
    // - findById()
    // - deleteById()
}
