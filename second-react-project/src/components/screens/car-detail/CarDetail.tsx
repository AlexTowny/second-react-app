import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../../providers/AuthProvider"
import { withAuth } from "../../../HOC/withAuth"

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})

    console.log(id)

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)
            console.log(data)
            setCar(data)
        }

        fetchData()

    }, [id])

    if (!car?.name) return <p>Loading...</p>

   

   
    return <div>
        <Link to='/'>Back</Link>
        <CarItem car={car}/>
        </div>
}


export default withAuth( CarDetail)