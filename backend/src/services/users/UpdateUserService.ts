import Prisma from "../../prisma";

interface User {
    user_id: string;
    name: string;
    email: string;
}

const UpdateUserService = async ({ user_id, name, email }: User) => {

    if (!user_id) return { messageError: 'User invalid' }

    const user = await Prisma.user.update({
        where: { id: user_id },
        data: { name, email },
        select: { id: true, name: true, email: true, photo: true, balance: true }
    })

    return user
}

export default UpdateUserService;