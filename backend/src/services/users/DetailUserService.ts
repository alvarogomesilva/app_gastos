import Prisma from "../../prisma";

const DetailUserService = async ({ user_id }: { user_id: string }) => {

    if (!user_id) return { messageError: 'Invalid user' }

    const user = await Prisma.user.findFirst({
        where: { id: user_id },
        select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            balance: true,
            created_at: true,
            updated_at: true,
        }
    })

    if (!user || user === null) return { messageError: 'Invalid user' }

    return user

}

export default DetailUserService;