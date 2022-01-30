import SectionTitle from 'components/shared/sectionTitle/SectionTitle';
import React from 'react';

import ShoppingBagIcon from "@heroicons/react/solid/ShoppingBagIcon"
import PaperAirplaneIcon from "@heroicons/react/solid/PaperAirplaneIcon"
import CreditCardIcon from "@heroicons/react/solid/CreditCardIcon"
import UserGroupIcon from "@heroicons/react/solid/UserGroupIcon"
import UserIcon from "@heroicons/react/solid/UserIcon"
import CurrencyDollarIcon from "@heroicons/react/solid/CurrencyDollarIcon"

function WhyUs() {
  return <section className='container mx-auto my-32'>
    <SectionTitle>لماذا نفذلي؟</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
      <div className="text-green-500">
        <Card Icon={ShoppingBagIcon} title="نفّذ مشاريعك بسهولة" subtitle="أطرح مشروعك واترك مهمّة تنفيذه لأفضل خبراء الوطن العربي"/>
      </div>
      <div className="text-blue-500">
        <Card Icon={PaperAirplaneIcon} title="وظّف مبدعين بشكل سريع" subtitle="إختر المبدع الذي تراه مناسباً وقم بتوظيفه مباشرةً"/>
      </div>
      <div className="text-yellow-500">
        <Card Icon={CreditCardIcon} title="ادفع بكل أريحية" subtitle="لا تدفع إلا للأعمال التي يتم انجازها ويبقى الرصيد في حسابك حتى تستلم المشروع كاملاً"/>
      </div>
      <div className="text-purple-500">
        <Card Icon={UserGroupIcon} title="ابن فريق عمل مُتكامل" subtitle="خبراء في مُختلف المجالات ومن مُختلف البلدان جاهزون لخدمتك عبر نفذلي"/>
      </div>
      <div className="text-stone-500">
        <Card Icon={UserIcon} title="وظف الأفضل والأنسب لك" subtitle="تصفح المبدعين و اطلع على ملفاتهم الشخصية ووظف مار تراه مناسباً للوظيفة"/>
      </div>
      <div className="text-cyan-500">
        <Card Icon={CurrencyDollarIcon} title="نفذ مشاريعك بأقل تكلفة" subtitle="وظّف أفضل الخبرات حسبما يتناسب مع ميزانيتك."/>
      </div>
    </div>
  </section>;
}

function Card({Icon, title, subtitle}) {
  return <div className='flex flex-col justify-center items-center gap-3 text-center'>
    <Icon className="w-16" />
    <h4 className='text-2xl text-black'>{title}</h4>
    <h5 className='text-base text-gray-500'>{subtitle}</h5>
  </div>;
}


export default WhyUs;
