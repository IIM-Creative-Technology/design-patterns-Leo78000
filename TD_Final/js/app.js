function fetchMetro(){
    fetch('https://api-ratp.pierre-grimaud.fr/v4/lines/metros')
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.result.metros)
            const html = data.result.metros
                .map(result =>{
                    return `
                    <option value="${result.name}">${result.name}</option>                
                    `;
                })
                .join("");

            document.querySelector("#metro").insertAdjacentHTML("beforeend",html);
        })
        .catch(error => {
            console.log(error);
        })
}

fetchMetro();

/* async function fetchData(line) {
    fetch('https://api-ratp.pierre-grimaud.fr/v4/stations/metros' + '/' + line)
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}
*/

document.querySelector("#metro").addEventListener('change', function(){
    async function fetchStation(line) {
        fetch('https://api-ratp.pierre-grimaud.fr/v4/stations/metros' + '/' + line)
            .then(response => {
                if(!response.ok) {
                    throw Error("ERROR");
                }
                return response.json();
            })
            .then(data => {
                console.log(data)

            const html = data.result.stations
            .map(result =>{
                return `
                    <option value="${result.name}">${result.name}</option>                
                    `;
            })
            .join("");


        document.querySelector("#stations").innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    })
    }

    var index_stations = document.querySelector('#metro').selectedIndex;
    console.log(index_stations)
    fetchStation(index_stations+1);
})

document.querySelector("#stations").addEventListener('change',function(){
    async function fetchTime(line, station) {
        fetch('https://api-ratp.pierre-grimaud.fr/v4/schedules/metros' + '/' + line + '/' + station  +  '/A+R')
            .then(response => {
                if(!response.ok) {
                    throw Error("ERROR");
                }
                return response.json();
            })
            .then(data => {
                console.log(data)

                const html = data.result.schedules
                    .map(result =>{
                        return `
                    <div style="display:flex;">
                    <li style="width:50%">${result.message} </li>                
                    <li style="width:50%">${result.destination}</li>   
                    <br>            
                    </div>
                    `;
                    })
                    .join("");
                    document.querySelector("#time-list").innerHTML = ('<b>Destination & prochain train :</b>' +html);
            })
            .catch(error => {
                console.log(error);
            })
    }
    var index_stations = document.querySelector('#metro').selectedIndex;
    var nom_stations = document.querySelector('#stations').value;
    console.log(index_stations)
    console.log(nom_stations)
    fetchTime(index_stations+1,nom_stations)
     setInterval(function (){
        fetchTime(index_stations+1,nom_stations)
    }, 30000)



})

