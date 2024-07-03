import React from "react";
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutLineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'
import BookSingleCard from "./BookSingleCard";


const BooksCard = () => {
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => {
                <BookSingleCard key={item._id} book={item}/>
            })}
        </div>
    )
}

export default BooksCard