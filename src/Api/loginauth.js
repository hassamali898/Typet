import {f,auth} from '../../Config/Config';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import {LogBox} from 'react-native';
const emailLogin =(user,password,callback)=>{
    console.log(user,password)
    auth.signInWithEmailAndPassword(user,password)
    .then(callback)
    .catch((error)=>alert("Invalid Email or Password"+error));
    
};
async function loginWithFacebook(nav){
    try{
        Facebook.initializeAsync({appId:'1553857721474035'});
    const {type,token} = await Facebook.logInWithReadPermissionsAsync({ 
        permissions: ['email','public_profile'] } 
    );
    if(type === 'success'){
        const credentials = f.auth.FacebookAuthProvider.credential(token);
        f.auth().signInWithCredential(credentials).then((res)=>{
            LogBox.ignoreLogs(['Setting a timer']);
                f.database().ref('/users/' + res.user.uid).set({
                    username:res.additionalUserInfo.profile.name,
                    email: res.additionalUserInfo.profile.email,
                    profile_picture : res.additionalUserInfo.profile.picture.data.url
                })
                .then(nav)
                .catch((error)=>{
                    alert(`Somethinf Went Wrong : ${error}` )
                })
        })
        .catch((error)=>{
            console.log('Error....',error);
        });
    }
    }catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
    

}
async function loginWithGoogle(nav){
    try{
        const result = await Google.logInAsync({
            androidClientId:'302795540134-g0ipt8bvmf50oiikp9ldlrrq0ttjqsf4.apps.googleusercontent.com',
            iosClientId:'302795540134-9ks2h1nhlpd33t4umdfn133r6jahgsnp.apps.googleusercontent.com',
            scopes:['profile','email']
        }) ;
        if(result.type === 'success'){
            const credentials = f.auth.GoogleAuthProvider.credential(result.idToken,result.accessToken)
            await f.auth().signInWithCredential(credentials)
            .then((res)=>{
                LogBox.ignoreLogs(['Setting a timer']);
                f.database().ref('/users/' + res.user.uid).set({
                    username:res.additionalUserInfo.profile.name,
                    email: res.additionalUserInfo.profile.email,
                    profile_picture : res.user.photoURL
                }).then(nav).catch((error)=>{
                    alert(`Something Went Wrong : ${error}` )
                })
            })
            .catch((error)=>{
                console.log('Error....',error);
            });
        }   
    }
    catch ({ message }) {
        alert(`Google Login Error: ${message}`);
    }
}
const isuserLogin=async()=>{
    try {
     return await new Promise((resolve, reject) =>
        app.auth().onAuthStateChanged(
          user => {
            if (user) {
              // User is signed in.
              console.log("hello")
              resolve(user)
            } else {
              // No user is signed in.
              reject('no user logged in')
            }
          },
          // Prevent console error
          error => reject(error)
        )
      )
    } catch (error) {
      return false
    }
  }
function logOutFun(nav){
    auth.signOut().then(()=>nav()).catch((error)=>{
        alert(`Something Went Wrong ${error}`);
    });
    /**/
}
export {emailLogin,loginWithFacebook,loginWithGoogle,logOutFun,isuserLogin}