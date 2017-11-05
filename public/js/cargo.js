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
        disableButton = false;
      }
      else {
        disableButton = true;
      }
    },
    checkQuantity: function(item) {
      if(this[item] === 0) {
        disableButton = false
      }
      else {
        disableButton = true;
      }
    }
  }
});
