import { styles } from './styles';
import { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';

import currencyFormat from '../../utils/currencyFormat';
import Photo from '../../components/Photo';
import useBalance from '../../hooks/useBalance';
import useMoviment from '../../hooks/useMoviment';
import Moviments from '../../components/Moviments';
import api from '../../services/api';

export default function Home() {

    const { user } = useContext(AuthContext)
    const [dateNow, setDateNow] = useState(new Date())
    const dateFormated = format(dateNow, 'dd/MM/yyyy')

    const { balance } = useBalance(dateFormated, dateNow)
    const { moviments, loading } = useMoviment(dateFormated, dateNow)



    const handleDelete = async (id) => {
        try {
            await api.delete('/receive', {
                params: { id_receive: id }
            })
            setDateNow(new Date())
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.top}>

                <Photo
                    photo={`http://192.168.0.70:3000/files/${user.photo}`}
                />

                <Text style={styles.value}>{currencyFormat(balance[0])}</Text>

            </View>
            <View style={styles.bottom}>
                <View style={styles.cards}>
                    <View style={styles.card}>

                        <View style={styles.cardText}>
                            <Feather name="arrow-up" size={25} color="green" />
                            <Text>Entradas de hoje</Text>
                        </View>


                        <Text style={styles.cardValue}>{currencyFormat(balance[1])}</Text>


                    </View>
                    <View style={styles.card}>

                        <View style={styles.cardText}>
                            <Feather name="arrow-down" size={25} color="red" />
                            <Text>Saidas de hoje</Text>
                        </View>


                        <Text style={styles.cardValue}>{currencyFormat(balance[2])}</Text>

                    </View>
                </View>


                <View style={styles.calendar}>
                    <View style={styles.calendarBox}>
                        <Entypo name="calendar" size={25} color="black" />
                        <Text>Últimas movimentações</Text>
                    </View>
                    <Text>{dateFormated}</Text>
                </View>


                <Moviments data={moviments} loading={loading} deleteItem={handleDelete} />

            </View>
        </View>
    )
}
