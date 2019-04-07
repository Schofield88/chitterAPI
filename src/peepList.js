function PeepList() {
  this.list = []
   console.log(`2 List log = ${this.list}`);
  //this.getPeeps(peepCode)
}

PeepList.prototype.getPeeps = function (peepCode, callback) {
  var self = this
  fetch("https://chitter-backend-api.herokuapp.com/peeps")
  .then(function(response) {
    console.log(`3 - ${response}`);
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(element) {
      console.log(`4 Element.body = ${element.body}`);
      peep = new peepCode(element.body)
      console.log(`5 Push peep = ${peep}`);
      self.list.push(peep)
      console.log(`6 Self.list = ${self.list[0].body}`);
    })
  })
  .then(function() {
    callback()
  });
};
