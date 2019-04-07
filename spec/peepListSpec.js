describe("peepList", function() {

   var list = new PeepList()

   beforeEach(function(done){
     var fetchMethodSave = window.fetch;
        window.fetch = function(){
          var data = [
            {
              "id": 3,
              "body": "my first peep",
              "created_at": "2018-06-23T13:21:23.317Z",
              "updated_at": "2018-06-23T13:21:23.317Z",
              "user": {
                "id": 1,
                "handle": "kay"
              },
              "likes": [{
                "user": {
                  "id": 1,
                  "handle": "kay"
                }
              }]
            }
          ]
          var init = { "status" : 200, "statusText" : "OK" };
          var blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
          var response = new Response(blob, init)
          return Promise.resolve(response)
        }
        var peepDouble = function(body) {
          console.log(`1 Log the body = ${body}`);
          this.body = body
        }

        list.getPeeps(peepDouble, function() {
          done()
        })

   })

   it("gets the peeps from the API", function() {

     expect(list.list[0].body).toEqual("my first peep")


})});
