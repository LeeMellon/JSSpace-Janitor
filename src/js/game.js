import {Player} from './player.js';
import {NPC} from './npc.js';

export class Game{
  constructor(name){
    this.name = name;
    this.player = [];
  }

  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }

  thaw(name){
    let str = Math.floor( Math.random() * 12) + 1;
    let int = Math.floor( Math.random() * 12) + 1;
    let newPlayer = new Player (name, str, int);
    this.player.push(newPlayer);
  }

  weakNpc(){
    let str = Math.floor( Math.random() * 12) + 1;
    let int = Math.floor( Math.random() * 12) + 1;
    let hp = Math.floor( Math.random() * 10) + 1;
    let newNPC = new NPC ("Booger", str, int, hp);
    this.player;
  }

  play()
  {
   let player = this.player;
   let weakNpc = weakNpc();
   player.meleeCombat(weakNpc);

   }

  }

  // terminal(){
  //
  // }
