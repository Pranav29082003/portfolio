/**
 * projects.js
 * Dynamically loads Data Analyst projects into the portfolio grid
 */

// 1. Project Data Store (Add, remove, or edit your projects here)
const dataProjects = [
    {
        title: "HR Analytics - Employee Attrition Analysis",
        description: "This project focuses on analyzing employee attrition data to identify workforce trends, understand factors influencing employee turnover, and provide actionable insights for improving employee retention.",
        image: "assets/images/hranalytics-thumbnail.png",
        tags: ["SQL","Power BI", "Python"],
        caseStudyLink: "#", // Link to an internal page, medium article, or data story
        githubLink: "https://github.com/Pranav29082003/Data-Analytics-Projects/tree/main/HR%20Analytics%20Case%20Study"
    },
    {
        title: "Blinkit Operations & Sales Performance Dashboard",
        description: "An end-to-end business intelligence project modeling & analyzing the operational logistics & sales performance of Blinkit (India's Last Minute App).",
        image: "assets/images/blinkit-thumbnail.png",
        tags: ["Power BI", "DAX", "Excel"],
        caseStudyLink: "#",
        githubLink: "https://github.com/Pranav29082003/Data-Analytics-Projects/tree/main/Blinkit%20Sales%20Analysis"
    },
    {
        title: "Healthcare Operations & Financial Analytics (60K Patients)",
        description: "This project provides a comprehensive end-to-end analysis of a healthcare dataset containing 60,000 patient records.",
        image: "assets/images/healthcare-thumbnail.png",
        tags: ["Python", "SQL", "Power BI"],
        caseStudyLink: "#",
        githubLink: "https://github.com/Pranav29082003/Data-Analytics-Projects/tree/main/Healthcare%20analysis"
    }
];

// 2. Function to render projects dynamically
function renderProjects() {
    const container = document.getElementById("projects-container");
    
    // Safety check in case the container ID doesn't exist on the page
    if (!container) return;

    // Clear any hardcoded placeholder items before injecting dynamic ones
    container.innerHTML = "";

    // Loop through the data array and construct the HTML cards
    dataProjects.forEach(project => {
        // Map out the tool tags into individual HTML spans
        const tagHTML = project.tags
            .map(tag => `<span class="tech-tag">${tag}</span>`)
            .join("");

        // Construct the project card layout
        const cardHTML = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title} Thumbnail" class="project-img" onerror="this.src='https://via.placeholder.com/400x200?text=Data+Project'">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags-container">
                        ${tagHTML}
                    </div>
                    <div class="project-links">
                        <a href="${project.caseStudyLink}" class="view-project">Case Study</a>
                        <a href="${project.githubLink}" target="_blank" class="github-link">GitHub</a>
                    </div>
                </div>
            </div>
        `;

        // Append the constructed card into the DOM grid
        container.innerHTML += cardHTML;
    });
}

// 3. Initialize rendering when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", renderProjects);