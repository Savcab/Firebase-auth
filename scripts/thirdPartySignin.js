var provider = new firebase.auth.GoogleAuthProvider();

// Popup
function googlePopup() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("This is the token")
        console.log(result.credential.accessToken);
        console.log("This is the user")
        console.log(result.user);
        console.log("This is the result object")
        console.log(result);
    }).catch(function(error) {
        console.log(error);
    });
}