'use client'
import DataContext from '@/app/context/dataContext'
import { useState } from 'react'

const DataContextProvider = ({children}) => {
    const [bio, setBio] = useState()
    const [username, setUsername] = useState()
    const [instagram, setInstagram] = useState()
    const [github, setGithub] = useState()
    const [linkedin, setLinkedin] = useState()
    const [whatsApp, setWhatsApp] = useState()
    const [pinterest, setPinterest] = useState()
    const [telegram, setTelegram] = useState()
    const [facebook,setFacebook] = useState()
    const [twitter,setTwitter] = useState()
    const [email,setEmail] = useState()  
    const [profilePhoto,setProfilePhoto] = useState()  
    return (
        <DataContext.Provider value={{bio, profilePhoto, setProfilePhoto, twitter, email, setEmail, setTwitter, setBio, username, facebook, setFacebook, setUsername, instagram, setInstagram, github, setGithub, linkedin, setLinkedin, whatsApp, setWhatsApp, pinterest, setPinterest, telegram, setTelegram}}>
            {children} 
        </DataContext.Provider>
    )
}

export default DataContextProvider;