 window.onload = function () {

 var mainButton = document.getElementById('commit');
 mainButton.addEventListener('click',function () {
    

    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
 )
}
firebase.auth().onAuthStateChanged(function(user) {
    // Once authenticated, instantiate Firechat with the logged in user
    if (user) {
      initChat(user);
    }
  });

  function initChat(user) {
    // Get a Firebase Database ref
    var chatRef = firebase.database().ref("chat");
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
    chat.setUser(user.uid, user.displayName);
      }
// console.log("test id ----->" + id);
 
