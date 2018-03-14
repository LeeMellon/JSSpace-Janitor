import {Player} from './../src/js/player.js';
import {NPC} from './../src/js/npc.js';

describe('Player', function(){

  it('should create a random number', function(){
    let player = new Player('nico', 0, 0, 0, 0);
    player.str = player.statRoll();
    player.int = player.statRoll();
    player.hp = player.str * 2;
    expect(player.str).toBeLessThan(13);

  });

  it('should do X damage to NPC', function(){
    let player = new Player('nico2', 10, 10, 20, 0);
    let npc = new NPC ('uggo', 10, 10, 10, 1);
    player.meleeRoll(npc);
    let result = npc.getHp();
    expect(result).toBeLessThan(10);
});

it('should kill one of us', function(){
  let player = new Player('nico2', 10, 10, 20, 0);
  let npc = new NPC ('uggo', 10, 10, 2, 1);
  let outcome = player.meleeCombat(npc);
  expect(outcome).toEqual("player has won");
});

it('should increase player level after npc defeat', function(){
  let player = new Player('nico2', 10, 10, 20, 1);
  let npc = new NPC ('uggo', 100, 100, 2);
  player.meleeCombat(npc);
  let exp = player.getLvl();
  console.log("npc exp: " + npc.getExp());
  console.log("player lvl: " + exp);
  expect(exp).toBeGreaterThan(1);
});

it('should increase player stats after npc defeat', function(){
  let player = new Player('nico2', 10, 10, 20, 1);
  let npc = new NPC ('uggo', 10, 10, 2);
  player.meleeCombat(npc);
  let str = player.getStr();
  console.log("npc exp: " + npc.getExp());
  console.log("player str: " + str);
  console.log("player hp after win: " + player.getHp());
  expect(str).toBeGreaterThan(10);
});

it('should increase player health after npc defeat', function(){
  let player = new Player('nico2', 10, 10, 20, 1);
  let npc = new NPC ('uggo', 10, 10, 2);
  player.meleeCombat(npc);
  let health = player.getHealth();
  console.log("npc exp: " + npc.getExp());
  console.log("player health after win: " +player.getHp() + "/"+ player.getHealth());
  expect(health).toBeGreaterThan(20);

});

});
