/* ORDER BY DISCIPLINES */
export const filterSport =(athletes, str) => {
  const resultBySport=athletes.filter(x=>x.sport===str)
    return resultBySport;
 }
 /* ORDER BY COUNTRIES */
  export const filterPais =(athletes, str2) => {
  const resultByTeam=athletes.filter(x=>x.team===str2)
    return resultByTeam;
 }

/* ORDER BY MEDALS */
export const filterMedals =(athletes, str3) => {
  const resultByMedals=athletes.filter(x=>x.medal===str3)
    return resultByMedals;
 }

/* FILTER FOR GENDER */
 export const filterG =(athletes, str5) => {
  const resultByGender=athletes.filter(x=>x.gender===str5)
    return resultByGender;
 }

 /* ORDER ALPHABETICALLY */
 export const sortData = (data, sortOrder) => {
   const ordenado=
     data.sort ((a,b)=> {
       if (a.name > b.name){
         return 1;
       }
      else if (a.name<b.name){
        return -1;
      }
      return 0;
    
    });
  if(sortOrder==="A-Z"){
    return ordenado;
  }
  else if(sortOrder==="Z-A"){
    return ordenado.reverse();
  }
};

/* COMPUTE STATES */
export const computeStats =(arrayFemale,arrayMale,arrayTotal)=>{
const countFemale=arrayFemale.length;
const countMale=arrayMale.length;
const countTotal=arrayTotal.length;
const percentFemale=Math.round((countFemale/countTotal)*100);
const percentMale=Math.round((countMale/countTotal)*100);
let array =[percentFemale, percentMale];
return array;
}





