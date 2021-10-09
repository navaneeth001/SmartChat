import firebase from 'firebase/app'

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }

    init=()=>{
        if(firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBOsIobY-8ff3GRp0HloxYpms9PiANlLVk",
                authDomain: "chatapp-dbc46.firebaseapp.com",
                databaseURL: "https://chatapp-dbc46-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "chatapp-dbc46",
                storageBucket: "chatapp-dbc46.appspot.com",
                messagingSenderId: "1087147888498",
                appId: "1:1087147888498:web:f045b66b98aad3162717eb",
                measurementId: "G-6DCCBZZTKN"
            })
        }
    }

    checkAuth = ()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    }

        send= messages=>{
            messages.forEach(item=>{
                const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
                }
                this.db.push(message)
            })
        }

        parse= message=>{
            const {user,text,timestamp}=message.val();
            const { key:_id}= message;
            const createdAt = new Date(timestamp);

            return{
                _id,
                createdAt,
                text,
                user
            };
        };
        get=callback=>{
            this.db.on("child_added",snapshot =>callback(this.parse(snapshot)));
            
        }
        
        off(){
            this.db.off()
        }

        get db()
        {
            return firebase.database().ref('messages');
        }

        get uid(){

            return(firebase.auth().currentUser||{}).uid;
        }
    }

export default new Fire();