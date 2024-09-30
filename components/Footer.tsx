import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

type FooterColumnProps = {
  title: string;
  children: React.ReactNode
}

const FooterClolumn = ( { title, children } : FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5 '>
      <h4 className='bold-18 whitespace-nowrap'>{ title }</h4>
      {children}
    </div>
  )
}


function Footer() {
  return (
    <footer className='flexCenter mb-24 padding-container max-container'>
      <div className='flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link className='mb-10' href='/'>
            <Image className='' alt='logo' src='/hilink-logo.svg' width={74} height={29}/>
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between mg:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterClolumn title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link) =>(
                    <Link href='/' key={link}>{link}</Link>
                  ))}
                </ul>
              </FooterClolumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterClolumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    className='flex gap-4 md:flex-col lg:flex-row'
                    href='/'
                    key={link.label}
                  >
                    <p className='whitespace-nowrap'>
                      {link.label}:
                    </p>
                    <p className='midium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterClolumn>
            </div>
            <div className='flex flex-col gap-5'>
                <FooterClolumn title={SOCIALS.title}>
                  <ul className='regular-14 flex gap-4 text-gray-30'>
                    {SOCIALS.links.map((link) => (
                      <Link href='/' key={link}>
                        <Image alt='logo' src={link} width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterClolumn>
            </div>
          </div>
        </div>
        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30'>2024 Hilink | Mọi quyền được bảo lưu</p>
      </div>
    </footer>
  )
}

export default Footer
