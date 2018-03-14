import {Player} from './../src/js/player.js';
import {NPC} from './../src/js/npc.js';

describe('Player', function(){

  it('should create a random number', function(){
    let player = new Player('nico', 0, 0, 0);
    player.str = player.statRoll();
    player.int = player.statRoll();
    player.hp = player.str * 2;
    expect(player.str >0 && player.str <13);
    // console.log(player);
  });
});

  it('should do X damage to NPC', function(){
    let player = new Player('nico2', 10, 10, 20);
    let npc = new NPC ('uggo', 10, 10, 10);
    player.meleeRoll(npc);
    let result = npc.getHp();
    expect(result < 10);
    // console.log(player);
    // console.log(npc);
    console.log("npc hp: " + result);

});
