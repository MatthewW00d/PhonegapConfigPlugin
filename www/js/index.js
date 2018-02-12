/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// Geo Location
function geolocation(){
 // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //

    var onSuccess = function(position) {
         document.getElementById('gpsResult').innerHTML= 'Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n';
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}
//If battery status changes

function batteryStatus() {
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
     document.getElementById('batteryResult').innerHTML="Level: " + status.level + " isPlugged: " + status.isPlugged;
}
}

//Vibration

function vibration(){
    // Vibrate for 3 seconds
navigator.vibrate(3000);
    
    // Vibrate for 1 second
// Wait for 1 second
// Vibrate for 3 seconds
// Wait for 1 second
// Vibrate for 3 seconds
navigator.vibrate([1000, 1000, 3000, 1000, 3000]);
}



function takePicture() {
	    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('preview');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

//Local Storage
//Set
function localStoreageSet() {
	//retrieve value from text input

	var formValue1 = document.getElementById("inputTextbox1").value;
    var formValue2 = document.getElementById("inputTextbox2").value;
	// Store the value
    console.log(formValue2);
	localStorage.setItem("formValue1Val", formValue1);
    localStorage.setItem("formValue2Val", formValue2);
    var retrieveBtn = document.getElementById("localStorageRetrieve");
    retrieveBtn.classList.remove("disabled");
    var retrieveBtn = document.getElementById("localStorageClear");
    retrieveBtn.classList.remove("disabled");
}


//Get
function localStoreageGet() {
	//retrieve the value
    var returnLocalText1 = localStorage.getItem("formValue1Val");
    var returnLocalText2 = localStorage.getItem("formValue2Val");
	document.getElementById("localStorageResult").innerHTML = returnLocalText1 + " " + returnLocalText2;
}

//Clear
function localStoreageClear() {

	localStorage.clear();
    document.getElementById("inputTextbox1").value = '';
    document.getElementById("inputTextbox2").value = '';
}


//Compass

function getCompass(){

function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 3000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);


}
function clearCompass(){
navigator.compass.clearWatch(watchID);
watchID = null;
}












    //run onSuccess() function when location retreived. Run onError() function if fails
    function testGPS() {
	  navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 3600000, timeout: 5000, enableHighAccuracy: true}); 
	}

    // onSuccess Callback
	// This passes a Position object into the function, which contains the current GPS coordinates
	function onSuccess(position) {
		//display the co ordinates
	    document.getElementById('gpsresult').innerHTML = position.coords.latitude +','+ position.coords.longitude;
	    //set the variables with the latitude and longtitude for use later
	    userLat = position.coords.latitude;
	    userLong = position.coords.longitude;
	    //draw the google map with user position - see the drawMap function below
	    drawMap(userLat, userLong);
	};

	// onError Callback receives a PositionError object
	function onError(error) {
	    //add some message about lcoation services being turned off
	    var error = ('code: ' + error.code + 'message: ' + error.message);
	    document.getElementById('gpsresult').innerHTML = error;
	    alert("Location Services Unavailable");

	}


