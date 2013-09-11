
$(document).ready(function() {
  var die = new Die(24)
  
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

  Die.prototype.add = function(element) {
   $(element).append('<div class= "die">0</div>');
  }



  Die.prototype.roll = function() {
    var sides = this.sides
    $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*sides)+1);
    $(die).text(value);
    });
  }

  // $('#roller button.roll').on('click', function() {
  //   $('.die').each(function(k, die) {
  //     var value = Math.floor((Math.random()*6)+1);
  //     $(die).text(value);
  //   });
  // });