import React from 'react'

const Card = ({ objInfo }) => {

    console.log(objInfo)

    return (
        <div className="contenedor2">
            <h2><strong>{objInfo.title}</strong></h2>
            <ul className='list'>
                <li className='list__items'>{objInfo.list[0]}</li>
                <li className='list__items'>{objInfo.list[1]}</li>
                <li className='list__items'>{objInfo.list[2]}</li>
                <li className='list__items'>{objInfo.list[3]}</li>
            </ul>
        </div>
    )
}

export default Card