import IconButton from 'components/shared/iconButton/IconButton';
import React, { useState } from 'react';
import { FaUserTie, FaPenAlt, FaPaintBrush } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import user from "../../assets/images/user.png"
import { HiOutlineUser } from "react-icons/hi"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaRegCopy } from "react-icons/fa"
import { GrFormLocation } from "react-icons/gr"
import BoxCard from 'components/shared/boxCard/BoxCard';
import { BsFillCheckCircleFill } from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import {BsTagFill} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi"
import 'flowbite';


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




function RatingStars(){
    return (
        <div className='flex'>
            <AiFillStar className='text-yellow-300'/>
            <AiFillStar className='text-yellow-300'/>
            <AiFillStar className='text-yellow-300'/>
            <AiFillStar className='text-yellow-300'/>
            <AiFillStar className='text-yellow-300'/>
        </div>
        );
}


function ProjectStatus() {
    return (
        <BoxCard title="إستمارة المشروع" className="bg-red-500 ">
            <div className="flex flex-row flex-wrap ">
                <div className='w-1/2'>حالة المشروع</div>
                <div className='w-1/2'>تحت التنفيذ</div>
                <div className='w-1/2'>المدة المتاحة</div>
                <div className='w-1/2'>30 ايام </div>
                <div className='w-1/2'>الميزانية</div>
                <div className='w-1/2'> $500 - 200 </div>
                <div className='w-1/2'>عدد المتقدمين</div>
                <div className='w-1/2'> 1</div>
                <div className='w-1/2'> متوسط العروض</div>
                <div className='w-1/2'>$ 362 </div>
            </div>
        </BoxCard>
    )
}

function TheFreelancer() {
    return (
        <BoxCard title="منفذ المشروع" className="freelancer  bg-yellow-300">
            <div className="flex flex-col justify-center ">
                <div className="flex  p-1 w-2/3   ">
                    <div className="avater  rounded-full  w-14 h-14 hidden  sm:flex  flex-col items-center justify-center overflow-hidden">
                        <img src={user} className='' />
                    </div>
                    <div className='flex flex-col '>
                        <div className="flex items-center gap-2">
                            <HiOutlineUser />
                            <span>المنفذ : smarh</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <GrFormLocation className='w-5 h-8' />
                            <span>مصر</span>
                        </div>
                    </div>
                </div>
            </div>
        </BoxCard>
    )
}

function ProjectPage() {


    return (

        <div className='main flex flex-col'>
            <AutherDetails />
            <div className="body-Project-details flex flex-col-reverse gap-2 sm:flex-row container m-auto justify-between p-4 bg-yellow-600">
                <div className="right-side flex flex-col w-full sm:w-2/3 bg-green-500">

                    <div className="levels flex flex-col">

                        <div className="top bg-blue-800 flex justify-evenly p-4">

                            <div className="flex flex-col">
                                <BsFillCheckCircleFill className='w-[100px] h-[30px]' />
                                <span>نشر المشروع</span>
                            </div>
                            <div className="flex flex-col">
                                <BsFillCheckCircleFill className='w-[100px] h-[30px]' />
                                <span>تلقي العروض</span>
                            </div>
                            <div className="flex flex-col">
                                <BsFillCheckCircleFill className='w-[100px] h-[30px]' />
                                <span>تنفيذ المشروع</span>
                            </div>
                            <div className="flex flex-col">
                                <BsFillCheckCircleFill className='w-[100px] h-[30px]' />
                                <span>استلام المشروع</span>
                            </div>

                        </div>


                        <div className="bar bg-black h-3 rounded">

                        </div>

                    </div>

                    <BoxCard title="تفاصيل المشروع">
                        <span>
                            مرحبا , نبحث عن خبير html لفحص الموقع الخاص بي , حيث أثناء عمليه التطوير حدث خطأ ما وإختفت القائمة من Header , والصور من الهيدر أيضا , ومربع التعليقات في homepage , , يوجد backup ولكن لا اريد العودة إلى backup إختصارا للوقت
                            وفحص الأكواد في حال وجود أي أخطاء ممكنه
                            (العمل سيكون أون لاين بوجودي , حيث أن التعديل سيكون بإشرافي نضرا للعمل من داخل file manger)
                            وشكرا
                        </span>
                    </BoxCard>

                    <BoxCard title="تقييم المشروع ">
                        <div className='flex flex-col gap-2' >    
                            <div className="flex justify-between items-center">
                                <span>ترشح للآخرين</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>الإحترافية بالتعامل	</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>سرعة التواصل	</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>جودة العمل	</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>الخبرة بمجال العمل	</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>إحترام موعد التسليم	</span>
                                <RatingStars/>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>التعامل مرة اخرى	</span>
                                <RatingStars/>
                            </div>
                        </div>
                    </BoxCard>

                    <BoxCard title="مهارات مطلوبة">
                        <div className="flex flex-wrap">
                            <IconButton icon={BsTagFill} name="html" divStyle="w-max p-1"/>
                            <IconButton icon={BsTagFill} name="Css"  divStyle="w-max p-1"/>
                        </div>
                    </BoxCard>
                    
                    <div>
                        <div className='flex'>
                            <span>العروض المقدمة</span>
                            <div>
                               <FiChevronDown/> 
                            </div>
                        </div>
                        <hr/>
                        <div></div>
                        <div></div>
                    </div>


                </div>

                <div className="left-side flex flex-col bg-blue-800 w-full sm:w-1/3 p-4">

                    <ProjectStatus />
                    <TheFreelancer />

                    <div className='social media bg-orange-400'>
                        <span className='my-4 block'>  شارك</span>
                        <hr />
                        <div className='flex justify-evenly items-center m-4'>

                            <div className="  flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <FaFacebookF className='w-4 h-4' />
                            </div>

                            <div className="  flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <AiOutlineTwitter className='w-4 h-4' />
                            </div>

                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <AiFillLinkedin className='w-4 h-4' />
                            </div>

                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <IoLogoWhatsapp className='w-4 h-4' />
                            </div>

                            <div className=" flex justify-center items-center w-10 h-10 border border-gray-800 p-2">
                                <FaRegCopy className='w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default ProjectPage;
