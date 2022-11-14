const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://raw.githubusercontent.com/Kurosios/Time-tracking-dashboard/main/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const datos = request.response;
    titulo(datos);
    crear(datos);

  }

  function titulo(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj[0].title;
    header.appendChild(myH1);
 
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj[0].title + ' // daily: ' + jsonObj[0].timeframes.daily.current
    header.appendChild(myPara);
  } 

function crear (jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
    const myp = document.createElement('p');
    myp.textContent = 'Titulos ' + jsonObj[i].title;
    const app = document.createElement('div');
    app.id = "app";
    app.appendChild(myp)
    header.appendChild(app);


    const myPara1 = document.createElement('div');
    myPara1.classList = "daily";
    myPara1.textContent = ' // daily: current ' + jsonObj[i].timeframes.daily.current + ' previous: ' +jsonObj[i].timeframes.daily.previous
    header.appendChild(myPara1);
    const myPara2 = document.createElement('div');
    myPara2.classList= "weekly esconder";
    myPara2.textContent = ' // weekly: current ' + jsonObj[i].timeframes.weekly.current + ' previous: ' +jsonObj[i].timeframes.daily.previous
    header.appendChild(myPara2);
    const myPara3 = document.createElement('div');
    myPara3.classList = "monthly esconder";
   
    myPara3.textContent = ' // monthly: current ' + jsonObj[i].timeframes.monthly.current + ' previous: ' +jsonObj[i].timeframes.daily.previous
    header.appendChild(myPara3);


}


};
window.addEventListener('load', function() {
 let diario = document.querySelector(".d");
let semanal = document.querySelector(".s");
let mensual = document.querySelector(".m");
const dias = document.querySelectorAll(".daily");
const semanas = document.querySelectorAll(".weekly");
const meses = document.querySelectorAll(".monthly");

console.log(dias)

diario = diario.addEventListener("click",()=>{

    for(let i = 0; i < dias.length; i++){
        dias[i].classList.remove('esconder')
    }
    for(let i = 0; i < semanas.length; i++){
        semanas[i].classList.add('esconder')
    }
    for(let i = 0; i < meses.length; i++){
        meses[i].classList.add('esconder')
    }

});
semanal = semanal.addEventListener("click",()=>{

    for(let i = 0; i < semanas.length; i++){
        dias[i].classList.add('esconder')
    }
    for(let i = 0; i < semanas.length; i++){
        semanas[i].classList.remove('esconder')
    }
    for(let i = 0; i < meses.length; i++){
        meses[i].classList.add('esconder')
    }

}
)

mensual = mensual.addEventListener("click",()=>{

    for(let i = 0; i < meses.length; i++){
        dias[i].classList.add('esconder')
    }
    for(let i = 0; i < semanas.length; i++){
        semanas[i].classList.add('esconder')
    }
    for(let i = 0; i < meses.length; i++){
        meses[i].classList.remove('esconder')
    }

}
)

})

