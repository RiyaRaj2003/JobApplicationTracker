package com.riya.jobapplicationtracker;

// import com.riya.jobapplicationtracker.model.JobApplication;
// import com.riya.jobapplicationtracker.repository.JobApplicationRepository;
// import org.springframework.boot.CommandLineRunner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;
// import java.time.LocalDate;

@SpringBootApplication
public class JobapplicationtrackerApplication {
	public static void main(String[] args) {
		SpringApplication.run(JobapplicationtrackerApplication.class, args);
	}

	// Test Runner to verify repo
	// @Bean
	// public CommandLineRunner testRepo(JobApplicationRepository repo) {
	// 	return args -> {
	// 		// create a sample application
	// 		JobApplication app = new JobApplication(
	// 			"Google",
	// 			"Backend Developer",
	// 			"Bangalore",
	// 			"Applied",
	// 			LocalDate.now()
	// 		);

	// 		// save to DB
	// 		repo.save(app); // 👈 this re-inserts Google every time you restart the app

	// 		// fetch all from DB
	// 		System.out.println("📄 All Job Applications:");
	// 		repo.findAll().forEach(System.out::println);
	// 	};
	// }
}
