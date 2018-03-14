import {Player} from './../js/player.js';

describe('Player', function(){

  it('should create a random number', function(){
    let player = new Player('nico', 0, 0);
    player.str = player.statRoll();
    player.int = player.statRoll();
    expect(player.str >0 && player.str <13);
    console.log(player);
  });
});
