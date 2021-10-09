import React ,{useState}from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth,db } from '../../firebase'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((res)=>{console.log('response is ',res);navigation.navigate('Chat')})
    .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    });
    }

const test=()=>{
    // let suna='chats'
// console.log('db.collection',db.collection(suna))
const userRef = db.collection('chattest')
// console.log('userRef is',userRef);
userRef.doc('chattest').set({
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://www.gravatar.com/avatar/HASH',
    },
  })
//   .then((res)=>{console.log('response is',res)}).catch((err)=>{console.log('error is',err)})
    }

return (
<View style={styles.container}>
<Input
placeholder='Enter your email'
label='Email'
leftIcon={{ type: 'material', name: 'email' }}
value={email}
onChangeText={text => setEmail(text)}
/>
<Input
placeholder='Enter your password'
label='Password'
leftIcon={{ type: 'material', name: 'lock' }}
onChangeText={text => setPassword(text)}
// secureTextEntry
/>
<Button title="login" style={styles.button}  onPress={signIn} />
<Button title="register" style={styles.button}  onPress={() => navigation.navigate('Register')}  />
<Button title="test" style={styles.button}  onPress={test} />
</View>
)
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
    },
    button: {
    width: 200,
    marginTop: 10
    }
    })