export class NPC{
  constructor(name, str, int, hp){
    this.name = name;
    this.str = str;
    this.int = int;
    this.hp = hp;
    this.exp = (this.str + this.int) / 100;
  }


  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }

  meleeRoll(opponent){
  let dmg = Math.floor( Math.random() * (this.str * .9)) + 1;
  opponent.hp -= dmg;
  return opponent.hp;

  }



}
