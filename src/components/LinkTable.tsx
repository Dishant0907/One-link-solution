import { ScrollArea } from "@/components/ui/scroll-area"
import { SiInstagram } from "react-icons/si";
import FloatingLabelInput from "./FloatingLabelInput";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { FaPinterestP } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";

import { Button } from "./ui/button";
import AddDialog from "./AddDialog";




const LinkTable = () => {
    return (
        <section id="linktable" className="ml-[2rem] py-4 px-2 w-[74rem] h-[48rem] border-none  backdrop-blur-lg  bg-black/10 rounded-xl  mt-[4rem]">
            <ScrollArea className="h-full w-full rounded-md border">

                {/* public profile */}
                <div className="border-b border-gray-400 pl-4">
                    <div>
                        <p className="text-black font-semibold font-sans ml-2 mt-2  mb-4 text-lg">Public Profile</p>

                    </div>
                    <div className="flex-col ml-3 w-[20rem]">
                        {/* <p className="ml-3 mt-2">Bio</p> */}
                        {/* <input className="border-b-2 border-gray-500 outline-none focus:border-black ml-3 bg-transparent bg-green-200" type="text" /> */}
                        <FloatingLabelInput label="About you" type="text" />
                    <FloatingLabelInput label="Profile Photo Link" type="text" />
                    </div>

                </div>



                {/* social media section */}
                <div className="border-b border-separate border-gray-400 pl-4 ">
                    <div>
                        <p className="text-black font-semibold font-sans ml-2 mt-2 mb-4 text-lg">Social Media </p>

                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex">
                        <div className="ml-3 mt-3 ">
                            <SiInstagram  size={22} />
                            

                        </div>
                        <div className=" ml-3 w-[20rem]">
                            <FloatingLabelInput label="Instagram" type="text" />
                        </div>

                    </div>


                    <div className="flex">
                        <div className="ml-3 mt-3">
                           
                            <FaTwitter size={22} />
                            

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Twitter" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <FaLinkedin size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Linkedin" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <FaWhatsapp size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="WhatsApp" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <FaGithub  size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Github" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <FaPinterestP size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Pinterest" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <FaTelegramPlane size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Telegram" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <MdOutlineMarkEmailRead size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Email" type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="ml-3 mt-3">
                            
                            <CiFacebook size={22} />

                        </div>
                        <div className="flex-col ml-3 w-[20rem]">
                            <FloatingLabelInput label="Facebook" type="text" />
                        </div>

                    </div>

                    </div>

                </div>

                {/* addd link section */}

                <div className="border-b border-gray-400 pl-4">
                    <div>
                        <p className="text-black font-semibold font-sans ml-2 mt-2  mb-4 text-lg">Custom Link</p>

                    </div>
                    <div className="flex-col ml-3 w-[20rem]">
                   <AddDialog/>
                    </div>

                </div>

                





            </ScrollArea>



        </section>
    )
}

export default LinkTable