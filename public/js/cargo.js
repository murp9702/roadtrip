var newVM = new Vue ({
  el: "#app",
  data: {
    beer: 0,
    gas: 0,
    tapes: 0,
    jerky: 0,
    weight: 200,
    cash: 200,
  },
  methods: {

  }

})

function increaseCargo(item, weight, cash) {
  newVM[item] ++;
  newVM.weight -= weight;
  newVM.cash -= cash
  console.log(newVM["item"])
  console.log(newVM.beer)
}

function decreaseCargo(item, weight, cash) {
  newVM[item] --;
  newVM.weight += weight;
  newVM.cash += cash;

  console.log(newVM.beer)
}
