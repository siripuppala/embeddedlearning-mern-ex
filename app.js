// get weather details



// using promises
 function getWeather(){
    // talk to remote service
    // get the data     // send it to another function that can work on data and display
    // let city = '08536';
    try { 
    let city = document.getElementById('zipcode').value;
    let key = 'd72729578543cfc435344f99b226b1c9'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    fetch(url)
    .then((weather) => {return  weather.json()})
    .then(displayData)
    }
    catch{
        console.log(" sorry something went wrong");
    }


}


// using async -await
// async function getWeather(){
//     // talk to remote service
//     // get the data     // send it to another function that can work on data and display
//     // let city = '08536';
//     try { 
//     let city = document.getElementById('zipcode').value;
//     let key = 'd72729578543cfc435344f99b226b1c9'
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

//     let response = await fetch(url);
//     let weatherData = await response.json();


//     // console.log(weatherData);
//     displayData(weatherData);

    // update the database with this detail, on when the request was placed and 
    // for which zipcode
//     }
//     catch{
//         console.log(" sorry something went wrong");
//     }




// }

function displayData(weather){
    let mydiv = document.getElementById('w'); 
    console.log(weather);
    let tempFar = ((weather.main.temp)* 9/5) + 32 
    let temp = " Temperature: "+ tempFar + "F";
    let mintemp = " Min Temp:"+weather.main.temp_min +"C";
    let maxtemp = " Max Temp:"+weather.main.temp_max + "C";
    let weaStr = " Looks like " + weather.weather[0].description;
    let imgurl = 'https://openweathermap.org/img/wn/'+weather.weather[0].icon + '.png'
    let imgtag =  `<img src='${imgurl}' alt='icon here'/>`;
    mydiv.innerHTML = ` ${imgtag} <h3> ${temp} <br> ${mintemp} <br> ${maxtemp} </h3> <br> <h4> ${weaStr} </h4> `
}