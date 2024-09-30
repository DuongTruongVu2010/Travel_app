import Button from './Button'
import Image from 'next/image'

function GetApp() {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col justify-center items-start gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Tải Miễn phí ngây bây giờ!</h2>
          <p className='regular-16 text-gray-10 '>Đã có trên IOS và android, tải ngay nhé!</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row '>
            <Button type='button' title='App Store' icon='/apple.svg' variant='btn_white' />
            <Button type='button' title='CH Play' icon='/android.svg' variant='btn_dark_green_outline' />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image className='' alt='phones' src="/phones.png" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp