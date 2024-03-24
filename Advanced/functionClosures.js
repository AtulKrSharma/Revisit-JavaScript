//Closures is nested function scopes

function parentFunction(param1) {
  console.log(`param1: ${param1}`);

  function childFunction(param2) {
    console.log(`param2: ${param2}`);
    console.log(`Sum: ${param1 + param2}`);
  }
  //child function called
  childFunction(10);
  //console.log(param2);
}

//parent function called
parentFunction(20);
//Please note that child can accesss parent but not the other way round
