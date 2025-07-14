// JobBoard.jsx – Kanban-style job application columns

import React from "react";
import JobCard from "./JobCard";
import "../styles/JobBoard.css";

// Status categories
const statusTypes = ["Applied", "Interviewing", "Rejected", "Offered"];

const JobBoard = ({ applications }) => {
    return (
        <div className="job-board">
            {statusTypes.map((status) => {
                const filteredJobs = applications.filter((job) => job.status === status);
                return (
                    <div className="job-column" key={status}>
                        <h3 className="column-title">{status}</h3>
                        {filteredJobs.length === 0 ? (
                            <p className="empty-column">No jobs yet</p>
                        ) : (
                            filteredJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default JobBoard;










// 3) JobBoard.jsx – Kanban-style job application columns with dummy data

// import React, { useEffect, useState } from "react";
// import JobCard from "./JobCard";
// import "../styles/JobBoard.css";
// import { getApplications } from "../services/api";

// // Define the application statuses for columns
// const statusTypes = ["Applied", "Interviewing", "Rejected", "Offered"];

// const JobBoard = () => {
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true); // Track loading state
//     const [error, setError] = useState(null);     // Track fetch errors

//     // Fetch applications from backend on mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const apps = await getApplications();
//                 setApplications(apps);
//             } catch (err) {
//                 console.error("Failed to fetch applications:", err);
//                 setError("Failed to load applications. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="job-board">
//             {loading ? (
//                 <p className="loading-message">Loading applications...</p>
//             ) : error ? (
//                 <p className="error-message">{error}</p>
//             ) : (
//                 statusTypes.map((status) => {
//                     const filteredJobs = applications.filter((job) => job.status === status);
//                     return (
//                         <div className="job-column" key={status}>
//                             <h3 className="column-title">{status}</h3>
//                             {filteredJobs.length === 0 ? (
//                                 <p className="empty-column">No jobs yet</p>
//                             ) : (
//                                 filteredJobs.map((job) => (
//                                     <JobCard key={job.id} job={job} />
//                                 ))
//                             )}
//                         </div>
//                     );
//                 })
//             )}
//         </div>
//     );
// };

// export default JobBoard;









// 2) JobBoard.jsx – Kanban-style job application columns with dummy data

// import React, { useEffect, useState } from "react";
// import JobCard from "./JobCard";
// import "../styles/JobBoard.css";

// // Status columns
// const statusTypes = ["Applied", "Interviewing", "Rejected", "Offered"];

// // Dummy test data
// const dummyApplications = [
//     {
//         id: 1,
//         company: "Google",
//         title: "Frontend Engineer",
//         location: "Bangalore",
//         appliedDate: "2025-07-10",
//         status: "Applied",
//     },
//     {
//         id: 2,
//         company: "Amazon",
//         title: "SDE Intern",
//         location: "Hyderabad",
//         appliedDate: "2025-07-05",
//         status: "Interviewing",
//     },
//     {
//         id: 3,
//         company: "Zoho",
//         title: "QA Analyst",
//         location: "Chennai",
//         appliedDate: "2025-07-02",
//         status: "Rejected",
//     },
//     {
//         id: 4,
//         company: "Microsoft",
//         title: "Software Engineer",
//         location: "Noida",
//         appliedDate: "2025-07-08",
//         status: "Offered",
//     },
// ];

// const JobBoard = () => {
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Simulate loading delay
//         const timeout = setTimeout(() => {
//             setApplications(dummyApplications);
//             setLoading(false);
//         }, 800);

//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <div className="job-board">
//             {loading ? (
//                 <p className="loading-message">Loading applications...</p>
//             ) : (
//                 statusTypes.map((status) => {
//                     const filtered = applications.filter((job) => job.status === status);

//                     return (
//                         <div className="job-column" key={status}>
//                             <h3 className="column-title">{status}</h3>
//                             {filtered.length === 0 ? (
//                                 <p className="empty-column">No jobs yet</p>
//                             ) : (
//                                 filtered.map((job) => <JobCard key={job.id} job={job} />)
//                             )}
//                         </div>
//                     );
//                 })
//             )}
//         </div>
//     );
// };

// export default JobBoard;









// 1) JobBoard.jsx – Kanban-style job application columns

// import React, { useEffect, useState } from "react";
// import JobCard from "./JobCard";
// import "../styles/JobBoard.css";
// import { getApplications } from "../services/api";

// // Define the application statuses for columns
// const statusTypes = ["Applied", "Interviewing", "Rejected", "Offered"];

// const JobBoard = () => {
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true); // Track loading state

//     // Fetch applications from backend on mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const apps = await getApplications();
//                 setApplications(apps);
//             } catch (err) {
//                 console.error("Failed to fetch applications:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="job-board">
//             {loading ? (
//                 <p className="loading-message">Loading applications...</p>
//             ) : (
//                 statusTypes.map((status) => {
//                     const filteredJobs = applications.filter((job) => job.status === status);
//                     return (
//                         <div className="job-column" key={status}>
//                             <h3 className="column-title">{status}</h3>

//                             {filteredJobs.length === 0 ? (
//                                 <p className="empty-column">No jobs yet</p>
//                             ) : (
//                                 filteredJobs.map((job) => (
//                                     <JobCard key={job.id} job={job} />
//                                 ))
//                             )}
//                         </div>
//                     );
//                 })
//             )}
//         </div>
//     );
// };

// export default JobBoard;
