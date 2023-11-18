import { resolve } from 'path'
import { unlink } from 'fs/promises';
import Prisma from "../../prisma";

interface User {
    user_id: string;
    photo: string;
}

const AvatarUserService = async ({ user_id, photo }: User) => {

    if (!user_id) return { messageError: 'User incorrect!' }
    if (!photo) return { messageError: 'Avatar invalid!' }

    const avatarAlredyExists = await Prisma.user.findFirst({
        where: { id: user_id },
        select: { photo: true }
    })

    if (avatarAlredyExists.photo !== null) {
        await unlink(resolve(__dirname, '..', '..', '..', 'uploads', avatarAlredyExists.photo))
    }
    const user = await Prisma.user.update({
        where: { id: user_id },
        data: { photo },
        select: { id: true, name: true, email: true, photo: true, balance: true }
    })

    return user

}

export default AvatarUserService;