Vue.config.devtools = true;
var newVM = new Vue ({
  el: "#app",
  data: {
    beer: 0,
    gas: 0,
    tapes: 0,
    jerky: 0,
    weight: 200,
    cash: 200,
    disableButton: true,
  },
  methods: {
    increaseCargo: function(item, weight, cash) {
      newVM[item] ++;
      newVM.weight -= weight;
      newVM.cash -= cash;
      console.log(newVM[item]);
      if (newVM.cash < 0) {
        if (newVM.weight < 0){
          newVM.decreaseCargo(item,weight,cash);
          alert("Not enough cash and too much weight");
        }
        else {
        newVM.decreaseCargo(item,weight,cash);
        alert("Not enough Cash");
        }
      }
      else if (newVM.weight < 0){
        newVM.decreaseCargo(item,weight,cash);
        alert("Too much weight");
      }
      else {
        var dataToSend =
          {
            beer: {
              inventory: newVM.beer,
              cash: 25,
              weight: 30,
            },
            gas: {
              inventory: newVM.gas,
              cash: 120,
              weight: 40,
            },
            tapes: {
              inventory: newVM.tapes,
              cash: 10,
              weight: 0,
            },
            jerky: {
              inventory: newVM.jerky,
              cash: 80,
              weight: 10,
            },
            weight: newVM.weight,
            cash: newVM.cash,
          };
        $.post('/validate', dataToSend, function(returnData){
          if (returnData === "nope") {
            newVM.decreaseCargo(item, dataToSend[item].weight, dataToSend[item].cash);
            alert("Cant do that");
          }
        });
      }

    },
    decreaseCargo: function(item, weight, cash) {
      newVM[item] --;
      newVM.weight += weight;
      newVM.cash += cash;
      console.log(newVM[item]);
      if (newVM[item] < 0) {
        newVM.increaseCargo(item,weight,cash);
        alert("You don't have that many");

      }
    },
    checkWeightAndCash: function(weight, cash) {
      if ((this.cash - cash) < 0 || (this.weight - cash) < 0){
        disableButton = true;
      }
      else {
        disableButton = false;
      }
    },
    checkQuantity: function(item) {
      if(this[item] === 0) {
        disableButton = true;
      }
      else {
        disableButton = false;
      }
    }
  }
});
