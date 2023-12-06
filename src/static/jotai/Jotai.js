import { atom } from 'jotai'

const priceAtom = atom({
    'ash': {
        id: 1,
        name: 'ash',
    },
    'abb': {
        id: 2,
        name: 'abb',
    },
    'pro': {
        id: 3,
        name: 'pro',
    },

})
export { priceAtom }