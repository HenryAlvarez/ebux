import React from 'react'
import './coverHome.scss';
import { Logo } from '../logo/Logo'
import CoverImg from '../../assets/svg/coverEbux.svg'
import Zoom from 'react-reveal/Zoom';

const CoverHome = () => {
    return (
        <div className='cover-home'>
            <div className='content'>
                <Logo />
                <img className='coverIlustration' src={CoverImg} alt='Ebux Ilustration'/>
                <Zoom left>
                <p className='text-cover'>Transforma la Experiencia
                de Usuario de sitios y
                aplicaciones.
                </p>
                </Zoom>
            </div>
        </div>
    )
}

export default CoverHome
