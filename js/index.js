var names = [ 'KC',
            'Emily',
            'Xiujie',
            'Celine',
            'Julia',
            'Verity',
            'Catalina',
            'Yasmin',
            'Eva',
            'Yuchen',
            'Kelt',
            'Jeanette',
            'Jay',
            'Diana',
            'Yujing'];

var section1 = document.getElementById('section-1');

function printName(name) {
  var appendHTML = document.createElement('p');
  appendHTML.id = name;
  appendHTML.innerText = name;
  section1.appendChild(appendHTML);
}

function getTwoNames(nameArray) {
  index1 = getRandom(0,nameArray.length);
  
  return [ names[index1] ];
  
}

/*
  function getTwoNames(nameArray) {
  index1 = getRandom(0,nameArray.length);
  index2 = getRandom(0,nameArray.length);
  
  return [ names[index1], names[index2] ];
  
}
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function applyHighlight() {
  twoNameArray = getTwoNames(names);
  firstName = document.getElementById(twoNameArray[0]);
  secondName = document.getElementById(twoNameArray[1]);
  
  firstName.classList.add('highlight1');
  secondName.classList.add('highlight2'); 
}

function main() {
  section1.innerHTML = ""; //clear elements in this section
  //getTwoNames(names).map(printName);
  names.map(printName);
  applyHighlight();
}




//******************** RUN CODE BELOW *********

//names.map(printName);
//console.log(getRandom(2,10));

//console.log(getTwoNames(names));
//console.log(getTwoNames(names));
//console.log(getTwoNames(names));
//console.log(getTwoNames(names));
//console.log(getTwoNames(names).map(printName)); 
//getTwoNames(names).map(printName);
//getTwoNames(names).map(printName);
