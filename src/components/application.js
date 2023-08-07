import React, { useState, useRef, useEffect } from 'react';
import ChadRoom from './chadRoom';


function Application() {
  const [room, setRoom] = useState(() => {
    const storedRoom = localStorage.getItem('room');
    return storedRoom ? JSON.parse(storedRoom) : null;
  });
    const roomInputRef = useRef(null);

    useEffect(() => {
      localStorage.setItem('room', JSON.stringify(room));
    }, [room]);
    // room={room}
  return (<div>
    {room ? <ChadRoom room={room}/> : <div className="container">
        <form className="webflow-style-input">
          <input type='text' placeholder="Enter Room" ref={roomInputRef}></input>
          <button type="submit" onClick={(e)=>{e.preventDefault();setRoom(roomInputRef.current.value);}}>Join</button>
        </form>
      </div>}
    </div>     
  )
}

/* <ChadRoom />*/





/* <div class="container">
<form class="webflow-style-input">
  <input type='text' placeholder="Enter Room" ref={roomInputRef}></input>
  <button type="submit" onClick={(e)=>{e.preventDefault();setRoom(roomInputRef.current.value);}}>Join Room</button>
</form>
</div> */

/*  <form>
        <input type='text' ref={roomInputRef}/>
        <button onClick={(e)=>{e.preventDefault();setRoom(roomInputRef.current.value);}}>Join ChaD Room</button>
      </form> */


    //   <div>
    //   <input class="c-checkbox" type="checkbox" id="checkbox"/>
    //       <div class="c-formContainer">
    //         <form class="c-form">
    //           <input class="c-form__input" placeholder="Room Name here" type="text" ref={roomInputRef}/>
    //           <label class="c-form__buttonLabel" for="checkbox">
    //             <button class="c-form__button" type="button" onClick={(e)=>{e.preventDefault();setRoom(roomInputRef.current.value);}}>Join Now</button>
    //           </label>
    //           <label class="c-form__toggle" for="checkbox" data-title="Join Room"></label>
    //         </form>
    //       </div>
    // </div>
export default Application;