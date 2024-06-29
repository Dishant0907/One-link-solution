"use client"
import React, { useContext, useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import DataContext from '@/app/context/dataContext';



const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  
const {setBio,bio,setInstagram,setTwitter,setLinkedin,setWhatsApp,setPinterest,setFacebook,setGithub,setTelegram,setEmail,setProfilePhoto} = useContext(DataContext)
  const setValue =(e) => {
    if(label == 'About you'){
      setBio(e.target.value)

    }

    else if(label === 'Instagram'){
      setInstagram(e.target.value)
    }
    else if(label ==="Twitter"){
      setTwitter(e.target.value)
    }
    else if(label ==="Github"){
      setGithub(e.target.value)
    }
    else if(label ==='Linkedin'){
      setLinkedin(e.target.value)
    }
    else if(label === "WhatsApp"){
      setWhatsApp(e.target.value)
    }
    else if(label === 'Pinterest'){
      setPinterest(e.target.value)
    }
    else if(label === 'Facebook'){
      setFacebook(e.target.value)
    }
    else if(label ==='Telegram'){
      setTelegram(e.target.value)
    }
    else if(label === 'Email'){
      setEmail(e.target.value)
    }
    else if (label === 'Profile Photo Link'){
      setProfilePhoto(e.target.value)
    }
    


    
    
  }

  return (
    <div className="relative  mb-6">
      <input
        {...props}
        className="block px-2.5 font-sans pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-b-2 border-gray-500 appearance-none focus:outline-none  focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) =>{ setHasValue(e.target.value !== ''); setValue(e) }}
      />
      <label
        className={`absolute text-sm     font-sans font-semibold text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
          isFocused || hasValue ? 'text-blue-600' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;