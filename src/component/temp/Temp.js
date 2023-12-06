import { useAtom } from 'jotai'
import React, { memo, useEffect, useMemo } from 'react'
import { priceAtom } from '../../static/jotai/Jotai'

const InfoBox = memo(({ item }) => {
    console.log('ok item:', item.name);
    return <div>{item.id} {item.name}</div>
})

export default function Temp() {
    const [priceA, setpriceA] = useAtom(priceAtom)

    const changeName = () => {
        setpriceA((prev) => {
            const updatePriceA = {
                ...prev,
                'ash': {
                    ...prev['ash'],
                    name: 'ashish'
                }
            }
            return updatePriceA
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
