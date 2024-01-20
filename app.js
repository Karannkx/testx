// app.js

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Update user profile with username and phone
            userCredential.user.updateProfile({
                displayName: username,
                phoneNumber: phone
            }).then(() => {
                console.log("User registered successfully!");
            }).catch((error) => {
                console.error("Error updating user profile:", error);
            });
        })
        .catch((error) => {
            console.error("Error registering user:", error.message);
        });
}
