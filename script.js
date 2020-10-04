var wrapperEle = document.body.querySelector(".wrapper");
var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];
for (var i = 0; i < warriors.length; i++) {
  if (warriors[i].warrior) {
    var warriorEle = document.createElement("div");
    // warriorEle.innerHTML=warriors[i].name;
    wrapperEle.appendChild(warriorEle);
    if (warriors[i].damage >= 2) {
      var damageEle = document.createElement("div");
      // damageEle.innerHTML=warriors[i].name;
      wrapperEle.appendChild(damageEle);
      if (warriors[i].health >= 10) {
        var healthEle = document.createElement("div");
        healthEle.innerHTML = warriors[i].name;
        wrapperEle.appendChild(healthEle);
        if (warriors[i].name.includes("a")) {
          var colorEle = document.createElement("div");
          wrapperEle.appendChild(colorEle).style.color = "red";
          colorEle.innerHTML = warriors[i].name;
        }
      }
    }
  }
}
// for (var j=0;j<warriors.length;j++){
// if(warriors[j].name.includes("a")) {
//           var colorEle = document.createElement("div");
//           wrapperEle.appendChild(colorEle).style.color = "red";
//           colorEle.innerHTML = warriors[j].name;
//         }
// }