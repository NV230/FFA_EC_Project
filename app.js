let foodlist = [];

var firebaseConfig = {
    apiKey: "AIzaSyDl5mMENN5FqPNwO6wcAHim2CkUOUXXTw8",
    authDomain: "foodbank-91445.firebaseapp.com",
    databaseURL: "https://foodbank-91445-default-rtdb.firebaseio.com",
    projectId: "foodbank-91445",
    storageBucket: "foodbank-91445.appspot.com",
    messagingSenderId: "1032031097775",
    appId: "1:1032031097775:web:056832e413c11df1fcd55a",
    measurementId: "G-VYWLPZJN2M"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db1 = firebase.firestore();

    const renderfoodLists = function(){

        db1.collection('foodbank').get().then(data =>{
            console.log(data.docs[0].data());
            data.docs.forEach(element =>{
                const singlefoodlist = element.data();
                foodlist.push(singlefoodlist);
            });
            foodlist.forEach(element =>{
               // $('.foodlist').append('<p>'+element.name+'</p>');
                //$('.foodlist').append('<p>'+element.item1+'</p>');
                //$('.fbName').append('<p>'+element.name+'</p>');
                //$('.fbName').append('<p>'+element.item1+'</p>');
    
                
            })
        });
    
    }  

    function getdata() {
        var foodbankname = document.getElementById("namedropdown").value;
        
        //alert("user: "+ user);
        let obj = foodlist.find(o => o.id === foodbankname);
            
            document.getElementById("name").innerHTML=obj.name;
            document.getElementById("item").innerHTML=obj.item;
            document.getElementById("location").innerHTML=obj.location;
       
    }

renderfoodLists();