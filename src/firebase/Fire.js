import firebase from 'firebase/app';
import 'firebase/auth';


var FirebaseConfig = {
    apiKey: "AIzaSyBPaKNADYSuvRsYBOkDX6N-hzvb0HDvd0s",
    authDomain: "ecommerce-47872.firebaseapp.com",
    databaseURL: "https://ecommerce-47872.firebaseio.com",
    projectId: "ecommerce-47872",
    storageBucket: "ecommerce-47872.appspot.com",
    messagingSenderId: "96369622793",
    appId: "1:96369622793:web:1c937ebc25e69390935dd8"
};

class Firebase {
    constructor() {

        firebase.initializeApp(FirebaseConfig);
        this.auth = firebase.auth();

    }
    //     async register(name,email,password){

    //    await this.auth().createUserWithEmailAndPassword(email, password)
    //    return this.auth.currentUser.updateProfile({
    //        displayName:name
    //    })
    //     }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name

        })
    }

    async getUser() {
        var user = firebase.auth().currentUser;
        return user
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    // Initialize Firebase


    async logout() {
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return err;
        });
        return logout;
    }

}
export default new Firebase();