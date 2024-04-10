
import { useAppSelector } from '../redux/store';
import React from 'react'
import AddInventory from './addInventory';



type ModalKeys = keyof typeof Modals;


const Modals = {
addInventory:AddInventory
}


const ShowAllModals = () => {

    const show = useAppSelector(state => state.utils.show)

    if (show !== null) {

        const CurrentModal:React.FC = Modals[show as ModalKeys]

        if (CurrentModal) {
            return <CurrentModal/>
        } else {
            return null;
        }
    }


    return null;
}

export default ShowAllModals