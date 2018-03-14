export class Player{
  constructor(name, str, int, hp){
      this.name = name;
      this.str = str;
      this.int = int;
      this.hp = hp;
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

  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }

  meleeRoll(opponent){
  console.log(opponent);
  console.log(opponent.hp);
  let dmg = Math.floor( Math.random() * (this.str * .75)) + 1;
  opponent.hp -= dmg;
  console.log("damage: " + dmg);
  console.log(opponent.hp);

  return opponent.hp;
  }

}
