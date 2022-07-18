var foodTypes = [];
var foodData = [];
var allCharacters = [];
var currentFilters = {
  nation: "none",
  weapon: "none",
  vision: "none",
  rarity: "none"
};

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
            // label: 'Different dishes',
            data: foodData,
            backgroundColor: ["red","green","orange","blue"],
          },
        ],
      },
      options: {
        legend:{
          display: false,
        },
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
    buildWeaponChart(allCharacters);
    fetchTypes(allCharacters);
    fillCharacterTable(allCharacters);
    setupFilters(allCharacters);
  })
}

const fillCharacterTable = (charactersArray) => {
  var table = document.querySelector('#characterTable tbody')

  charactersArray.forEach( (c,index) => {
    table.innerHTML += 
    `
    <th scope="row">${index + 1}</th>
    <td>${c.name}</td>
    <td>${c.nation}</td>
    <td>${c.weapon}</td>
    <td>${c.vision}</td>
    <td>${c.rarity}</td>
    <td>${c.description == "" ? "No Description" : c.description}</td>
    `
  })
}

const setupFilters = (charactersArray) => {
  var weapons = []
  var nations = []
  var raritys = []
  var visions = []
  
  charactersArray.forEach( c => {
    weapons.indexOf(c.weapon) === -1 ? weapons.push(c.weapon) : true
    nations.indexOf(c.nation) === -1 ? nations.push(c.nation) : true
    raritys.indexOf(c.rarity) === -1 ? raritys.push(c.rarity) : true
    visions.indexOf(c.vision) === -1 ? visions.push(c.vision) : true
  })
  
  // Select Elements

  var selectNation = document.getElementById('nationSelect')
  var selectWeapon = document.getElementById('weaponSelect')
  var selectVision = document.getElementById('visionSelect')
  var selectRarity = document.getElementById('raritySelect')

  // Options 

  nations.forEach( o => {
    let option = document.createElement('option')
    option.textContent = o
    option.setAttribute('value',o)
    selectNation.appendChild(option)
  })

  weapons.forEach( o => {
    let option = document.createElement('option')
    option.textContent = o
    option.setAttribute('value',o)
    selectWeapon.appendChild(option)
  })
  
  visions.forEach( o => {
    let option = document.createElement('option')
    option.textContent = o
    option.setAttribute('value',o)
    selectVision.appendChild(option)
  })
  
  raritys.forEach( o => {
    let option = document.createElement('option')
    option.textContent = o
    option.setAttribute('value',o)
    selectRarity.appendChild(option)
  })

  // Event Listeners

  selectNation.addEventListener('change', (event) => {
    const value = event.target.value;
    addFilter(value, 1)
  })

  selectWeapon.addEventListener('change', (event) => {
    const value = event.target.value;
    addFilter(value, 2)
  })

  selectVision.addEventListener('change', (event) => {
    const value = event.target.value;
    addFilter(value, 3)
  })

  selectRarity.addEventListener('change', (event) => {
    const value = event.target.value;
    addFilter(value,4)
  })
}

const addFilter = (filterValue, column) => {
  if( column == 1 ){
    currentFilters.nation = filterValue !== '-1' ? filterValue : "none" 
  } else if (column == 2) {
    currentFilters.weapon = filterValue !== '-1' ? filterValue : "none" 
  } else if (column == 3) {
    currentFilters.vision = filterValue !== '-1' ? filterValue : "none" 
  } else {
    currentFilters.rarity = filterValue !== '-1' ? filterValue : "none" 
  }
  filterTable()
}

const filterTable = () => {
  var table, tr, i, currRow;
  table = document.getElementById("characterTable");
  tr = table.getElementsByTagName("tr");

  const filterBy = Object.values(currentFilters).filter( filter => filter != "none")
  const checker = (arr, target) => target.every(v => arr.includes(v));

  for (i = 0; i < tr.length; i++) {
    currRow = [tr[i].getElementsByTagName("td")[1], tr[i].getElementsByTagName("td")[2], tr[i].getElementsByTagName("td")[3], tr[i].getElementsByTagName("td")[4]];
    if (currRow[0]) {
      currRowValues = [(currRow[0].textContent || currRow[0].innerText), (currRow[1].textContent || currRow[1].innerText), (currRow[2].textContent || currRow[2].innerText), (currRow[3].textContent || currRow[3].innerText)]
      if (checker(currRowValues, filterBy)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

const fetchTypes = (charactersArray) => {
  charactersArray.forEach( (c) => {
    document.getElementById(c.vision).textContent = Number(document.getElementById(c.vision).textContent) + 1
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  fetchGenshinFood();
  fetchCharacters();
});