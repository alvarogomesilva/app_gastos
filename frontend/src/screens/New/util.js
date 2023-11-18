import api from "../../services/api";
import { format } from 'date-fns';
export const saveReceive = async (setLoading, user, description, value, type, date) => {
    setLoading(true)
    try {
        let user_id = user.id
        const dateFormat = format(date, 'dd/MM/yyyy')
        await api.post('/receive', { user_id, description, value, type, date: dateFormat })
    } catch (error) {
        console.log(error)
    }
    finally {
        setLoading(false)
    }
} 