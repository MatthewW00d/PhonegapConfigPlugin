//FRAMEWORK 7 JAVASCRIPT
// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

// close sidebar panel
$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});


//DEVICE READY JAVASCRIPT
document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');

    //example function
    function changeSomeText() {
        document.getElementById('change').innerHTML = "this text WAS changed by javascript";
    }

    //run the example function
    changeSomeText();
});


