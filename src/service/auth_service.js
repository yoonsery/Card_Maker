import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`](); // key 값 읽을 때 obj.key 말고 obj['key']로 읽어오는 거랑 같음
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
