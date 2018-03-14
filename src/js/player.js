export class Player{
  constructor(name, str, int, hp, lvl){
      this.name = name;
      this.str = str;
      this.int = int;
      this.hp = hp;
      this.lvl = lvl;
  }

  getName(){
    return this.name;
  }

  getStr(){
    return this.str;
  }

  getInt()
  {
    return this.int;
  }

  getHp()
  {
    return this.hp;
  }


  getLvl()
  {
    return this.lvl;
  }

  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }

  meleeRoll(opponent){

  let dmg = Math.floor( Math.random() * (this.str * .75)) + 1;
  opponent.hp -= dmg;
  return opponent.hp;
  }

  meleeCombat(opponent){
    while(this.hp > 0){
      this.meleeRoll(opponent)
        if(opponent.hp<= 0){
          this.lvl += opponent.getExp();
          return "player has won";

        } else if (opponent.hp > 0) {
          opponent.meleeRoll(this)
          if (this.hp <= 0){
          return "the player ahs died";
      }
    }
  }
  }
}
