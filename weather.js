
// const userZip = prompt("What's your Zip Code?");
// const userLink = 'http://api.zippopotam.us/us/' + parseInt(userZip);  


// var client = new XMLHttpRequest();

// client.open("GET", userLink,);
// client.onreadystatechange = function() {

// 	if(client.readyState == 4) {
// 		console.log ('working');
// 	};
// 	if(client.readyState == 4 && client.status === 200) {
		
//         let zipData = JSON.parse(client.responseText);
        
//         const {places: 
//             [{"place name": placeName, state: state, latitude: lat, longitude: lon}]
//              } = zipData;
        
//       // place.textContent = placeName;      use dom here

// 	}
// }

// client.send();

const userZip = prompt("What's your Zip Code?");
const userLink = 'http://api.zippopotam.us/us/' + parseInt(userZip);  
var client = new XMLHttpRequest();
client.open("GET", userLink,);
client.onreadystatechange = function() {
    if(client.readyState == 4) {
        console.log ('working');
    };
    if(client.readyState == 4 && client.status === 200) {
        let zipData = JSON.parse(client.responseText);
        const {places: 
            [{"place name": placeName, state: state, latitude: lat, longitude: lon}]
             } = zipData;
        dom.textContent = placeName + ", " + state;
        let request = client.open("GET", `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=dcf230f9ec9de3db7414b60015a4b1bf`)
             console.log(request)
    }
}
client.send();