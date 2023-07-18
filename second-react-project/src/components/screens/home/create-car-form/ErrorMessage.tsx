import styles from './CreateCarFrom.module.css'
import { Dispatch,FC, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useState } from "react";

const ErrorMessage:FC<{error?: string}> = ({error}) => {
    if(!error) return null
    return (
        error && 
            <p className={styles.error}>
                Value is required
                </p>
    )
}

export default ErrorMessage