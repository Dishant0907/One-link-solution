"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram } from "react-icons/si"
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"
import { MdEmail } from "react-icons/md"
import DataContext from '@/app/context/dataContext'

const SocialIcon = ({ href, Icon }) => (
  <Link href={href}>
    <Icon size={22} />
  </Link>
)

const PreviewPanel = () => {
  const { 
    bio, 
    instagram, 
    twitter, 
    github, 
    linkedin, 
    facebook, 
    pinterest, 
    email, 
    whatsApp, 
    telegram, 
    profilePhoto 
  } = useContext(DataContext)

  const socialLinks = [
    { condition: instagram, href: `/${instagram}`, Icon: SiInstagram },
    { condition: twitter, href: `/${twitter}`, Icon: FaTwitter },
    { condition: github, href: `/${github}`, Icon: FaGithub },
    { condition: linkedin, href: `/${linkedin}`, Icon: FaLinkedin },
    { condition: pinterest, href: `/${pinterest}`, Icon: FaPinterest },
    { condition: whatsApp, href: `/${whatsApp}`, Icon: FaWhatsapp },
    { condition: email, href: `/${email}`, Icon: MdEmail },
    { condition: facebook, href: `/${facebook}`, Icon: FaFacebook },
    { condition: telegram, href: `/${telegram}`, Icon: FaTelegram },
  ]

  return (
    <section className='h-[47rem] mt-[8rem] overflow-hidden mx-auto shadow-xl shadow-black relative w-[24rem] bg-white border-[0.5rem] border-black rounded-3xl'>
      <div className='absolute top-3 left-[11rem] w-4 h-4 rounded-full z-50 bg-black' />

      <div className='w-[6rem] h-[6rem] rounded-full relative overflow-hidden bg-white mx-auto mb-[0.3rem] mt-[4.4rem]'>
        {profilePhoto && (
          <Image
            src={`/${profilePhoto}`}
            layout="fill"
            objectFit="cover"
            alt="Profile picture"
          />
        )}
      </div>

      <div className='flex flex-col items-center mt-1'>
        <p className='text-black font-bold font-sans'>@username</p>
        <p className='text-black font-thin font-sans'>{bio}</p>
      </div>

      <div className="flex gap-3 w-full justify-center mt-[1.5rem]">
        {socialLinks.map((link, index) => 
          link.condition && <SocialIcon key={index} href={link.href} Icon={link.Icon} />
        )}
      </div>

      <div className="flex mx-3 rounded-md mt-8 bg-gray-100 p-3">
        <CiGlobe size={22} className="mr-3 ml-1" />
        <div className="font-sans font-semibold">
          <Link href='/'> This is my website</Link>
        </div>
      </div>
    </section>
  )
}

export default PreviewPanel