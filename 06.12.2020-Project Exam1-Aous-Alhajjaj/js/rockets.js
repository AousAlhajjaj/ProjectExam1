const url = "https://api.spacexdata.com/v4/rockets";

const companyData = document.querySelector(".rockets-info") 

async function getInfo(){

    try{
        const response = await fetch(url);
        const results = await response.json();
        const data = results;

        console.log(data);

        companyData.innerHTML = "";

        for (let i=0, len=data.length; i<len; i++){
            
            
            

            companyData.innerHTML += `<h1>Name: <span>${data[i].name}</span></h1>
                                      <h1>Company: <span>${data[i].company}</span></h1>
                                      <h1>Cost Per Launch: <span>${data[i].cost_per_launch}</span></h1>
                                      <h1>First Flight: <span>${data[i].first_flight}</span></h1>
                                      <h1>Country: <span>${data[i].country}</span></h1>
                                      <h1>Description:</h1>
                                      <p>${data[i].description}</p>
                                      <h1>Diameter Per Meter: <span>${data[i].diameter.meters}</span></h1>
                                      <h1>HeightPer Meter: <span>${data[i].height.meters}</span></h1>
                                      <h1>Mass Per kg: <span>${data[i].mass.kg}</span></h1>
                                      <h1>Links</h1>
                                      <a href="${data[i].wikipedia}" class="button">Reddit</a>
                                      <div class="rockets-img">
                                      <img src="${data[i].flickr_images[0]}">
                                      <img src="${data[i].flickr_images[1]}">
                                      </div> 
                                      `
          
            
        }


                         
        }
    


    catch(error) {
        console.log(error);
        companyDataData.innerHTML = message("error", error);
    }
}



getInfo();