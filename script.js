let allBreaches = [];

// Data Fetching
fetch("https://haveibeenpwned.com/api/v3/breaches")
    .then(res => res.json())
    .then(data => {
        allBreaches = data;
        displayBreaches(data);
    })
    .catch(() => {
        document.getElementById("main-layout").innerHTML =
            '<p class="error-text">Could not load breaches</p>';
    });

// Display Function
function displayBreaches(breaches) {
    const resultsDiv = document.getElementById("main-layout");
    resultsDiv.innerHTML = breaches.map(breach => `
        <div class="result-box">
            <img src="${breach.LogoPath}" style="max-width:80px; margin:auto; display:block;">
            <h2>${breach.Title}</h2>
            <p><b>Date:</b> ${breach.BreachDate}</p>
            <p><b>Description:</b> ${breach.Description}</p>
            <div style="text-align: left; margin-top: 15px;">
                <p style="margin-top: 10px;"><b>Compromised Data:</b></p>
                <ul style="list-style-type: circle; margin-left: 30px; color: gray; font-size: 0.95rem;">
                    ${breach.DataClasses.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        </div>
    `).join("");
}

// Search Feature
document.getElementById("search-input").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = allBreaches.filter(breach =>
        breach.Title.toLowerCase().includes(keyword) ||
        breach.Description.toLowerCase().includes(keyword)
    );
    displayBreaches(filtered);
});

// Sorting Feature
document.getElementById("sort-select").addEventListener("change", function () {
    const value = this.value;
    let sorted = [...allBreaches];
    if (value === "asc") {
        sorted = sorted.sort((a, b) =>
            new Date(a.BreachDate) - new Date(b.BreachDate)
        );
    } else if (value === "desc") {
        sorted = sorted.sort((a, b) =>
            new Date(b.BreachDate) - new Date(a.BreachDate)
        );
    } else if (value === "alpha") {
        sorted = sorted.sort((a, b) =>
            a.Title.localeCompare(b.Title)
        );
    }
    displayBreaches(sorted);
});

// Toggle Theme Feature
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});