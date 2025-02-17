# Alexander Zimmerer | Portfolio

## About Me

I am an experienced Team Manager with over 10 years in System Engineering & Software Architecture, specializing in autonomous driving, functional safety, and model-based development.

## Skills

<div id="skills-chart"></div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const skills = {
        labels: ['System Engineering', 'Software Architecture', 'Autonomous Driving', 'Functional Safety', 'Model-Based Development'],
        datasets: [{
            label: 'Skill Level',
            data: [5, 5, 4, 4, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    window.onload = function() {
        const ctx = document.getElementById('skills-chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: skills,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });
    };
</script>

## Projects

<div id="github-projects"></div>

## Contact

[LinkedIn](https://www.linkedin.com/in/alexander-zimmerer-97620275/) | [Email](mailto:alexander.zimmerer1988@gmail.com)

<script>
    const githubUsername = "AlZi-88"; // Set your actual GitHub username here
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }
        return response.json();
    })
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

<style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; background: #f4f4f4; }
    header { background: #333; color: white; padding: 20px; font-size: 24px; }
    section { max-width: 800px; margin: 20px auto; padding: 20px; background: white; border-radius: 8px; }
    a { color: #0073e6; text-decoration: none; }
    .projects { display: flex; flex-wrap: wrap; justify-content: center; }
    .project { background: #eee; padding: 10px; margin: 10px; border-radius: 5px; width: 45%; }
    #skills-chart { max-width: 600px; margin: 20px auto; }
</style>
