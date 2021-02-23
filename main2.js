var firebaseConfig = {
  apiKey: "AIzaSyA1-3fVmkXEtkg00Xvk44XpIkdv2vm0h20",
  authDomain: "chatapp4142.firebaseapp.com",
  databaseURL: "https://chatapp4142.firebaseio.com",
  projectId: "chatapp4142",
  storageBucket: "chatapp4142.appspot.com",
  messagingSenderId: "1073445067012",
  appId: "1:1073445067012:web:d978f4ab9db76f8810d851",
  measurementId: "G-8WP2HWHDJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  function addroom(){
        a = document.getElementById("room_name").value;
        console.log(a);
        firebase.database().ref("/").child(a).set({
              purpose:"Adding Room Name"
        });
        localStorage.setItem("room",a);
        window.location="index3.html";
  }
function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) 
    {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) 
          {
     childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("RoomName-",Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='navigate_index(this.id)' >Room name is - "+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
});
}
getData();
function navigate_index(y){
    console.log(y);
    localStorage.setItem("room",y);
    window.location="index3.html";
}
function profile(){
   window.location="index4.html";
}