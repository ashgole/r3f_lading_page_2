import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { priceAtom } from '../../static/jotai/Jotai'

const InfoBox = ({ item }) => {
    return <div>{item.id} {item.name}</div>
}

export default function Temp() {
    const [priceA, setpriceA] = useAtom(priceAtom)

    const changeName = () => {
        setpriceA((prev) => {
            console.log('ok :', prev);
            prev['ash'] = {
                ...prev['ash'],
                name: 'ashish'
            };
            return prev
        })
    }

    return <>
        <button onClick={changeName} >Click to update</button>
        {
            Object.values(priceA).map((item, index) => {
                return <InfoBox key={index} item={item} />
            })}
    </>

}
