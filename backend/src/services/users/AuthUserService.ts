import { compareSync } from "bcryptjs";
import Prisma from "../../prisma";
import { sign } from "jsonwebtoken";

interface User {
    email: string;
    password: string;
}

const AuthUserService = async ({ email, password }: User) => {

    if (!email || email === '' || !password || password == '') return { messageError: 'Email/Password incorrect!' }

    const user = await Prisma.user.findFirst({
        where: { email: email }
    })

    if (!user) return { messageError: 'Email/Password incorrect!' }

    const passwordMatch = compareSync(password, user.password)

    if (!passwordMatch) return { messageError: 'Email/Password incorrect!' }

    const token = sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, {
        subject: user.id,
        expiresIn: '30d'
    })

    return{ id: user.id, name: user.name, token: token, photo: user.photo, balance: user.balance }
}

export default AuthUserService;