export class Regen{
  constructor(){
    this.name  = "Regeneration Gel";
    this.uses = Math.floor( Math.random() * 3) + 1;
    this.potentcy = Math.floor( Math.random() * 20) + 1;
    this.effect = "hp";
  }

  consumeItem(player)
  {
     player.hp += this.potentcy;
    //  return player.hp;
     this.uses -= 1;
  }


}
