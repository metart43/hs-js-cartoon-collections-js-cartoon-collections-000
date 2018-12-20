var words = ['Apple', 'carrot', 'cinema']
function longPlaneteerCalls(words) {
    var x = words.map (array => array.length)
    console.log(x);
      if (x < [4]){
        return false;
      } else {
        return true;
    }
  }

longPlaneteerCalls(words);

function findTheCheese(foods) {
var isCheese = foods.find(function(element){
      if (element === 'gouda' || element === 'cheddar' || element === 'camembert'){
      return element;
    }
    //console.log(element);
});
console.log(isCheese);
}

snacks = ["crackers", "gouda", "thyme"]
findTheCheese(snacks)
