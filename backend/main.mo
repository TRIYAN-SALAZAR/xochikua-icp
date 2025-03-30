import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Text "mo:base/Text";
import Random "mo:base/Random";
import Array "mo:base/Array";
import Char "mo:base/Char";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";
import Int "mo:base/Int";

actor {
  class Cuenta(Nombre : Text, ContrasenaHash : Text) {
    var hashContrasena = ContrasenaHash;
    public var nombre = Nombre;
    var Balance : Int = 0;
    var tokens = Buffer.Buffer<Text>(10);

    public func TokenValido(Token : Text) : async Bool {
      return Buffer.contains<Text>(tokens, Token, Text.equal);
    };
    
    public func Depositar(Token : Text, Valor : Int) : async Text {
       if (await TokenValido(Token)) {
          Balance := Balance + Valor;
          return "Deposito Exitoso"; 
       } else {
          return "Token Invalido";
       }
     };

    public func Cobrar(Token : Text, Valor : Int) : async Text {
       let esValido = await TokenValido(Token);
       if (esValido and Balance > Valor) {
          Balance := Balance - Valor; 
          return "Cobro Exitoso"; 
       } else {
          return "Ocurrio un Error";
       }
     };

    public func LeerBalance(Token : Text) : async Int { 
       if (await TokenValido(Token)) {
          return Balance;
       } else {
          return -322293;
       }
     };

    public func cerrarSesion(Token : Text) : async Text {
        if (await TokenValido(Token)) {
            let nuevosTokens = Buffer.Buffer<Text>(tokens.size());
            for (t in tokens.vals()) {
                if (t != Token) {
                    nuevosTokens.add(t);
                }
            };
            tokens := nuevosTokens;
            return "Sesión cerrada";
        } else {
            return "Token inválido";
        }
    };
  };

  var cuentas = Buffer.Buffer<Cuenta>(10);

  public func EncontrarPorToken(Token : Text) : async Nat {
    let cuentasArray = Buffer.toArray(cuentas);
    for (i in Iter.range(0, Array.size(cuentasArray) - 1)) {
        if (await cuentasArray[i].TokenValido(Token)) {
            return Nat.fromInt(i);  // Convert Int to Nat
        };
    };
    return Nat.fromInt(-1);  // Error value, ensure it returns a Nat
  };

  public func Deposita(Token : Text, Indice : Nat, Total : Int) : async Text {
    let cuentasArray = Buffer.toArray(cuentas);
    return await cuentasArray[Nat.toInt(Indice)].Depositar(Token, Total);
  };

  public func Cobra(Token : Text, Indice : Nat, Total : Int) : async Text {
    let cuentasArray = Buffer.toArray(cuentas);
    return await cuentasArray[Nat.toInt(Indice)].Cobrar(Token, Total);
  };

  public func ComprobarToken(Token : Text) : async Bool {
    let cuentasArray = Buffer.toArray(cuentas);
    for (i in Iter.range(0, Array.size(cuentasArray) - 1)) {
        if (await cuentasArray[i].TokenValido(Token)) {
            return true;
        };
    };
    return false;
  };

  public func Transferencia(TokenDestinatario : Text, TokenRemitente : Text, Monto : Int) : async Text {
    let destinatarioIndex = await EncontrarPorToken(TokenDestinatario);
    let remitenteIndex = await EncontrarPorToken(TokenRemitente);
    let DestinatarioValido = await ComprobarToken(TokenDestinatario);
    let RemitenteValido = await ComprobarToken(TokenRemitente)
    
    if (DestinatarioValido and RemitenteValido) {
        let resultadoCobro = await Cobra(TokenRemitente, remitenteIndex, Monto);
        if (resultadoCobro == "Ocurrio un Error") {
          return "Fondos insuficientes";
        };
        let _ = await Deposita(TokenDestinatario, destinatarioIndex, Monto);
        return "Transferencia Exitosa";
      } else {
        return "Uno o ambos tokens son Invalidos";
      };
  };

  public func ConseguirBalance(Token : Text, Indice : Nat) : async Int {
    let cuentasArray = Buffer.toArray(cuentas);
    return await cuentasArray[Nat.toInt(Indice)].LeerBalance(Token);
  };
}
