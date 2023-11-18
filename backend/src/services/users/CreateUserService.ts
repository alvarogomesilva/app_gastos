import { hashSync } from "bcryptjs";
import Prisma from "../../prisma";

interface User {
    name: string;
    email: string;
    photo: string;
    password: string;
    balance: number;
}

const CreateUserService = async ({ name, email, photo, password, balance }: User) => {

    if (!name || name === '') return { messageError: 'Name is required!' }
    if (!email || email === '') return { messageError: 'Email is required!' }
    if (!password || password === '') return { messageError: 'Password is required!' }

    const userAlredyExists = await Prisma.user.findFirst({
        where: { email: email }
    })

    if (userAlredyExists) return { messageError: 'User alredy exists!' }

    const passwordHash = hashSync(password, 8)

    let initialBalance = 0
    const user = await Prisma.user.create({
        data: { name, email, photo, password: passwordHash, balance: initialBalance },
        select: { id: true, name: true, photo: true, balance: true }
    })

    return user 
}

export default CreateUserService;