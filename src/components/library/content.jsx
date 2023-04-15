import React from 'react'
import { Albums } from '../images'
import Card from '../home/card'
import Bigcard from './big-card'

const Content = () => {
    const albumNames = ["Nightmare", "Best of A7X", "Avenged Sevenfold", "The Stage", "Sehnsucht", "Rammstein", "Reise, Reise!", "Judas Priest", "Sevmişik Həyatı", "Amma Çox Uzaqda"]

    const Firstcolumn = () => {
        return (
            <div className='flex gap-8 mt-10'>
                <Bigcard />
                <Card image={Albums[1]} name={albumNames[1]} author="Nureddin Farzaliyev" />
                <Card image={Albums[3]} name={albumNames[3]} author="Nureddin Farzaliyev" />
                <Card image={Albums[5]} name={albumNames[5]} author="Nureddin Farzaliyev" />
            </div>
        )
    }

    const Column = ({ a, b, c, d, e }) => {
        return (
            <div className='flex gap-8 mt-10'>
                <Card image={Albums[a]} name={albumNames[a]} author="Nureddin Farzaliyev" />
                <Card image={Albums[b]} name={albumNames[b]} author="Nureddin Farzaliyev" />
                <Card image={Albums[c]} name={albumNames[c]} author="Nureddin Farzaliyev" />
                <Card image={Albums[d]} name={albumNames[d]} author="Nureddin Farzaliyev" />
                <Card image={Albums[e]} name={albumNames[e]} author="Nureddin Farzaliyev" />
            </div>
        )
    }


    return (
        <div>
            <h1 className='text-white font-font-black text-2xl'>Playlists</h1>
            <Firstcolumn />
            <Column a={1} b={0} c={2} d={4} e={8} />
            <Column a={2} b={4} c={3} d={1} e={7} />
            <Column a={4} b={1} c={7} d={0} e={6} />
            <Column a={6} b={5} c={8} d={2} e={1} />
        </div>
    )
}

export default Content