import React from 'react';
import XIcon from "@heroicons/react/solid/XIcon"
function FloatCard() {
    return (
        <div className='shadow-lg w-1/4 bg-blue-400 flex flex-col container justify-center rounded fixed bottom-4 left-4'>
            <div className='flex flex-row justify-between w-full'>
                <div className='p-4 text-lg font-bold'>تذكير</div>
                <div className='p-4 cursor-pointer'><XIcon className='w-5'/></div>
            </div>
            <p className='break-words w-full px-8 py-4'>أنضم الآن إلى قناتنا على Teleegram لتصلك الإشعارات الهامة.</p>

            <div className="w-full p-3">
                <button className='border-2 border-blue-500 text-black w-full py-2 px-3 rounded' >
                    أنضم الآن
                </button>
            </div>

        </div>
    );
}

export default FloatCard;
