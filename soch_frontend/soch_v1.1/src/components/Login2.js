import React from 'react';
import {useEffect} from 'react';
// import GoogleLogin from 'react-google-login';
import {useNavigate } from 'react-router-dom';
// import{ FcGoogle} from 'react-icons/fc';
import sochVideo from '../assests/soch_landing_page2.mp4'
import logo from '../assests/logo-bw.png';
import {client} from '../client'


const Login = () => {
  const navigate = useNavigate();
  function handleCallbackResponse(response){
    // console.log(response)
    localStorage.setItem('user', JSON.stringify(response.profileObj))
    const {name , googleId, imageUrl} = response.profileObj;
    const doc ={
      _id:googleId,
      _type:'user',
      userName:name,
      image: imageUrl,
    }
    client.createIfNotExists(doc).then(() =>{
      navigate('/', {replace: true})
    })
   
  }
  /* global google */
  useEffect(()=>{
    google.accounts.id.initialize({
      // client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
      client_id: "689612900671-q2m0o8pt4lvug1bp1c8fjfdhcdnnlf3q.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full" >
        <video 
        src={sochVideo}
        type ="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
        />
        <div className="absolute h-screen flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.7)]">
            <div className='p-3  '>
            <img src={logo} width="130px" alt ="logo" className='logo' />
  
            <div id="signInDiv"></div>
        </div>
        </div>
     
      </div>
    </div>
  )
}

export default Login
