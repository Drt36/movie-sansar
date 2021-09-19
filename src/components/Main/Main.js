import React from 'react'
import Genre from './Genre'

const Main = () => {
    return (
        <div>
            <Genre movies={{genre:'Action',limit:10}} />
            <Genre movies={{genre:'Crime',limit:10}} />
            <Genre movies={{genre:'Drama',limit:10}} />
            <Genre movies={{genre:'Thriller',limit:10}} />
        </div>
    )
}

export default Main
