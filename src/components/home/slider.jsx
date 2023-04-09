import React from 'react'
import Card from './card'
import { Albums } from '../images'
import './home.css'


const Slider = ({ a, b, c, d }) => {
    // Hardcoded stuff which can be easily adapted to APIs
    const albumNames = ["Nightmare", "Best of A7X", "Avenged Sevenfold", "The Stage", "Sehnsucht", "Rammstein", "Reise, Reise!", "Judas Priest", "Sevmişik Həyatı", "Amma Çox Uzaqda"]


    return (
        <div className='HomeSlider flex gap-3 lg:gap-5 mt-4'>
            <Card image={Albums[a]} name={albumNames[a]} author="Nureddin Farzaliyev" />
            <Card image={Albums[b]} name={albumNames[b]} author="Nureddin Farzaliyev" />
            <Card image={Albums[c]} name={albumNames[c]} author="Nureddin Farzaliyev" />
            <Card image={Albums[d]} name={albumNames[d]} author="Nureddin Farzaliyev" />
            <Card image={Albums[b]} name={albumNames[b]} author="Nureddin Farzaliyev" className='lastCard' />
            <Card image={Albums[c]} name={albumNames[c]} author="Nureddin Farzaliyev" className='lastCard' />
        </div>
    )
}

export default Slider