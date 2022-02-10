import Footer from 'components/layout/footer/Footer';
import Navbar from 'components/layout/navbar/Navbar';
import React from 'react';

function ProjectPage() {
  
  return <>
    <Navbar />
    <div className="flex flex-col">
      <div className="author bg-gray-300 py-8">
        <div className="container mx-auto flex flex-row justify-between">
          <div className="right flex flex-row">
            <div className="avatar p-4 m-4">asd</div>
            <div className="project-title">
              <div className="title p-4 m-4">مطلوب موقع مجلة او اخبارى اتقبل في ادسنس</div>
              <div className="flex gap-4  p-4 m-4">
                <span>hello</span>
                <span>23h </span>
              </div>
            </div>
          </div>
          <div className="left">left</div>
        </div>
      </div>

      <div className="project-details container mx-auto flex flex-row justify-center gap-4">
        <div className="flex flex-col w-full">
          <div className="box bg-red-300 m-4 p-4 w-full">124112</div>
          <div className="box bg-red-300 m-4 p-4 w-full">124112</div>
          <div className="box bg-red-300 m-4 p-4 w-full">124112</div>
          <div className="box bg-red-300 m-4 p-4 w-full">124112</div>
          <div className="box bg-red-300 m-4 p-4 w-full">124112</div>
        </div>
        <div className="flex flex-col w-full sm:w-[600px]">
          <div className="box bg-red-300 m-4 p-4">124112</div>
          <div className="box bg-red-300 m-4 p-4">124112</div>
        </div>
      </div>

    </div>
    <Footer />
  </>;
}

export default ProjectPage;
