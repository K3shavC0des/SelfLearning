let projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A simple personal portfolio website.",
        category: "web",
        likes: 12
    },
    {
        id: 2,
        title: "To-Do List",
        description: "A web app to add and remove tasks.",
        category: "web",
        likes: 20
    },
    {
        id: 3,
        title: "Calculator",
        description: "A basic command-line calculator.",
        category: "c",
        likes: 8
    },
    {
        id: 4,
        title: "Number Guessing Game",
        description: "Guess a randomly generated number.",
        category: "c",
        likes: 15
    },
    {
        id: 5,
        title: "Password Generator",
        description: "Generate secure random passwords.",
        category: "python",
        likes: 18
    },
    {
        id: 6,
        title: "Expense Tracker",
        description: "Track daily expenses using Python.",
        category: "python",
        likes: 25
    }
];


document.addEventListener("DOMContentLoaded", function(){
    function renderProjects(category){
        console.log("Rendering: " + category + " projects")
        const grid = document.querySelector("#projectGrid")
        const filtered = projects.filter(p => category === "all" || p.category === category)
        const html = filtered.map(p => {
            return `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.description}</p>
                        <span class="badge bg-secondary">${p.category}</span>
                    </div>
                    </div>
                </div>  
            `
        }).join("");
        grid.innerHTML = html;
    }

    let toggleBtn = document.querySelector("#darkModeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function(){
            document.body.classList.toggle("dark-mode");
            toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
        });
    }

    let allFilter = document.querySelector("#all");
    if (allFilter) {
        allFilter.addEventListener("click", () => renderProjects("all"));
    }

    let CFilter = document.querySelector("#c");
    if (CFilter) {
        CFilter.addEventListener("click", () =>renderProjects("c"));
    }
    
    let pythonFilter = document.querySelector("#python");
    if (pythonFilter) {
        pythonFilter.addEventListener("click", () =>renderProjects("python"));
    }

    let webFilter = document.querySelector("#web");
    if (webFilter) {
        webFilter.addEventListener("click", () =>renderProjects("web"));
    }
    
    renderProjects("all");
});


