 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCl685e0taI1TADBYQuyznXHQaTXeOCCu8",
      authDomain: "kwitter-1714b.firebaseapp.com",
      databaseURL: "https://kwitter-1714b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1714b",
      storageBucket: "kwitter-1714b.appspot.com",
      messagingSenderId: "548407462194",
      appId: "1:548407462194:web:0d10c27e961bc36f6b2f2b",
      measurementId: "G-4GLB8J2EXV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addroom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
  });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class= 'room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}
