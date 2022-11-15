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
    myPara1.textContent =  jsonObj[i].title
    card[i].appendChild(myPara1);

    const myParaDCurrent= document.createElement('div');
    myParaDCurrent.classList = "daily current";
    myParaDCurrent.textContent = jsonObj[i].timeframes.daily.current + ' hrs ' ;
    card[i].appendChild(myParaDCurrent);

    const myParaDPrevious = document.createElement('div');
    myParaDPrevious.classList = "daily previous";
    myParaDPrevious.textContent = 'Last day - ' + jsonObj[i].timeframes.daily.previous +' hrs' ;
    card[i].appendChild(myParaDPrevious);

    const myParaWCurrent = document.createElement('div');
    myParaWCurrent.classList= "weekly current esconder";
    myParaWCurrent.textContent =  jsonObj[i].timeframes.weekly.current + ' hrs ';
    card[i].appendChild(myParaWCurrent);

    const myParaWPrevious = document.createElement('div');
    myParaWPrevious.classList= "weekly previous esconder";
    myParaWPrevious.textContent ='Last Week - ' + jsonObj[i].timeframes.weekly.previous +' hrs' ;
    card[i].appendChild(myParaWPrevious);

    const myParaMCurrent= document.createElement('div');
    myParaMCurrent.classList = "monthly current esconder";
    myParaMCurrent.textContent = jsonObj[i].timeframes.monthly.current + ' hrs ';
    card[i].appendChild(myParaMCurrent);

    const myParaMPrevious = document.createElement('div');
    myParaMPrevious.classList = "monthly previous esconder";
    myParaMPrevious.textContent = 'Last month - ' + jsonObj[i].timeframes.monthly.previous +' hrs' ;
    card[i].appendChild(myParaMPrevious);
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



