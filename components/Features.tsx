import { FEATURES } from '@/constants'
import Image from 'next/image'

type FeatureItem = {
  title: string;
  icon: string;
  desc: string
}

const FeatureItem = ({title, icon, desc }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-6 bg-green-50'>
        <Image className='' alt='icon' src={icon} width={30} height={30} />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
        {title}
      </h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{desc}</p>
    </li>
  )
}

function Features() {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 max-container padding-container'>
      <div className='relative w-full justify-end flex '> 
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image className='feature-phone' alt='phone' src="/phone.png" width={440} height={1000} />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image className='' alt='camp' src='/camp.svg' width={50} height={50}/>
            <h2 className='bold-40 lg:bold-64' >
              Tính năng của chúng tôi
            </h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title} 
                title={feature.title}
                icon={feature.icon}
                desc={feature.desc}
              />
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Features