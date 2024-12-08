// City-specific data
const cityData = {
    kyoto: {
        "إيرين": { rank: "عضو", balance: 100, item: "لا يوجد" },
        "ماساكو": { rank: "مدير", balance: 200, item: "سيف" },
    },
    osaka: {
        "كين": { rank: "مدير", balance: 500, item: "كتاب" },
        "هانا": { rank: "عضو", balance: 150, item: "قوس" },
    },
};

/**
 * Navigates to the corresponding city's page.
 * @param {string} city - The city to navigate to.
 */
function navigate(city) {
    if (city) {
        window.location.href = `${city}.html?city=${encodeURIComponent(city)}`;
    } else {
        console.error("City parameter is missing.");
    }
}

/**
 * Displays the current city name on the page.
 */
function displayCityName() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get("city");
    const cityNameElement = document.getElementById("city-name");

    if (cityNameElement) {
        cityNameElement.textContent = city ? city : "مدينة غير معروفة";
    } else {
        console.error("City name element not found in the DOM.");
    }
}

/**
 * Searches for a person in the city's data and displays their details.
 */
function searchPerson() {
    const query = document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("result");
    const city = getCityFromURL(); // Function to get city from URL query
    const data = cityData[city];

    if (!resultDiv) {
        console.error("Result container not found in the DOM.");
        return;
    }

    if (data && data[query]) {
        const details = data[query];
        resultDiv.innerHTML = `
            <p><strong>اللقب:</strong> ${query}</p>
            <p><strong>الرتبة:</strong> ${details.rank}</p>
            <p><strong>الرصيد:</strong> ${details.balance}</p>
            <p><strong>السلعة:</strong> ${details.item}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>لا توجد بيانات لهذا اللقب.</p>";
    }
}

/**
 * Utility function to extract the city from the current URL.
 */
function getCityFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("city");
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    // Check if both the menu button and the menu exist
    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            // Add or remove 'menu-open' class to toggle visibility
            if (menu.classList.contains('menu-open')) {
                menu.classList.remove('menu-open');
            } else {
                menu.classList.add('menu-open');
            }
        });
    }
});

function searchPerson() {
    const query = document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("result");
    const city = getCityFromURL(); // Function to get city from URL query
    const data = cityData[city];

    if (!resultDiv) {
        console.error("Result container not found in the DOM.");
        return;
    }

    // Clear previous results and remove the animation class before applying the new one
    resultDiv.classList.remove('show');

    if (data && data[query]) {
        const details = data[query];
        resultDiv.innerHTML = `
            <p><strong>اللقب:</strong> ${query}</p>
            <p><strong>الرتبة:</strong> ${details.rank}</p>
            <p><strong>الرصيد:</strong> ${details.balance}</p>
            <p><strong>السلعة:</strong> ${details.item}</p>
        `;
        // Add the animation class after updating the content
        setTimeout(() => {
            resultDiv.classList.add('show');
        }, 10); // Small delay to ensure the class is applied after rendering
    } else {
        resultDiv.innerHTML = "<p>لا توجد بيانات لهذا اللقب.</p>";
        // Add the animation class after updating the content
        setTimeout(() => {
            resultDiv.classList.add('show');
        }, 10);
    }
}


