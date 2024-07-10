// Función para obtener los repositorios de GitHub
async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/<tu-usuario>/repos');
    const repos = await response.json();
    displayRepos(repos);
}

// Función para mostrar los repositorios en la página
function displayRepos(repos) {
    const reposContainer = document.getElementById('repos-container');
    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo';
        repoElement.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description}</p>
            <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
        `;
        reposContainer.appendChild(repoElement);
    });
}

// Llamar a la función para obtener y mostrar los repositorios
fetchRepos();