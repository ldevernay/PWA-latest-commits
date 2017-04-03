if ('serviceWorker' in navigator) {
     navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

  // Initiating our Auth0Lock
var lock = new Auth0Lock(
  'YOUR_CLIENT_ID',
  'YOUR_AUTH0_DOMAIN'
);


document.getElementById('btn-login').addEventListener('click', function() {
  lock.show();
});

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getProfile() and save it to localStorage
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});
