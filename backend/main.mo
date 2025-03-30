import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Text "mo:base/Text";
import Random "mo:base/Random";
import Array "mo:base/Array";
import Char "mo:base/Char";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";

actor {
  class Cuenta(Nombre : Text, ContrasenaHash : Text) {
    var hashContrasena = ContrasenaHash;
    public var nombre = Nombre;
    var Balance : Nat = 0;
    var tokens = Buffer.Buffer<Text>(10);  // Use Buffer instead of Array

    // Función para generar un token aleatorio
private func generarTokenAleatorio() : async Text {
  let randomBytes = await Random.blob();
  var random = Random.Finite(randomBytes);
  var token = "";
  
  // Convertir a un array para acceso por índice
  let caracteres = Text.toArray("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let longitudCaracteres = caracteres.size();
  
  // Generar un token de 32 caracteres
  for (i in Iter.range(0, 31)) {
    switch (random.byte()) {
      case (?b) {
        let indice = Nat8.toNat(b) % longitudCaracteres;
        token := token # Char.toText(Array.(caracteres, indice));
      };
      case null {
        // Si se agota la entropía, solicitar más
        random := Random.Finite(await Random.blob());
        
        // Intentar nuevamente con la nueva entropía
        switch (random.byte()) {
          case (?b) {
            let indice = Nat8.toNat(b) % longitudCaracteres;
            token := token # Char.toText(Array.get(caracteres, indice)!!);
          };
          case null {
            token := token # "A"; // Caso extremo
          };
        };
      };
    };
  };
  
  return token;
};

    // Método para iniciar sesión (Update porque modifica el estado)
    public func iniciarSesion(Contrasena : Text) : async Text {
      if (Contrasena == hashContrasena) {
        let tokenNuevo = await generarTokenAleatorio();  // Llamar a la función para generar el token
        tokens.add(tokenNuevo);  // Use Buffer.add instead of Array.append
        return tokenNuevo;
      } else {
        return "Contraseña Incorrecta";
      }
    };

    // Método para cerrar sesión
    public func cerrarSesion(Token : Text) : async Text {
      // Convert Buffer to Array for contains check or implement a contains function for Buffer
      if (Buffer.contains<Text>(tokens, Token, Text.equal)) {
        return "Sesion cerrada";
      } else {
        return "Token invalido";
      }
    };
     public func TokenValido(Token : Text) : async Bool {
      return Buffer.contains<Text>(tokens, Token, Text.equal)
    };
  };

  var cuentas = Buffer.Buffer<Cuenta>(10);  // Use Buffer instead of Array

  // Método para crear una cuenta (Update porque modifica el estado)
  public func crearCuenta(usuario : Text, contrasena : Text) : async Text {
    let nuevaCuenta = Cuenta(usuario, contrasena);
    cuentas.add(nuevaCuenta);  // Use Buffer.add instead of Array.append
    // Await the result of iniciarSesion
    return await nuevaCuenta.iniciarSesion(contrasena);
  };

  // Nueva función para iniciar sesión buscando por nombre de usuario y contraseña
  // (Update porque modifica el estado)
  public func iniciarSesion(Usuario : Text, Contrasena : Text) : async Text {
    // Buscar la cuenta que coincida con el nombre de usuario
    let cuentasArray = Buffer.toArray(cuentas);
    for (cuenta in cuentasArray.vals()) {
      if (cuenta.nombre == Usuario) {
        // Await the result of iniciarSesion
        return await cuenta.iniciarSesion(Contrasena);
      };
    };
    return "Usuario no encontrado";
  };
  public func EncontrarPorToken(Token : Text) : async Text {
  return "Test"
};
     
}
