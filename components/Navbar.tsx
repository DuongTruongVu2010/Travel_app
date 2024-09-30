import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

function Navbar() {
  return (
    <nav className=" padding-container max-container relative z-30 flexBetween py-5 ">
        <Link href='/'>
          <Image className="" alt="logo" src='/hilink-logo.svg' width={74} height={24}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Đăng nhập"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          className="inline-block cursor-pointer lg:hidden"
          alt="menu"
          src="menu.svg"
          height={32}
          width={32}
          
        />
    </nav>
  )
}

export default Navbar
