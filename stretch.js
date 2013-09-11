var DieHolder = []

$(document).ready(function() {
  var die = new Die(24)

      var newThing = $('<div class= "die">0</div>');
      newThing.on('click', function(){
        die.changeFace();
      })

     $('#roller button.add').on('click', function() {

        die.add('.dice');

      });
 
     $('#roller button.roll').on('click', function(){
      die.roll();
      // rollDice();
  });


});


  var Die = function(sides) {
    this.sides = sides;
  }

  Die.prototype.changeFace = function(){
    var value = Math.floor((Math.random()*this.sides)+1);
    $(this).text(value);
  }

  Die.prototype.add = function(element) {
    // push newthing into dieholder and return element object
    // so that $(this) can be the element
   $(element).append('<div class= "die">0</div>');
  }



  Die.prototype.roll = function() {
    $('.die').each(function(k, die) {
      die.changeFace()
    });
  }

  // $('#roller button.roll').on('click', function() {
  //   $('.die').each(function(k, die) {
  //     var value = Math.floor((Math.random()*6)+1);
  //     $(die).text(value);
  //   });
  // });