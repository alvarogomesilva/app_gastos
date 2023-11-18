import Prisma from "../../prisma";

interface User {
    user_id: string;
    date: string;
}

const ListUserBalanceService = async ({ user_id, date }: User) => {
    
    if (!user_id) return { messageError: 'User invalid!' }

    const dashboard = []

    const findUser = await Prisma.user.findFirst({
        where: { id: user_id },
        select: { balance: true }
    })

    const balancePositive = await Prisma.receive.findMany({
        where: { user_id, date: date, type: 'receita' },
        select: { value: true }
    })

    let saldoPositivoTotal = balancePositive.reduce((total, num) => total + num.value, 0)
    
    const balanceNegative = await Prisma.receive.findMany({
        where: { user_id, date: date, type: 'despesa' },
        select: { value: true }
    })

    let saldoNegativototal = balanceNegative.reduce((total, num) => total + num.value, 0)

    dashboard.push(findUser.balance, saldoPositivoTotal, saldoNegativototal)

    return dashboard;
}

export default ListUserBalanceService;