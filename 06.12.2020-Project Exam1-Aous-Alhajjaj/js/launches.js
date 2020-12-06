const url = "https://api.spacexdata.com/v4/launches";

const launchesData = document.querySelector(".launches-info")

async function getLaunches() {

try {
    const response = await fetch(url);

    const results = await response.json();
    const data = results;

    launchesData.innerHTML = "";

    console.log(data);

    for (let i = 109; i < data.length; i++) {

       
        
       

        launchesData.innerHTML += `
                                    <h1>${data[i].name}</h1>
                                    <h2>Flight Number: <span>${data[i].flight_number}</span></h2>
                                    <h2>Date: <span>${data[i].date_utc}</span></h2>
                                    <div class="details"><h2>Details:</h2>
                                    <p>${data[i].details}</p></div>
                                    <h2>Links</h2>
                                    <div class="launches-links">
                                    <a href="${data[i].links.webcast}" class="button">Webcast</a>
                                    <a href="${data[i].links.wikipedia}" class="button">wikipedia</a>
                                    <a href="${data[i].links.reddit.campaign}" class="button">Reddit</a>
                                    <a href="${data[i].links.reddit.launch}" class="button">Reddit</a>
                                    </div>`  
        
    }
}

catch(error) {
    console.log(error);
    launchesData.innerHTML = message("error", error);
}

}

getLaunches();



