import React from 'react';
import {useEffect} from 'react';
// import GoogleLogin from 'react-google-login';
// import {useNavigate } from 'react-router-dom';
// import{ FcGoogle} from 'react-icons/fc';
import sochVideo from '../assests/soch_landing_page2.mp4'
import logo from '../assests/logo-bw.png'


const Login = () => {

  function handleCallbackResponse(response){
    console.log(response)
  }
  /* global google */
  useEffect(()=>{
    google.accounts.id.initialize({
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
            {/* <div className='shaddow-2xl'>
                
                <GoogleLogin
                clientId={"292683294643-bphhao49c82dsoh8t0sg4tsi3ln8l95j.apps.googleusercontent.com"}
                render={(renderProps)=>(
                    <button
                    type='button'
                    className='bg-white flex justify-center items-center p-3 rounded-lg curspr-pointer outlining-non'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    >

                        <FcGoogle className= "mr-4 "/> sign in with Google
                    </button>
                
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
                />

            </div> */}
            <div id="signInDiv"></div>
        </div>
        </div>
     
      </div>
    </div>
  )
}

export default Login
