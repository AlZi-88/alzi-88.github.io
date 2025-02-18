<div style="display: flex; align-items: center;">
    <div style="flex: 1; text-align: left;">
        <img src="./images/Bewerbungsfoto.jpeg" alt="Alexander Zimmerer" style="height: 150px;">
    </div>
    <div style="flex: 2;">
        <h1>🚀 Alexander Zimmerer | Portfolio</h1>  
        <h2>👨‍💻 About Me</h2>
        <p>Experienced Team Manager with over 10 years in <strong>System Engineering & Software Architecture</strong>, specializing in <strong>Autonomous Driving, Functional Safety, and Model-Based Development</strong>. Passionate about innovation, agile methodologies, and high-performing teams.</p>
    </div>
</div>

## 🌍 Mission & Vision
I believe that **technology should empower people**. My goal is to develop **safe, intelligent, and efficient systems** that improve mobility and quality of life. Through **continuous learning, innovation, and collaboration**, I strive to shape the future of **autonomous systems and robotics**. 

## 📜 Resume
[📥 Download my CV](./ressources/CV_AlexanderZimmerer.pdf)

## 🌟 Skills & Expertise
```mermaid
    graph TD;
        A[System Engineering] --> B[Autonomous Driving]
        A --> C[Functional Safety]
        A --> D[Model-Based Development]
        B --> E[AI & Machine Learning]
        B --> F[Sensor Fusion]
        C --> G[ISO 26262]
        C --> H[Cybersecurity]
```

<div id="github-projects"></div>
<script>
    const githubUsername = "AlZi-88"; // Set your GitHub username
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(data => {
        let projectContainer = document.getElementById('github-projects');
        if (data.length === 0) {
            projectContainer.innerHTML = "<p>No projects found.</p>";
            return;
        }
        data.forEach(repo => {
            let project = document.createElement('div');
            project.className = 'project';
            project.innerHTML = `<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3><p>${repo.description || 'No description available'}</p>`;
            projectContainer.appendChild(project);
        });
    })
    .catch(error => {
        console.error('Error loading repositories:', error);
        document.getElementById('github-projects').innerHTML = "<p>Error loading projects. Please try again later.</p>";
    });
</script>
<div id="github-projects"></div>

## 📬 Contact
📧 [Email](mailto:alexander.zimmerer1988@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/alexander-zimmerer-97620275/)  
🐙 [GitHub](https://github.com/AlZi-88)
