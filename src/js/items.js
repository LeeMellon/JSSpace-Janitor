export class Regen{
  constructor(){
    this.name  = "Regeneration Gel";
    this.uses = Math.floor( Math.random() * 3) + 1;
    this.potentcy = Math.floor( Math.random() * 20) + 1;
    this.effect = "hp";
  }

  getName()
  {
    return this.name;
  }

  getUses()
  {
    return this.uses;
  }

  getPotentcy()
  {
    return this.potentcy;
  }

  consumeItem(player)
  {
     player.hp += this.potentcy;
    //  return player.hp;
     this.uses -= 1;
  }

export class Weapon{
  constructor(){
    this.name = name;
    this.effect = effect;
    this.charge = charge;
  }
  //create some waepons
}



}
