var data = {
  "posts": [
    {
      "name": "SEO Review and Reccomendations",
      "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
      "category": "Search Engine",
      "skills": [
        {
          "id": 1,
          "name": "net-framework"
        },
        {
          "id": 2,
          "name": "рhp"
        }
      ],
      "client": {
        "country": "United states",
        "rating": 4.8
      }
    },
    {
      "name": "SEO Review and Reccomendations",
      "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
      "category": "Search Engine",
      "skills": [
        {
          "id": 1,
          "name": "net-framework"
        },
        {
          "id": 2,
          "name": "рhp"
        }
      ],
      "client": {
        "country": "United states",
        "rating": 4.8
      }
    }
  ]
}


function createStat(param) {
  var stat = document.querySelector("#templateMain")
  var main = document.querySelector(".main")
  var newStat = stat.content.cloneNode(true);
  newStat.querySelector('.template__link').textContent = param.name;
  newStat.querySelector('.template__description').textContent = param.description;
  newStat.querySelector('.category').textContent = param.category;
  newStat.querySelector('.fixed').textContent = param.options.fixed;
  newStat.querySelector('.budget').textContent = param.options.budget;
  newStat.querySelector('.delivery').textContent = param.options.delivery;
  newStat.querySelector('.posted').textContent = param.options.posted;
  newStat.querySelector('.ends').textContent = param.options.ends;
  newStat.querySelector('.client__name').textContent = param.client.country;
  newStat.querySelector('.stars').textContent = param.client.rating;
  var skills = newStat.querySelector('.skill__list')
  param.skills.forEach(function (skill) {
     var span = document.createElement('span')
    span.innerHTML = skill.name
    span.classList.add('skill__name')
    skills.appendChild(span)
  })
  
  main.appendChild(newStat)
}
function some() {
  for (var key in data) {
    data[key].forEach(function(e){
      createStat(e)
   })
  }
}
some()
// function createStat(param) {
//   var stat = document.querySelector("#templateMain")
//   var main = document.querySelector(".main")
//   var newStat = stat.cloneNode(true);
//   newStat.querySelector('.template__link').textContent = param.name;
//   newStat.querySelector('.template__description').textContent = param.description;
//   newStat.querySelector('.category').textContent = param.category;
//   newStat.querySelector('.fixed').textContent = param.options.fixed;
//   newStat.querySelector('.budget').textContent = param.options.budget;
//   newStat.querySelector('.delivery').textContent = param.options.delivery;
//   newStat.querySelector('.posted').textContent = param.options.posted;
//   newStat.querySelector('.ends').textContent = param.options.ends;
//   newStat.querySelector('.client__name').textContent = param.client.country;
//   newStat.querySelector('.stars').textContent = param.client.rating;
//   var skills = newStat.querySelector('.skill__list')
//   param.skills.forEach(function (skill) {
//      var span = document.createElement('span')
//     span.innerHTML = skill.name
//     span.classList.add('skill__name')
//     skills.appendChild(span)
//   })
//   main.appendChild(newStat)
// }

// function checkObject(obj) {
//   for (var k in obj) {
//     var prop = obj[k];
   
//       prop.forEach(e => {
//         createStat(e)
//       });

//   }
// }
// checkObject(data);
// var ff= document.querySelector('.main')
