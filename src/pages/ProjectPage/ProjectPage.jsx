import IconButton from 'components/shared/iconButton/IconButton';
import React, { useState } from 'react';
import { FaUserTie, FaPenAlt, FaPaintBrush } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import user from "../../assets/images/user.png"
import {HiOutlineUser} from "react-icons/hi"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io"
import {FaRegCopy} from "react-icons/fa"

import {GrFormLocation} from "react-icons/gr"


function AutherDetails() {
    const [liked, setLiked] = useState(false)

    return (
        <div className="Project-title flex flex-col sm:flex-row justify-between container mx-auto p-8 m-1 bg-red-500 items-center">


            <div className="right flex gap-4">

                <div className="avater  rounded-full  w-14 h-14 hidden  sm:flex  flex-col items-center justify-center overflow-hidden">
                    <img src={user} className='' />
                </div>

                <div className="title flex flex-col gap-1">
                    <div className="project-title">مطلوب مبرمج لعمل Backend لمنصة إلكترونية</div>
                    <div className="project-state flex gap-2 items-center">
                        <FaUserTie />
                        <span> مركز فيثاغورث </span>
                        <FaPaintBrush />
                        <span> منذ 10 دقائق</span>
                    </div>
                </div>

            </div>



            <div className="left flex gap-4">
                <div className="like-project">
                    <IconButton icon={FaPenAlt} name="مشروع مماثل" />
                </div>
                <div className="like-button" onClick={() => { setLiked(!liked) }}>
                    {liked ? <AiFillHeart className='w-8 h-14  ' /> : <AiOutlineHeart className='w-8 h-14  ' />}

                </div>
            </div>
        </div>
    )
}

function ProjectStatus() {
    return (

        <div className="project-status   bg-red-500">

            <span className='mb-4 block'>إستمارة المشروع</span>
            <hr />
            <div className="flex flex-col justify-center ">
                <div className="flex  p-1 w-2/3  justify-between">
                    <span>حالة المشروع</span>
                    <span>تحت التنفيذ</span>
                </div>
                <div className="flex  p-1 w-2/3  justify-between">
                    <span>المدة المتاحة</span>
                    <span>30 ايام </span>
                </div>
                <div className="flex  p-1 w-2/3  justify-between ">
                    <span>الميزانية</span>
                    <span> $500 - 200 </span>
                </div>
                <div className="flex  p-1 w-2/3  justify-between ">
                    <span>عدد المتقدمين</span>
                    <span> 1</span>
                </div>
                <div className="flex  p-1 w-2/3  justify-between ">
                    <span> متوسط العروض</span>
                    <span>$ 362 </span>
                </div>
            </div>

        </div>
    )
}

function TheFreelancer () {
    return(
        <div className="freelancer  bg-yellow-300">
                        <span className='my-4 block'> منفذ المشروع</span>
                        <hr />
                        <div className="flex flex-col justify-center ">
                            <div className="flex  p-1 w-2/3   ">
                                <div className="avater  rounded-full  w-14 h-14 hidden  sm:flex  flex-col items-center justify-center overflow-hidden">
                                    <img src={user} className='' />
                                </div>
                                <div className='flex flex-col '>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineUser/>
                                        <span>المنفذ : smarh</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <GrFormLocation className='w-5 h-8'/>
                                        <span>مصر</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

function ProjectPage() {


    return (

        <div className='flex flex-col'>

            <AutherDetails />


            <div className="Project-details flex flex-col-reverse gap-2 sm:flex-row container m-auto justify-between p-4 bg-yellow-600">

                <div className="right-side flex flex-col w-full sm:w-2/3 bg-green-500">

                    <div className="">number 1</div>
                    <div className="">number 2</div>
                    <div className="">number 3</div>
                    <div className="">number 4</div>
                    <div className="">number 5</div>

                </div>

                <div className="left-side flex flex-col bg-blue-800 w-full sm:w-1/3 p-4">

                    <ProjectStatus />
                    <TheFreelancer/>
                    
                    <div className='social media bg-orange-400'>
                        <span className='my-4 block'>  شارك</span>
                        <hr />
                        <div className='flex justify-evenly items-center m-4'>
                        
                            <div className="  flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <FaFacebookF className='w-4 h-4'/>
                            </div> 
                            
                            <div className="  flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <AiOutlineTwitter className='w-4 h-4'/>
                            </div> 
                            
                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <AiFillLinkedin className='w-4 h-4'/>
                            </div> 
                            
                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <IoLogoWhatsapp className='w-4 h-4'/>
                            </div>   
                            
                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <FaRegCopy className='w-4 h-4'/>
                            </div>                        
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default ProjectPage;
