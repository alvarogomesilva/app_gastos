import Prisma from "../../prisma";

interface Receive {
    user_id: string;
    description: string;
    value: string;
    type: string;
    date: string;
}

const CreateReceiveService = async ({ user_id, description, value, type, date }: Receive) => {

    if (!user_id) return { messageError: 'User incorrect!' }

    const findUser = await Prisma.user.findFirst({ where: { id: user_id } })

    let valueValor = value.replace(',', '.')
    let valueNumber = Number(valueValor)

    const receive = await Prisma.receive.create({
        data: { description, value: valueNumber, type, date, user_id }
    })
    let balance: number;

    type === 'receita' ? balance = findUser.balance + valueNumber : balance = findUser.balance - valueNumber

    await Prisma.user.update({
        data: { balance },
        where: { id: user_id }
    })

    return receive
}

export default CreateReceiveService;