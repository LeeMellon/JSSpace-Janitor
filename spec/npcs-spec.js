import {NPC} from './../src/js/npc.js';
import {Player} from './../src/js/player.js';

describe('NPC', function(){

  it('should createan instance of NPC with rand stats', function(){
    let npc = new NPC('uggo', 0, 0, 0);
    npc.str = npc.statRoll();
    npc.int = npc.statRoll();
    npc.hp = npc.str * 3;
    expect(npc.str).toBeLessThan(13);
    console.log(npc.str);
  });

  it('should do X damage to Player', function(){
    let player = new Player('nico2', 10, 10, 10);
    let npc = new NPC ('uggo', 20, 10, 10);
    npc.meleeRoll(player);
    let result = player.getHp();
    console.log(result);
    expect(result).toBeLessThan(10);
});

});
