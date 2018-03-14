import {Player} from './../src/js/player.js';
import {NPC} from './../src/js/npc.js';

describe('Player', function(){

  it('should create a random number', function(){
    let player = new Player('nico', 0, 0, 0);
    player.str = player.statRoll();
    player.int = player.statRoll();
    player.hp = player.str * 2;
    expect(player.str).toBeLessThan(13);
    console.log(player.str);

  });
});

  it('should do X damage to NPC', function(){
    let player = new Player('nico2', 10, 10, 20);
    let npc = new NPC ('uggo', 10, 10, 10);
    player.meleeRoll(npc);
    let result = npc.getHp();
    expect(result).toBeLessThan(10);


});
