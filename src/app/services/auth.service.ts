export class AuthService {

  isAuth = false;

  signIn() {
    //on simule un temps de réponse pour l'auth
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}
