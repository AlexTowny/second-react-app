import CarItem from "../screens/home/car-item/CarItem"
import { Dispatch,FC, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { ICar } from "../../types/car.interface";

interface ICarCatalog {
    data?: ICar[] | undefined
}

const CarCatalog: FC<ICarCatalog> = ({data=[]}) => {
    return (<div>
        {data.length ? data.map(
            car=>( 
            <CarItem key={car.id} car={car} />
        )): <p>There are no cars</p>}
        
    </div>)
}

export default CarCatalog