import React,{useLayoutEffect,useState,useCallback,useEffect} from 'react'
import { auth,db } from '../../firebase'
import {TouchableOpacity,View,Text} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
// import firestore from '@react-native-firebase/firestore';
 const ChatScreen = ({ navigation}) => {
    const [messages, setMessages] = useState([]);

    // const usersCollection = firestore().collection('Users');
    useEffect(() => {
      // const usersCollection = firestore().collection('Users');
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://www.gravatar.com/avatar/HASH',
            },
          },
        ])
      }, [])

    const SignOut = () => {
        auth.signOut().then(() => {
        // Sign-out successful.
        navigation.replace("Login");
        }).catch((error) => {
            console.log('error is',error)
            alert(error.error)
        // An error happened.
        });
        }
        
        useLayoutEffect(() => {
          const chatdb=db.collection('chats')
            const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').
            onSnapshot(snapshot => 
                setMessages(
            snapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
            }))
            )
            );
            console.log('chatdb is ',chatdb)
            return unsubscribe;
            }, [])

    // const signOut = () => {
    useLayoutEffect(() => {
    navigation.setOptions({
    headerLeft: () => (
    <View style={{ marginLeft: 20 }}>
    {/* <Avatar
    rounded={true}
    source={{
    uri:"https://www.gravatar.com/avatar/HASH",
    }}
    /> */}
    </View>
    ),
    headerRight: () => (
    <TouchableOpacity style={{
    marginRight: 10
    }} onPress={()=>{SignOut()}}
    >
<Text>signOut</Text>
</TouchableOpacity>
    )
    })
    }, [navigation])
    // const onSend = useCallback((messages = []) => {
    //     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    //   }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
        _id,
        createdAt,
        text,
        user,
        } = messages[0]
        db.collection('chats').add({
        _id,
        createdAt,
        text,
        user
        })
        
        const userRef = db.collection('chat sample');
        userRef.doc('M3iTodwf9h864VhDV9m8').set({
          uid: 'M3iTodwf9h864VhDV9m9',
          displayName: 'navneeth',
          photoURL: 'sample url',
          email: 'navaneethpln@gmail.com',
        })

        }, [])
    
      return (
        <View style={{flex:1}}>
           <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: 'navaneeth',
                avatar: 'https://www.gravatar.com/avatar/HASH'
                }}
            />  
        </View>
      )
}
export default ChatScreen