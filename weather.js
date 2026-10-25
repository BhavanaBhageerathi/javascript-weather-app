var check=function(event){
    document.getElementById("check").style.backgroundColor = "green";
    fetchWeatherData();
    
}



async function fetchWeatherData(){
    let city = document.getElementById("city").value;
    let apiKey= "e931c87db9f7b476be1d7a997610c9a2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        apiResponse= await fetch(url);
        //await will wait for the fetch and once done proceed with next step
        if(!apiResponse.ok){
            throw new Error('Http Error:',apiResponse.status);
        }
        //after fetching,parse the apiResponse and print the result
            //parse the apiResponse and print the result
            const weatherList= await apiResponse.json();
            console.log(weatherList);

            document.getElementById("cityname").style.display = "block";
            document.getElementById("cityname").innerHTML=city

            document.getElementById("temperature").style.display = "block";
            document.getElementById("temperature").innerHTML="Temperature :"+weatherList.main.temp;

            document.getElementById("description").style.display = "block";
            document.getElementById("description").innerHTML="Description :"+weatherList.weather[0].description

            document.getElementById("windspeed").style.display = "block";
            document.getElementById("windspeed").innerHTML="Windspeed :"+weatherList.wind.speed

            let iconCode = weatherList.weather[0].icon;
            document.getElementById("icon").style.display = "block";
            document.getElementById("icon").src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        

    }catch(e){
        console.error("No city found!!",e);
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML="city not found"
    }
}
// //then it funct vilikam becus,it is not a normal funct it is async funct so ,then vech vilikam so execute ayitae varu alell wrap it inside asyn funct
// // to get the data..data edkan olla ways
// async function callfetchWeatherData(){
//     myWeatherList= await fetchWeatherData();
// }

