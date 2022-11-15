const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://raw.githubusercontent.com/Kurosios/Time-tracking-dashboard/main/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const datos = request.response;

    crear(datos);

  }




function crear (jsonObj) {
    const card = document.querySelectorAll(".small-card");
    for (var i = 0; i < jsonObj.length; i++) {
    const myPara1 = document.createElement('div');
    myPara1.classList = "title";
    myPara1.textContent = 'title: ' + jsonObj[i].title
    card[i].appendChild(myPara1);

    const myPara2 = document.createElement('div');
    myPara2.classList = "daily";
    myPara2.textContent = ' // daily: current ' + jsonObj[i].timeframes.daily.current + ' previous: ' + jsonObj[i].timeframes.daily.previous;
    card[i].appendChild(myPara2);

    const myPara3 = document.createElement('div');
    myPara3.classList= "weekly esconder";
    myPara3.textContent = ' // weekly: current ' + jsonObj[i].timeframes.weekly.current + ' previous: ' + jsonObj[i].timeframes.weekly.previous
    card[i].appendChild(myPara3);

    const myPara4 = document.createElement('div');
    myPara4.classList = "monthly esconder";
    myPara4.textContent = ' // monthly: current ' + jsonObj[i].timeframes.monthly.current + ' previous: ' + jsonObj[i].timeframes.monthly.previous
    card[i].appendChild(myPara4);
}


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
     );
     
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
     );
     

    }

