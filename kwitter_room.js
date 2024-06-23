
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAEGBZGdolGFcbKtrgRo5ueI6UmoKAleTs",
      authDomain: "classtest-b182a.firebaseapp.com",
      databaseURL: "https://classtest-b182a-default-rtdb.firebaseio.com",
      projectId: "classtest-b182a",
      storageBucket: "classtest-b182a.appspot.com",
      messagingSenderId: "757696581656",
      appId: "1:757696581656:web:f6da0e07e535bb06df736d",
      measurementId: "G-K5GWS80QYG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code

      });});}
getData();""
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}