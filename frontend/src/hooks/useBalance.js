import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';

import api from "../services/api";

export default function useBalance(date, dateNow) {
    const [balance, setBalance] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        
        async function getBalance() {
            try {
                const response = await api.get('/balance', {
                    params: { date }
                })
                if (isFocused) setBalance(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getBalance()

    }, [isFocused, dateNow])

    return { balance }
}