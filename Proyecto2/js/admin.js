
var foodTypes = [];
var foodData = [];
var allCharacters = [];


const fetchGenshinFood = async () => {
  try{
    let response = await fetch('https://api.genshin.dev/consumables/food');
    let food = Object.values(await response.json());

    foodTypes = food.map( food => food.type ).filter( (value, index, self) => self.indexOf(value) === index )

    foodTypes.forEach(element => {
      let dishes = food.filter( f => f.type == element )
      foodData.push(dishes.length)
    });

    // Graph
    var ctx = document.getElementById("foodChart");

    var foodChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: foodTypes,
        datasets: [
          {
            label: 'Different dishes',
            data: foodData,
            backgroundColor: ["red","green","orange","blue"],
          },
        ],
      },
      options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });

  } catch (err) {
    console.error(err)
  }     
}

const buildWeaponChart = (characters) => {
  
  let weaponTypes = characters.map( character => character.weapon ).filter( (value, index, self) => self.indexOf(value) === index )

  let weaponData = []

  weaponTypes.forEach(element => {
      let weapons = characters.filter( c => c.weapon == element )
      weaponData.push(weapons.length)
  });

  var chartElement = document.getElementById("weaponChart");

  var weaponChart = new Chart(chartElement, {
    type: "pie",
    data: {
      labels: weaponTypes,
      datasets: [{
        label: '# Characters by weapon',
        data: weaponData,
        backgroundColor: [
          'red',
          'green',
          'blue',
          'cyan',
          'pink',
        ],
        hoverOffset: 4,
      }]
    },
  });

}


const fetchCharacters = async () => {
  let characterResponse = await fetch("https://api.genshin.dev/characters/")
  let characters = Object.values(await characterResponse.json())

  const promises = [];

  
  characters.forEach(character => {
    const promise = fetch(`https://api.genshin.dev/characters/${character}`)
                      .then(response => response.json())
                      .then(data => allCharacters.push(data))
    promises.push(promise)
  });

  Promise.all(promises).then( res => {
    console.log(res);
    console.log(allCharacters)
    buildWeaponChart(allCharacters)
  })

}

window.addEventListener('DOMContentLoaded', (event) => {
  fetchGenshinFood();
  fetchCharacters();
});