import React from "react";

const Card = ({ imgSrc, title, category, timeToRead }) => {
    return (
        <div className="box bg-gray-800 w-[30%] m-2 text-white p-2 rounded-md">
            <img src={imgSrc} alt="Image desciption" className="w-full rounded-md"/>
            <p className="mt-2">{title}</p>
            <p>{category}</p>
            <footer className="mt-2">{timeToRead}</footer>
            </div>
    )
}

export default Card