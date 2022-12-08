import React from "react";
import {ImSearch} from '@react-icons/all-files/im/ImSearch'

export const Header = (): JSX.Element => {
    const categories = ["Home", "TV shows", "Movies", "New & Popular", "My List"]

    return (
        <header>
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
            <div>
                <ImSearch className="hidden sm:inline h-6 w-6" />
            </div>
        </header>
    )
}