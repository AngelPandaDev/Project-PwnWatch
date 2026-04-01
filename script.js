fetch("https://haveibeenpwned.com/api/v3/breaches")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayBreaches(data);
    })
    .catch(function (err) {
        document.getElementById("search-results").innerHTML = '<p class="error-text">Could not load breaches</p>';
    });

// -------- DISPLAY ALL BREACHES --------
function displayBreaches(breaches) {
    var resultsDiv = document.getElementById("main-layout");
    resultsDiv.innerHTML = breaches.map(function (breach) {
        return `
        <div class="result-box" style="text-align: center;">
            <img src="${breach.LogoPath}" alt="${breach.Title}" style="max-width: 80px; display: block; margin: 0 auto 10px auto;">
            <h2>${breach.Title}</h2>
            <p><b>Date:</b> ${breach.BreachDate}</p>
            <div style="text-align: left; margin-top: 15px;">
            <p><b>Description:</b> ${breach.Description}</p>
            <p style="margin-top: 10px;"><b>Compromised Data:</b></p>
            <ul style="list-style-type: circle; margin-left: 30px; color: gray; font-size: 0.95rem;">
                ${breach.DataClasses.map(item => `<li>${item}</li>`).join("")}
            </ul>
            </div>
        </div>
    `;
    }).join("");
}