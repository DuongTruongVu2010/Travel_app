import Image from 'next/image'
import Button from './Button'

function Hero() {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row'>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col lg:w-1/2'>
        <Image className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' alt='camp' src='/camp.svg' width={50} height={50}/>
        <h1 className='bold-52 lg:bold-88'>Khu cắm trại Langbiang </h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Chúng tôi muốn có mặt trên mỗi hành trình của bạn để tìm kiếm sự hài lòng khi nhìn thấy vẻ đẹp không thể chối cãi của thiên nhiên. Chúng tôi có thể giúp bạn thực hiện chuyến phiêu lưu vòng quanh thế giới chỉ trong một ứng dụng</p>
        <div className='my-11 flex flex-wrap gap-5'> 
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image className='' key={index} alt='star' src="/star.svg" width={24} height={24} />
            ))}

          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            12N
            <span className='regular-16 lg:regular-20 ml-1'> Đánh giá 5 sao</span>
          </p>
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button 
            type='button' 
            title='Tải Ứng Dụng' 
            variant='btn_green'
          />
          <Button 
            type='button' 
            title='Cách chúng ta làm việc'
            icon='/play.svg' 
            variant='btn_white_text'
          />
        </div>
      </div>
      <div className='relative flex flex-1 items-start'>
        <div className='relative flex z-20 w-[260px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col '>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20 '>Vị trí</p>
              <Image className='' alt='close' src='/close.svg' width={24} height={24} />
            </div>
            <p className='bold-20 text-white'>Đà Lạt</p>
          </div>
          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20 block'>Khoảng cách</p>
              <p className='bold-20 text-white'>134km</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20 block'>Độ cao</p>
              <p className='bold-20 text-white'>1.050 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

