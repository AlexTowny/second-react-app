import styles from './Home.module.css'
import {cars as carsData} from  './cars.data'
import CarItem from './car-item/CarItem'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { CarService } from '../../../services/car.service'
import CreateCarForm from './create-car-form/CreateCarForm.tsx'
import { useNavigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from '../../../providers/AuthProvider'
import {useQuery} from '@tanstack/react-query'
import { useAuth } from '../../../hooks/useAuth'
import CarCatalog from '../../ui/CarCatalog'
import Header from '../../ui/Header'
function Home() {  
    const {data, isLoading, error} = useQuery
    (['cars'], ()=> CarService.getAll(),)

  
   
    if(isLoading) return <p>Loading... please wait</p>
    if(error) return <p>Error!</p>

   
    
    return (
      <div>
        <h1>Cars catalog</h1>
        <Header/>
        <CreateCarForm /> 
        <CarCatalog data={data}/>
      </div>
    )
  }

export default Home
  