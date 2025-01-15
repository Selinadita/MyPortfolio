// Menu toggle state
let isMenuOpen = false;

// Toggle menu functionality
const toggleMenu = () => {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navLinks.classList.add("open");
        menuIcon.textContent = "close";
    } else {
        navLinks.classList.remove("open");
        menuIcon.textContent = "menu";
    }
};

// Set active navigation link
const setActiveLink = (id) => {
    document.querySelectorAll(".nav-items").forEach((link) => {
        link.classList.remove("active");
    });
    const activeLink = document.querySelector(`#link-${id}`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
};

// Intersection Observer for sections
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, { threshold: 0.6 }
);

document.addEventListener("DOMContentLoaded", () => {
            // Observe sections for active link highlighting
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => observer.observe(section));

            // Tab-related elements
            const projectsTab = document.getElementById("projectsTab");
            const certificatesTab = document.getElementById("certificatesTab");
            const techStackTab = document.getElementById("techStackTab");
            const contentContainer = document.getElementById("contentContainer");

            // Validate if all required elements exist
            if (!projectsTab || !certificatesTab || !techStackTab || !contentContainer) {
                console.error("One or more tab elements or content container is missing.");
                return;
            }

            // Project data
            const projects = [{
                    image: "./component/project1.png",
                    title: "WEBSITE REDESIGN FOR THE SOUTH KALIMANTAN REGIONAL POLICE, TAPIN RESORT",
                    description: "Redesigned the website of Polres Tapin, South Kalimantan Regional Police, as a Human-Computer Interaction course project.",
                    techStack: ["HTML", "CSS", "JavaScript"],
                },
                {
                    image: "./component/project2.png",
                    title: "DEVELOPMENT OF SUXESSTORIES FEATURE FOR PT BATU TALA SAUDARA",
                    description: "I developed an event management system from the admin side and implemented a registration feature for talents using QR code scanning.",
                    techStack: ["vuejs", "Bootstrap"],
                },
                {
                    image: "./component/project3.png",
                    title: "BUILDING THE LaporPak.com WEBSITE",
                    description: "An innovative digital platform that allows Indonesians to report problems in their neighborhood, such as fire, medical, and theft reports.",
                    techStack: ["HTML", "CSS"],
                },
                {
                    image: "./component/project4.png",
                    title: "IMPACT NATIONAL HACKATHON DESA LEUWIMALANG",
                    description: "A website that promotes Leuwimalang Village to raise awareness of its tourism potential and local culture, and encourage community participation in village development.",
                    techStack: ["HTML", "CSS", "JavaScript"],
                },
                {
                    image: "./component/project5.png",
                    title: "MY WEBSITE PORTFOLIO",
                    description: "Featuring a variety of projects I have worked on, including responsive and interactive website design and development. Each project reflects my ability to create an optimal user experience, with a focus on aesthetics and functionality.",
                    techStack: ["HTML", "CSS", "JavaScript"],
                },
            ];

            // Certificates data
            const certificates = [
                "./component/sertifikat1.jpeg",
                "./component/sertif2.png",
                "./component/sertif-3.png",
            ];

            // Tech stack data
            const techStack = [
                { name: "HTML", logo: "./component/html.svg" },
                { name: "CSS", logo: "./component/css.svg" },
                { name: "JavaScript", logo: "./component/javascript.svg" },
                { name: "Vue.js", logo: "./component/vuejs.svg" },
                { name: "React.js", logo: "./component/reactjs.svg" },
                { name: "Bootstrap", logo: "./component/bootstrap.svg" },
            ];

            // Render content based on tab
            const renderContent = (tab) => {
                contentContainer.innerHTML = "";
                switch (tab) {
                    case "Projects":
                        renderProjects();
                        break;
                    case "Certificates":
                        renderCertificates();
                        break;
                    case "Tech Stack":
                        renderTechStack();
                        break;
                    default:
                        contentContainer.innerHTML = "<p>No content available</p>";
                        break;
                }
            };

            const renderProjects = () => {
                    projects.forEach((project) => {
                                const projectCard = document.createElement("div");
                                projectCard.classList.add("project");
                                projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="card-image">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <div class="technologies">
                    ${project.techStack
                        .map(
                            (tech) =>
                                `<img src="./component/${tech.toLowerCase()}.svg" alt="${tech}" class="tech-card">`
                        )
                        .join("")}
                </div>
            `;
            contentContainer.appendChild(projectCard);
        });
    };

    const renderCertificates = () => {
        certificates.forEach((cert) => {
            const certificateCard = document.createElement("div");
            certificateCard.classList.add("certificate-card");
            certificateCard.innerHTML = `
                <img src="${cert}" alt="Certificate" class="certificate-image">
            `;
            contentContainer.appendChild(certificateCard);
        });
    };



    const renderTechStack = () => {
        techStack.forEach((tech) => {
            const techCard = document.createElement("div");
            techCard.classList.add("flip-container");
            techCard.innerHTML = `
                <div class="flip-content">
                    <div class="flip-front">
                        <img src="${tech.logo}" alt="${tech.name}" class="tech-logo">
                    </div>
                    <div class="flip-back">
                        <p class="tech-name">${tech.name}</p>
                    </div>
                </div>
            `;
            contentContainer.appendChild(techCard);
        });
    };

    // Tab click events
    projectsTab.addEventListener("click", () => {
        setActiveTab("Projects");
        renderContent("Projects");
    });

    certificatesTab.addEventListener("click", () => {
        setActiveTab("Certificates");
        renderContent("Certificates");
    });

    techStackTab.addEventListener("click", () => {
        setActiveTab("Tech Stack");
        renderContent("Tech Stack");
    });

    const setActiveTab = (tab) => {
        document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
        if (tab === "Projects") projectsTab.classList.add("active");
        if (tab === "Certificates") certificatesTab.classList.add("active");
        if (tab === "Tech Stack") techStackTab.classList.add("active");
    };

    // Initial render
    renderContent("Projects");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Display the form data (for demonstration)
    console.log(formData);

    // Show alert on form submission
    alert("Form Submitted!");
  });
});