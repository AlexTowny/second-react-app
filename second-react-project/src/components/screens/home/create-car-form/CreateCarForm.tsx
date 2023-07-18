import { useState } from 'react'
import {useForm} from 'react-hook-form'
import styles from './CreateCarFrom.module.css'
import ErrorMessage from './ErrorMessage'
import { useCreateCar } from './useCreateCar'
import { ICarData } from '../../../../types/car.interface'

const clearData = {
    price: '',
    name:'',
    image: '',
}

const CreateCarForm = () =>{
const [data, setData] = useState(clearData)

const {register, reset, handleSubmit, formState:{errors}} = useForm<ICarData>({
    mode: 'onChange',
})

    const {createCar} = useCreateCar(reset)
    

    return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input 
        {...register('name', {required: 'Name is required'})}
        placeholder="Name"
            />
        <ErrorMessage error = {errors?.name?.message}/>

        <input placeholder="Price"
       {...register('price', {required: 'Price is required'})}
            />
        <ErrorMessage error = {errors?.price?.message}/>
        <input placeholder="Image"
 {...register('image', {required: 'Image is required'})}
        />
        <ErrorMessage error = {errors?.image?.message}/>
        <button className='btn' >Create</button>
    </form>)
}

export default CreateCarForm