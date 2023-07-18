import React from "react"
import { Dispatch,FC, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useState } from "react";
const Price:FC<{price:string}> = ({price}) =>{

return ( <p>
    {new Intl.NumberFormat(
        'en-US', {
        style: 'currency',
        currency: 'USD',
        
    }
   ).format(+price)}
   </p>)
}

export default React.memo(Price)