import React from 'react';
import CheckCircleIcon from '@heroicons/react/solid/CheckCircleIcon'



function Paragraph(props) {
  return (
    <div className='flex flex-col m-5'>
      <div className='flex flex-row'>
        <CheckCircleIcon className='w-5 ml-2 text-blue-500' />
        <h2 className='font-bold text-xl'>{props.title}</h2>
      </div>
      <p className='pt-2'>{props.paragraph}</p>
    </div>
  );
}






function HowItWorks() {
  return (
    <div className='flex flex-row container'>
      <div className='rightSide h-100 w-1/2' >
        < Paragraph
          title=' 1اضف مشروع'
          paragraph='هذا هو العنواهذا هو العنواهذا هو العنواهذا هو هذا هو العنواهذا هو العنوا الاول لهذة المدونة النجسة'
        />
        < Paragraph
          title=' 2اضف مشروع'
          paragraph='هذا هو اهذا هو العنواهذا هو العنواهذا هو هذا هو العنواهذا هو العنوا الاول لهذة المدونة النجسة'
        />
        < Paragraph
          title=' 3اضف مشروع'
          paragraph='هذا هو الهذا هو العنواهذا هو العنواهذا هو العنواهذا هو العنواعنوان الاول لهذة المدونة النجسة'
        />
      </div>
      <div className='leftSide mt-5 h-100 w-1/2'>

          <iframe
            className='w-full h-full '
            title='newone'
            src="https://www.youtube.com/embed/UBOj6rqRUME"
          ></iframe>
        </div>
      </div>
  );
}

export default HowItWorks;
