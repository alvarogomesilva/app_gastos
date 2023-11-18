import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import api from "../services/api";

export default function useMoviment(date, dateNow) {
    const [moviments, setMoviments] = useState([])
    const isFocused = useIsFocused()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        //let isActive = true
        async function getMoviments() {
            setLoading(true)
            try {
                const response = await api.get('/moviments', {
                    params: { date }
                })
                if (isFocused) setMoviments(response.data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }

        getMoviments()
        //return () => isActive = false
    }, [isFocused, dateNow])

    return { moviments, loading, setMoviments }
}