package com.riya.jobapplicationtracker.controller;

import com.riya.jobapplicationtracker.model.JobApplication;
import com.riya.jobapplicationtracker.service.JobApplicationService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications") // All endpoints will start with /api/applications
@CrossOrigin(origins = "*") // Enable frontend calls (like from localhost:3000)
public class JobApplicationController {

    private final JobApplicationService jobService;

    public JobApplicationController(JobApplicationService jobService) {
        this.jobService = jobService;
    }

    // ✅ GET all job applications
    @GetMapping
    public ResponseEntity<List<JobApplication>> getAllApplications() {
        return ResponseEntity.ok(jobService.getAllApplications());
    }

    // ✅ POST a new job application
    @PostMapping
    public ResponseEntity<JobApplication> createApplication(@RequestBody JobApplication jobApplication) {
        JobApplication saved = jobService.createApplication(jobApplication);
        return ResponseEntity.ok(saved);
    }

    // ✅ DELETE a job application by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteApplication(@PathVariable Long id) {
        jobService.deleteApplication(id);
        return ResponseEntity.ok("Deleted application with ID: " + id);
    }

    // ✅ PUT: update job application
    @PutMapping("/{id}")
    public ResponseEntity<JobApplication> updateApplication(
            @PathVariable Long id,
            @RequestBody JobApplication updatedApplication) {
        JobApplication updated = jobService.updateApplication(id, updatedApplication);
        return ResponseEntity.ok(updated);
    }

    // ✅ GET: filter by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<JobApplication>> getByStatus(@PathVariable String status) {
        List<JobApplication> list = jobService.getApplicationsByStatus(status);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/search/company")
    public List<JobApplication> searchByCompanyName(@RequestParam String keyword) {
        return jobService.searchByCompanyName(keyword);
    }

    @GetMapping("/search/title")
    public List<JobApplication> searchByJobTitle(@RequestParam String keyword) {
        return jobService.searchByJobTitle(keyword);
    }

    @GetMapping("/search/location")
    public List<JobApplication> searchByLocation(@RequestParam String keyword) {
        return jobService.searchByLocation(keyword);
    }

    // @RestController → Tells Spring this class handles web requests & returns data
    // (not views).
    // @RequestMapping("/api/applications") → All endpoints here will start with
    // this.
    // @GetMapping → GET request to fetch all jobs
    // @PostMapping → POST to add a new job
    // @DeleteMapping → DELETE to remove one by ID

    // Time to test our backend API:
    // We've built the full flow from Entity → Repo → Service → Controller. Now
    // we’re gonna:
    // Test It Using Postman / Thunder Client
}
