# Alexander Zimmerer | Portfolio

## Über mich

Ich bin ein erfahrener Team Manager mit über 10 Jahren in System Engineering & Software-Architektur, spezialisiert auf autonomes Fahren, funktionale Sicherheit und modellbasierte Entwicklung.

## Projekte

<div id="github-projects"></div>

## Kontakt

[LinkedIn](https://www.linkedin.com/in/alexander-zimmerer-97620275/) | [E-Mail](mailto:alexander.zimmerer1988@gmail.com)

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
            projectContainer.innerHTML = "<p>Keine Projekte gefunden.</p>";
            return;
        }
        data.forEach(repo => {
            let project = document.createElement('div');
            project.className = 'project';
            project.innerHTML = `<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3><p>${repo.description || 'Keine Beschreibung vorhanden'}</p>`;
            projectContainer.appendChild(project);
        });
    })
    .catch(error => {
        console.error('Fehler beim Laden der Repositories:', error);
        document.getElementById('github-projects').innerHTML = "<p>Fehler beim Laden der Projekte. Bitte versuchen Sie es später erneut.</p>";
    });
</script>

<style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; background: #f4f4f4; }
    header { background: #333; color: white; padding: 20px; font-size: 24px; }
    section { max-width: 800px; margin: 20px auto; padding: 20px; background: white; border-radius: 8px; }
    a { color: #0073e6; text-decoration: none; }
    .projects { display: flex; flex-wrap: wrap; justify-content: center; }
    .project { background: #eee; padding: 10px; margin: 10px; border-radius: 5px; width: 45%; }
</style>
