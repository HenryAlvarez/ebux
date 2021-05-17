import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDeaf } from '@fortawesome/free-solid-svg-icons'

export const Icons = ({ icon, className }) => {

    const getIcon = (icon) => {
        switch (icon) {
            case 'coffe':
                return <FontAwesomeIcon className={className} icon={faCoffee} />
            default:
                return <FontAwesomeIcon className={className} icon={faDeaf} />
        }
    }

    return (
        <>
            {getIcon(icon)}
        </>
    )
}
