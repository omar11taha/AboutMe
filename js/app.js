<<<<<<< HEAD
// 'use strict';
// let username = prompt('what is your name');
// alert('helle ' + username + ' lit us play a game');
// let score=0
// let contry = prompt('do you think i am from jordan?(yes(y) or no(n))');
// contry = contry.toLowerCase();
// if (contry === 'yes' || contry === 'y') {
//   alert('you are true, i am from jordan');
//   score++
//   // console.log('you are true, i am from jordan');
// } else {
//   alert('no,i am form jordan');
//   // console.log('no,i am form jordan');
// }
// let study = prompt('do you think i am a civil engineer?(yes(y) or no(n))');
// study = study.toLowerCase();
// if (study === 'yes' || study === 'y') {
//   alert('you are true, i am a civil engineer');
//   // console.log('you are true, i am a civil engineer');
//   score++
// } else {
//   alert('no,i am a civil engineer');
//   // console.log('no,i am a civil engineer');
// }
// let work = prompt('do you think i worked as a civil engineer?(yes(y) or no(n))');
// work = work.toLowerCase();
// if (work === 'yes' || work === 'y') {
//   alert('you are true, i worked as civil engineer');
//   // console.log('you are true, i worked as civil engineer');
//   score++
// } else {
//   alert('no,i worked as civil engineer');
//   // console.log('no,i worked as civil engineer');
// }
// let years = prompt('do you think i worked 4 years as a civil engineer?(yes(y) or no(n))');
// years = years.toLowerCase();
// if (years === 'yes' || years === 'y') {
//   alert('you are true, i worked as civil engineer 4 years');
//   // console.log('you are true, i worked as civil engineer 4 years');
//   score++
// } else {
//   alert('no,i worked as civil engineer 4 years');
// console.log('no,i worked as civil engineer 4 years');
// }

// alert('thank you ' + username + ' I\'m glad you\'re here');



// for(let number=6;number<10;number++){
//   let i=prompt('gis number from 1 to 10');
  
// if(i==='7'){
//   alert('the number =7 you are good');
// break;}
// else if (i>7){
//   alert('the number is too high');
//   continue;}
// else if(i<7){
// alert('the number is too low');
// continue;}

// }

const courses=['Autocad','prokon','etaps','civil3d','safe'];
for(let o=0;o<6;o++){
  // alert(courses[o]);
  let userInpot=prompt('what is my favoret course in civil engineering?')
for (let m = 0; m < courses.length; m++) {
 
  if(courses[m]===userInpot){
    alert('you are good')
  break;}
  else{
    continue;
  }
}
=======
'use strict';
let username = prompt('what is your name');
alert('helle ' + username + ' lit us play a game');
let score=0
let contry = prompt('do you think i am from jordan?(yes(y) or no(n))');
contry = contry.toLowerCase();
if (contry === 'yes' || contry === 'y') {
  alert('you are true, i am from jordan');
  score++
  // console.log('you are true, i am from jordan');
} else {
  alert('no,i am form jordan');
  // console.log('no,i am form jordan');
}
let study = prompt('do you think i am a civil engineer?(yes(y) or no(n))');
study = study.toLowerCase();
if (study === 'yes' || study === 'y') {
  alert('you are true, i am a civil engineer');
  // console.log('you are true, i am a civil engineer');
  score++
} else {
  alert('no,i am a civil engineer');
  // console.log('no,i am a civil engineer');
}
let work = prompt('do you think i worked as a civil engineer?(yes(y) or no(n))');
work = work.toLowerCase();
if (work === 'yes' || work === 'y') {
  alert('you are true, i worked as civil engineer');
  // console.log('you are true, i worked as civil engineer');
  score++
} else {
  alert('no,i worked as civil engineer');
  // console.log('no,i worked as civil engineer');
}
let years = prompt('do you think i worked 4 years as a civil engineer?(yes(y) or no(n))');
years = years.toLowerCase();
if (years === 'yes' || years === 'y') {
  alert('you are true, i worked as civil engineer 4 years');
  // console.log('you are true, i worked as civil engineer 4 years');
  score++
} else {
  alert('no,i worked as civil engineer 4 years');
// console.log('no,i worked as civil engineer 4 years');
>>>>>>> 0ce8d29eb534c690e8d8305391aa17c71936a792
}
alert("Autocad,prokon,etaps,civil3d,safe");

<<<<<<< HEAD
=======
// alert('thank you ' + username + ' I\'m glad you\'re here');
// let y=prompt('gis number from 1 to 10');
// for(let number=6;number<10;number++){
  
//   let i = 0;
// if(i===7){
//   alert('the number =7 you are good');
// break;}
// else if (i>7){
//   prompt('the number is too high');
//   continue;}
// else if(i<7){
// prompt('the number is too low');
// continue;}

// }
// let d=prompt('what is my favoret course in civil engineering(Autocad,prokon,etaps,civil3d,safe)?')
// const courses=['Autocad','prokon','etaps','civil3d','safe'];
// for(let o=0;o<courses.length;o++){
//   // alert(courses[o]);
// for (let m = 0; m < 5; m++) {
 
//   if(courses[m]===safe){
//   break;}
//   else{
//     continue;
//   }
// }
// }
alert("Autocad,prokon,etaps,civil3d,safe");

>>>>>>> 0ce8d29eb534c690e8d8305391aa17c71936a792
alert('your score is '+score)