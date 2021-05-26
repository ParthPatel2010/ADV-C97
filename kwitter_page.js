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
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 name = message_data ['name'];
 message = message_data['name'];
 like = message_data['like'];
 name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id) '>";
span_with_tag = "<span class='glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output.").innerHTML += row;
 //End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location.replace("index.html");
      }
}