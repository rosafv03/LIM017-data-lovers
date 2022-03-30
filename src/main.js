import  { filterSport, filterPais,filterMedals, sortData, filterG  }  from './data.js';
import gameData from './data/athletes/athletes.js';

//export const init = () => {
    
const athletes = gameData.athletes;

const enterBtn=document.getElementById('inicio') 
enterBtn.addEventListener('click',nombreFn)
function nombreFn () {
    document.getElementById('bienvenida').style.display='none';
    document.getElementById('datos').style.display='block';  
}


const enterResumen=document.getElementById('resumen') 
enterResumen.addEventListener('click',resumenTotal)
function resumenTotal () {
    document.getElementById('bienvenida').style.display='none';
    document.getElementById('datos').style.display='none';
    document.getElementById('resumen').style.display='block';
}






const tableBody = document.querySelector('tbody')
const allAthletes = (index)=>{
    return `
    <tr>
    <td>${index.name}</td>
    <td>${index.team}</td>
    <td>${index.sport}</td>
    <td>${index.medal}</td>
    <td>${index.gender}</td>
    </tr>
    `;
}
const printScreen = (mostrar) => {
    tableBody.innerHTML = '';
    mostrar.forEach ((z)=>{
        tableBody.innerHTML += allAthletes(z);
    })
}
printScreen (athletes);

const str=document.getElementById('disciplinas');
str.addEventListener('change',(x)=>{
    const selectSport=filterSport(athletes,x.target.value);
    printScreen(selectSport)
})

const str2=document.getElementById('paises');
str2.addEventListener('change',(x)=>{
    const selectPais=filterPais(athletes,x.target.value);
    printScreen(selectPais)
})

const str3=document.getElementById('medals');
str3.addEventListener('change',(x)=>{
    const selectMedals=filterMedals(athletes,x.target.value);
    printScreen(selectMedals)
})

const str4=document.getElementById('Ordenador');
str4.addEventListener('change',(x)=>{
    const selectName=sortData(athletes,x.target.value);
    printScreen(selectName)
})

const str5=document.getElementById('Gender');
str5.addEventListener('change',(x)=>{
    const selectG=filterG(athletes,x.target.value);
    printScreen(selectG)
})

//Efectos boton
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("inicio");
    for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
//}


  export const sum = (num1, num2) => num1 + num2;