import Image from 'next/image'

function Guide() {
  return (
    <section className='flexCenter flex-col max-container padding-container'>
      <div className='w-full pb-24'>
        <Image className="" alt=' camp' src="/camp.svg" width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          Chúng tôi ở đây vì bạn
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Dẫn Dắt Bạn Đến Con Đường dễ dàng</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Chỉ với ứng dụng hilink bạn sẽ không còn bị lạc nữa, vì chúng tôi đã hỗ trợ bản đồ ngoại tuyến khi tại hiện trường không có kết nối internet. Mời bạn bè, người thân, bạn bè vui chơi trong vùng hoang dã xuyên qua thung lũng và lên tới đỉnh núi</p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full '>
        <Image className='w-full object-cover object-center xl:rounded-5xl' alt='boat' src="/boat.png" width={1440} height={580}/>
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image className='h-full w-auto' alt='meter' src="meter.svg" width={16} height={158} />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full '>
                <p className='regular-16 text-gray-20'>Điểm đến</p>
                <p className='bold-16 text-green-50'>45 phút</p>
              </div>
              <p className='bold-20 mt-2'>Hồ Long Thủy</p>
            </div>
            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Theo Dỗi Hành Trình</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Đập Tràn</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
