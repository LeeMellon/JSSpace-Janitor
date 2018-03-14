import {NPC} from './../src/js/npc.js';

describe('NPC', function(){

  it('should createan instance of NPC with rand stats', function(){
    let npc = new NPC('uggo', 0, 0, 0);
    npc.str = npc.statRoll();
    npc.int = npc.statRoll();
    npc.hp = npc.str * 3;
    expect(npc.str > 0 && npc.str < 13);
    // console.log(npc);
  });
});
