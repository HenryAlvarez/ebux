import React from 'react'
import { Icons } from '../../elements/Icons';
import './cards.scss';
import Fade from 'react-reveal/Fade';

const Card = ({ title, desc, icon, className }) => {
    return (
        <div className='col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <Fade bottom>
                <div className={`card ${className && className}`}>
                    <div className='contentIcon'>
                        <Icons className='icon' icon={icon} />
                    </div>
                    <h3>{title}</h3>
                    <div className='line'></div>
                    <p>{desc}</p>
                </div>
            </Fade>
        </div>
    )
}

export default Card
