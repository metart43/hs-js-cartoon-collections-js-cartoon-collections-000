function dwarfRollCall(dwarves) {
  return dwarves.map((item, index) => {//.map creates a new array
    return `${index+1}. ${item} ` //accesing elements of dwarf array
  }).join('')//.join creates a new string with elements from an array
}
function summonCaptainPlanet(planeteerCalls){
  function toUpperCase (planeteerCalls){
    return planeteerCalls.toUpperCase() + "!";
  }
  return planeteerCalls.map(toUpperCase);
}
function longPlaneteerCalls(words) {
    var x = words.map (array => array.length)
    console.log(x);
      if (x < [5]){
        return false;
      } else {
        return true;
    }
  }

<<<<<<< HEAD
  function findTheCheese(foods) {
  var isCheese = foods.find(function(element){
        if (element === 'gouda' || element === 'cheddar' || element === 'camembert'){
        return element;
  }
});
if (isCheese !== undefined){
  return isCheese
} else {
  return "no cheese!"
}
=======
function findTheCheese(foods) {
>>>>>>> a92372f585f92b864e8f0a315ea03085cdc325d6
}
