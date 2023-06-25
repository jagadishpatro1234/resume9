let btan = document.getElementById("bttn")
let btn = document.getElementById("btn")
let weather = document.getElementById("weather")
let back = document.getElementById("back")
let imag = document.getElementById("immgg")
let inp = document.querySelector("input")
let search = document.getElementById("search")
let a = document.getElementById("a")
let b = document.getElementById("b")
let hum = document.getElementById("hum")
let km = document.getElementById("km")
let immg = document.getElementById("immg")

btan.addEventListener("click", (e)=>{
    weather.style.transform="rotateY(-180deg)"
    back.style.transform="rotateY(0deg)"
})
btn.onclick = function(){
    back.style.transform="rotateY(180deg)"
    weather.style.transform="rotateY(0deg)"
}

let keyword = ""

async function weatherresult(){
    keyword = inp.value
    
    let url = `https://api.openweathermap.org/data/2.5/weather?unit=metric&q=${keyword}&appid=863242cfb2b1d357e6093d9a4df19a4b`
    let p = await fetch(url)
    let data = await p.json()
    console.log(data)
    b.innerHTML = data.name
    a.innerHTML = Math.round(data.main.temp-273) + "°C"
    hum.innerHTML = Math.round(data.main.humidity) + "%"
    km.innerHTML = Math.round(data.wind.speed) + "km/h"

    if(data.weather[0].main == "Clouds"){
        immg.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
    }
    else if(data.weather[0].main == "Clear"){
        immg.src = "https://cdn-icons-png.flaticon.com/512/3222/3222691.png"
    }
    else if(data.weather[0].main == "Rain"){
        immg.src = "https://cdn-icons-png.flaticon.com/512/4958/4958557.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        immg.src = "https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
    }
    else if(data.weather[0].main == "mist"){
        immg.src = "https://cdn-icons-png.flaticon.com/512/6142/6142637.png"
    }
}
search.onclick = function(){
    weatherresult()
}

