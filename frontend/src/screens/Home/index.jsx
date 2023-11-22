import { styles } from './styles';
import { useContext, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';

import currencyFormat from '../../utils/currencyFormat';
import Photo from '../../components/Photo';
import useBalance from '../../hooks/useBalance';
import useMoviment from '../../hooks/useMoviment';
import Moviments from '../../components/Moviments';
import api from '../../services/api';
import pt from 'date-fns/locale/pt';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Home() {

    const { user } = useContext(AuthContext)
    const [dateNow, setDateNow] = useState(new Date())
    
    
    const [selectedDate, setSelectedDate] = useState(dateNow);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    
    const dateFormated = format(dateNow, 'dd/MM/yyyy')
    const { balance } = useBalance(dateFormated, dateNow)
    const { moviments, loading } = useMoviment(dateFormated, dateNow)

    const formattedDate = format(dateNow, 'PPPP', { locale: pt })

    const delteteReceive = async (id) => {
        try {
            await api.delete('/receive', {
                params: { id_receive: id }
            })
            setDateNow(new Date())
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        Alert.alert('Deseja realmente exluir?', undefined, [
            {
                text: 'Sim',
                onPress: () => delteteReceive(id)
            },
            {
                text: 'Não',

            }
        ]
        )

    }

    const showDatePicker = () => setDatePickerVisible(true)
    const hideDatePicker = () => setDatePickerVisible(false)

    const handleConfirm = (date) => {
        setDateNow(date)
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.top} colors={['#009688', '#00897b', '#00796b']}>

                <Photo
                    photo={`http://192.168.0.70:3000/files/${user.photo}`}
                    user={user}
                />

                <Text style={styles.value}>{currencyFormat(balance[0])}</Text>
            </LinearGradient>

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


                <TouchableOpacity 
                    style={styles.calendar} 
                    onPress={showDatePicker}
                    activeOpacity={0.7}
                >
                    <View style={styles.calendarBox}>
                        <Entypo name="calendar" size={25} color="black" />
                        <Text>Movimentações</Text>
                    </View>
                    <Text>{formattedDate}</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                        date={selectedDate}
                        isVisible={datePickerVisible}
                        mode="date"
                        display="inline"
                        locale="pt-BR"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                />


                <Moviments data={moviments} loading={loading} deleteItem={handleDelete} />

            </View>
        </View>
    )
}
