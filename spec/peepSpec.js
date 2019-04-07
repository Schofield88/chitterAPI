describe("peep", function() {


  it("has the peep message", function() {
    var peep = new Peep("Body")
    expect(peep.body).toEqual("Body")
  });


})
