'use strict';
let username = prompt('what is your name');
alert('helle ' + username + ' lit us play a game');

let contry = prompt('do you think i am from jordan?(yes(y) or no(n))');
contry = contry.toLowerCase();
if (contry === 'yes' || contry === 'y') {
  alert('you are true, i am from jordan');
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
} else {
  alert('no,i am a civil engineer');
  // console.log('no,i am a civil engineer');
}
let work = prompt('do you think i worked as a civil engineer?(yes(y) or no(n))');
work = work.toLowerCase();
if (work === 'yes' || work === 'y') {
  alert('you are true, i worked as civil engineer');
  // console.log('you are true, i worked as civil engineer');
} else {
  alert('no,i worked as civil engineer');
  // console.log('no,i worked as civil engineer');
}
let years = prompt('do you think i worked 4 years as a civil engineer?(yes(y) or no(n))');
years = years.toLowerCase();
if (years === 'yes' || years === 'y') {
  alert('you are true, i worked as civil engineer 4 years');
  // console.log('you are true, i worked as civil engineer 4 years');
} else {
  alert('no,i worked as civil engineer 4 years');
// console.log('no,i worked as civil engineer 4 years');
}

alert('thank you ' + username + ' I\'m glad you\'re here');
