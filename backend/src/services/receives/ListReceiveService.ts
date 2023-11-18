import Prisma from "../../prisma";

interface Receive {
    user_id: string;
    date: string;
}

const ListReceiveService = async ({ user_id, date }: Receive) => {
    if (!user_id) return { messageError: 'User incorrect!' }

    const receive = await Prisma.receive.findMany({
        where: { user_id, date },
        orderBy: { created_at: 'desc' }
    })

    return receive

}

export default ListReceiveService