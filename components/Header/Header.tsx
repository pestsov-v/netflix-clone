import React from "react";
import {ImSearch} from '@react-icons/all-files/im/ImSearch'
import {BellIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export const Header = (): JSX.Element => {
    const categories = ["Home", "TV shows", "Movies", "New & Popular", "My List"]

    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${isScrolled && "bg-[#141414]"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img alt=''
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className='hidden space-x-4 md:flex'>
                    {categories.map((category, i) =>
                        <li className="headerLink" key={`${category + i}`}>{category}</li>
                    )}
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <ImSearch className="hidden sm:inline h-6 w-6" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon  className="h-6 w-6" />
                <Link href="/account">
                    <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded"/>
                </Link>
            </div>
        </header>
    )
}