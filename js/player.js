export class Player{
  constructor(name, str, int){
      this.name = name;
      this.str = str;
      this.int = int;
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

  statRoll(){
  let stat = Math.floor( Math.random() * 12) + 1;
  return stat;
  }


}
