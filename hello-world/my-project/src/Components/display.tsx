import React from 'react'

function Display(){
    const dis = alert( "Hello world");
    return(
       <div className="text-center">
        <button className=" bg-red-700 border-r-4 shadow-md  hover:bg-violet-600 font-bold rounded-md p-2 m-7" onClick={(Display)}>click me</button>
        </div>
    )
}
export default Display;