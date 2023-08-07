import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy, limit, Timestamp} from 'firebase/firestore'
import { dataBase, auth } from '../firebase-config'
import '../App.css'



function ChadRoom(props) {//props
    const {room} = props; 
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messageRef = collection(dataBase, room)
    const roomRef = collection(dataBase, 'room')//which data to get
    useEffect(()=>{
        const queryMessage = query(
            messageRef,
            orderBy("createdAt", "desc"),
            // where("room", "==", room),
            limit(10),
          );  //conditional data
        const unsubscribe = onSnapshot(queryMessage, (snapshot)=>{
            let messages = []
            snapshot.forEach((doc)=>{
                messages.push(
                    {...doc.data(),
                    id : doc.id})
            })
            setMessages(messages)
            console.log(messages)
        })
        return()=>{
            unsubscribe()
        }
    }, [dataBase])


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          
          const temp = newMessage;
          setNewMessage("")
                await addDoc(messageRef, {
                    text: temp,
                    createdAt: serverTimestamp(),
                    user: auth.currentUser.uid,
                    userImage: auth.currentUser.photoURL,
                })
                dummy.current.scrollIntoView({behaviour: 'smooth'})
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }

    const dummy = useRef();

  return (<div>
    <div className='chatContainer'>
      <h2 className='roomName'>{room}</h2>
      <div className='messagesContainer' >
          {messages && messages.slice().reverse().map((message) => (
            <div className={auth.currentUser.uid === message.user ? 'userMessage' : 'message'} key={messages.indexOf(message)}>
              <img className='userImg' src={message.userImage} alt={message.user}/>
              <p className='userText'>{message.text}</p>
            </div>))}
            <div ref={dummy}></div>
      </div>
    <div className="container">
    <form onSubmit={handleSubmit} className="webflow-style-input">
      <input type='text' placeholder="message..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage}></input>
      <button className="material-symbols-rounded" disabled={!newMessage}>send</button>
    </form> 
  </div>
    </div>
    </div>
  )
}

export default ChadRoom
