import React from 'react'
import Card from './card'
import { Albums } from '../images'


const Slider = ({ a, b, c, d }) => {
    const albumNames = ["Nightmare", "Best of A7X", "Avenged Sevenfold", "The Stage", "Sehnsucht", "Rammstein", "Reise, Reise!", "Judas Priest", "Sevmişik Həyatı", "Amma Çox Uzaqda"]

    return (
        <div className='flex gap-10 mt-4'>
            <Card image={Albums[a]} name={albumNames[a]} author="Nureddin Farzaliyev" />
            <Card image={Albums[b]} name={albumNames[b]} author="Nureddin Farzaliyev" />
            <Card image={Albums[c]} name={albumNames[c]} author="Nureddin Farzaliyev" />
            <Card image={Albums[d]} name={albumNames[d]} author="Nureddin Farzaliyev" />
        </div>

    )
}

export default Slider