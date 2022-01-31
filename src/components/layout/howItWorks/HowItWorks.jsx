import React from 'react';
import CheckCircleIcon from '@heroicons/react/solid/CheckCircleIcon'
import payimag from "../../../assets/images/payments-min.png"


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
    <div className='flex flex-row container justify-around'>
      <div className='rightSide h-100 w-1/2' >
        < Paragraph
          title=' 1اضف مشروع'
          paragraph='هذا هو العنواهذا هو العنواهذا هو العنواهذا هو هذا هو العنواهذا هو العنوا الاول لهذة المدونة '
        />
        < Paragraph
          title=' 2اضف مشروع'
          paragraph='هذا هو اهذا هو العنواهذا هو العنواهذا هو هذا هو العنواهذا هو العنوا الاول لهذة المدونة '
        />
        < Paragraph
          title=' 3اضف مشروع'
          paragraph='هذا هو الهذا هو العنواهذا هو العنواهذا هو العنواهذا هو العنواعنوان الاول لهذة المدونة '
        />
      </div>
      <div className='leftSide mt-5 h-100 w-1/2'>

          <img
            className='w-full h-full '
            alt='newone'
            src={payimag}
          />
        </div>
      </div>
  );
}

export default HowItWorks;
