var chatRef = new Firebase('https://komvux-firebase11111.firebaseio.com/');

// Create new user

// function register() {
//     var username = document.getElementById("registerUsername").value;
//     var password = document.getElementById("registerPassword").value;
//     chatRef.createUser({
//         email    : username,
//         password : password
//     }, function(error, userData) {
//         if (error) {
//             console.log("Error creating user:", error);
//         } else {
//             console.log("Successfully created user account with uid:", userData.uid);
//         }
//     });

// }

// Login user

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    chatRef.authWithPassword({
        email    : username,
        password : password
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
        return false
    });

    chatRef.onAuth(function(authData) {
  // Once authenticated, instantiate Firechat with the user id and user name
  if (authData) {
    initChat(authData);
  }
});

}


function initChat(authData) {
  var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
  chat.setUser(authData.uid, authData[authData.provider].displayName);
}