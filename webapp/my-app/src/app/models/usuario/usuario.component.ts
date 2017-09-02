
export class Usuario {

  constructor(public userName?: string, public password?: string) {}

  public ingresar(){
    return (('a' == this.userName) && ('a' == this.password))
  }
}
