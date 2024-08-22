// script.js
const jobs = [
    "Software Engineer ",
    "Project Manager ",
    "Data Scientist ",
    "UX Designer ",
    "Front-End Developer",
    "Back-End Developer",
    "Data Analyst",
    "Python Developer",
    "Quality Assurance Analyst",
    "AI Research Engineer"
    // Add more job titles here
];

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query) {
        const results = jobs.filter(job => job.toLowerCase().includes(query));
        if (results.length > 0) {
            results.forEach(result => {
                const div = document.createElement('div');
                div.textContent = result;
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.textContent = 'No results found';
        }
    } else {
        resultsContainer.textContent = 'Please enter a search term';
    }
});
