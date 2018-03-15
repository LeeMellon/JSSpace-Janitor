export class Player{
  constructor(name, str, int){
      this.name = name;
      this.str = str;
      this.int = int;
      this.hp = this.str * 2;
      this.health = this.hp;
      this.lvl = 1;
      this.inv = [];
      this.wepEff = 0;
  }

  thawPlayer(name){
    let sacrifice = new Player("ouch", 0, 0, 0, 0);
    let str = sacrifice.statRoll();
    let int = sacrifice.statRoll();
    let newPlayer = new Player (name, str, int, );
    return newPlayer;

  }
  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }

  meleeRoll(opponent){

  let dmg = Math.floor( (Math.random() * (this.str * .75)+ this.wepEff)) + 1;
  opponent.hp -= dmg;
  return opponent.hp;
  }

  rangeRoll(opponent){
  let dmg =  this.wepEff;
  opponent.hp -= dmg;
  return opponent.hp;
  }

  meleeCombat(opponent){
    while(this.hp > 0){
      this.meleeRoll(opponent)

        if(opponent.hp<= 0){
          this.lvl += opponent.exp;
          this.levelUp();

          return "player has won";

        } else if (opponent.hp > 0) {

          opponent.meleeRoll(this)

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


//test this method
  equipWeapon(item){
    this.wepEff += item.effect;

  }

}
