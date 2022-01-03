var firebaseConfig = {
  apiKey: "AIzaSyAFLs2lRrL7HGNprAa_ayJp4PQNqnPL4pk",
  authDomain: "kwitter-d5e71.firebaseapp.com",
  databaseURL: "https://kwitter-d5e71-default-rtdb.firebaseio.com",
  projectId: "kwitter-d5e71",
  storageBucket: "kwitter-d5e71.appspot.com",
  messagingSenderId: "770609332469",
  appId: "1:770609332469:web:7a266f29b3606349bd05bc",
  measurementId: "G-C9RVK9M6G4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
