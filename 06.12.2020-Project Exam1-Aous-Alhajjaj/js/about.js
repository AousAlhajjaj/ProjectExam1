const url = "https://api.spacexdata.com/v4/company";

const companyData = document.querySelector(".company-info") 

let name, ceo, coo, cto, cto_propulsion, employees, founded, 
founder, summary, valuation, twitter, elon_twitter, website, 
flickr,  address, city, state

fetch(url)
.then( (Response) => Response.json())
.then( (data) => {
    console.log(data);
    name = data.name;
    ceo = data.ceo;
    coo = data.coo;
    cto = data.cto;
    cto_propulsion = data.cto_propulsion;
    employees = data.employees;
    founded = data.founded;
    founder = data.founder;
    summary = data.summary;
    valuation = data.valuation;
    address = data.headquarters.address;
    city = data.headquarters.city;
    state = data.headquarters.state;
    twitter = data.links.twitter;
    elon_twitter = data.links.elon_twitter;
    website = data.links.website;
    flickr = data.links.flickr;
    console.log(flickr);

            document.getElementById('company-info').innerHTML=
                                                              `<h1 id="value-name">` +name+ `</h1>`+

                                                              `<table>`+ 
                                                              `</tr>`+
                                                              `<td id="key">CEO:</td>` +
                                                              `<td id="value">` +ceo+ `</td>`+
                                                              `</tr>`+

                                                              `<tr>`+
                                                              `<td id="key">COO:</td>` +
                                                              `<td id="value">` +coo+ `</td>`+
                                                              `</tr>`+

                                                              `<tr>`+
                                                              `<td id="key">CTO:</td>` +
                                                              `<td id="value">` +cto+ `</td>`+
                                                              `</tr>`+

                                                              `<tr>`+
                                                              `<td id="key">CTO propulsion:</td>` +
                                                              `<td id="value">` +cto_propulsion+ `</td>`+
                                                              `</tr>`+

                                                              `<tr>`+
                                                              `<td id="key">Employees:</td>` +
                                                              `<td id="value">` +employees+ `</td>`+
                                                              `</tr>`+

                                                              `<tr>`+
                                                              `<td id="key">Founded:</td>` +
                                                              `<td id="value">` +founded+ `</td>`+
                                                              `</tr>`+


                                                              `<tr>`+
                                                              `<td id="key">Founder:</td>` +
                                                              `<td id="value">` +founder+ `</td>`+
                                                              `</tr>`+


                                                              `<tr>`+
                                                              `<td id="key">Valuation:</td>` +
                                                              `<td id="value">` +valuation+ `</td>`+
                                                              `</tr>`+
                                                              
                                                              `<tr>`+
                                                              `<td id="key">Address:</td>` +
                                                              `<td id="value">` + address +` ` + city + ` ` + state+ `</td>`+
                                                              `</tr>`+
                                                              `</table>`+

                                                              `<h2 id="key">Summary:</h2>`+
                                                              `<p id="value-text">` +summary+ `</p>`+


                                                              `<h2 id="key-link">links:</h2>` +
                                                              `<section id="company-links">` + 
                                                              `<a href="` +twitter+ `" class="button value-link">Twitter</a>`+
                                                              `<a href="` +elon_twitter+ `" class="button value-link">Elon Musk's Twitter</a>`+
                                                              `<a href="` +website+ `" class="button value-link">Website</a>`+
                                                              `<a href="` +flickr+ `" class="button value-link">Flickr</a>` + `</section>`;
                                    
                                     
    })

    .catch( (error) => console.log("No info"));




    