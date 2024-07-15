// Función para obtener los repositorios de GitHub con el topic "portfolio"
async function fetchRepos() {
    const username = 'fedesmartin';
    const url = `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio`;
    const response = await fetch(url);
    const result = await response.json();
    displayRepos(result.items);
}

// Función para mostrar los repositorios en la página
function displayRepos(repos) {
    const reposContainer = document.getElementById('repos-container');
    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo';
        
        // Comprobar si el repo tiene el topic "development"
        const isInDevelopment = repo.topics.includes('development');
        
        repoElement.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description}</p>
            ${isInDevelopment ? `<p class="status">En desarrollo</p>` : ''}
            <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
        `;
        reposContainer.appendChild(repoElement);
    });
}

// Llamar a la función para obtener y mostrar los repositorios
fetchRepos();