import Button from 'components/shared/button/Button';
import SocialMediaLogin from 'components/shared/socialMediaLogin/SocialMediaLogin';
import React from 'react';
import Navbar from 'components/layout/navbar/Navbar';
import Footer from 'components/layout/footer/Footer';
import FloatingButton from 'components/layout/floatingButton/FloatingButton';

function LoginPage() {
  return (
    <>
      <Navbar/>
        <div className='bg-red-500 h-screen flex justify-center items-center py-12'  >

            <div className='bgBox bg-blue-500 h-full w-full sm:max-w-screen-sm p-12'>
                    <SocialMediaLogin/>
                    <hr className='m-16 '/>

                    <div className="content flex flex-col p-5">
                            <span>تسجل الدخول</span>
                            <div className="relative my-6">
                              <label htmlFor="username" className='  absolute -top-4 right-1 bg-green-500 '>dasdas</label>
                              <input name='username' type="text" className='w-full p-2 border-black outline-none focus:border-yellow-400 border' />
                            </div>

                            <div className="relative my-6">
                              <label htmlFor="password" className='absolute -top-4 right-1 bg-green-500'>hi wor</label>
                              <input name='password' type="password" className='w-full p-2 border-black focus:border-blue-400 border' />
                            </div>

                            {/* // new section */}
                            <div className='flex flex-row justify-between p-3 bg-orange-400'>
                              <div className="p-2 flex-row  items-center ">
                                <input type="checkbox" name="rememberME" id='rememberME' className='w-[20px] h-[20px]' />
                                <label htmlFor="rememberME" className='mr-3'>تذكرني</label>
                              
                              </div>
                              <Button>تسجيل الدخول</Button>
                            </div>
                            <div className='flex flex-col p-3 gap-2'>
                              <span>مساعدة</span>
                              <div className='flex flex-row items-center gap-2'>
                                <div className='bg-blue-500 w-4 h-4 rounded-full'></div>
                                    <a href='http://'>لا املك حساب </a >
                              </div>
                              <div className='flex flex-row items-center gap-2'>
                                  <div className='bg-blue-500 w-4 h-4 rounded-full'></div>
                                  <a href='http://'>نسيت كلمة المرور</a>
                              </div>
                              
                              
                            </div>
                    </div>

            </div>

        </div>
        <FloatingButton/>
        <Footer/>
        </>
  );
}

export default LoginPage;
