import Prisma from "../../prisma";

const DeleteReceiveService = async ({ id_receive }: { id_receive: string }) => {
    if (!id_receive) return { messageError: 'Receive invalid!' }

    const receive = await Prisma.receive.delete({
        where: { id: id_receive }
    })

    return receive
}

export default DeleteReceiveService;