export class Player{
  constructor(name, str, int, hp, lvl){
      this.name = name;
      this.str = str;
      this.int = int;
      this.hp = hp;
      this.health = hp;
      this.lvl = lvl;
      this.inv = [];
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

  getHealth()
  {
    return this.health;
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
    console.log("player hp: " + this.getHp())
    while(this.hp > 0){
      this.meleeRoll(opponent)
      console.log("opponet hp: " + opponent.getHp())

        if(opponent.hp<= 0){
          this.lvl += opponent.getExp();
          this.levelUp();
          console.log("player hp: " + this.getHp())

          return "player has won";

        } else if (opponent.hp > 0) {
          console.log("opponet hp: " + opponent.getHp())

          opponent.meleeRoll(this)
          console.log("player hp: " + this.getHp())

          if (this.hp <= 0){
          return "the player has died";
      }
    }
  }
  }

  levelUp(){
    this.str = (this.str + this.lvl) - (this.str * .1);
    this.int = (this.int + this.lvl) - (this.int * .1);
    this.health = (this.health + this.lvl) + 1 ;
  }

}
