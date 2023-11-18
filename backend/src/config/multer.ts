import multer from 'multer';

// const storageConfig = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads')
//     },
//     filename:(req, file, cb) => {
//         let randomName = Math.floor(Math.random() * 999999999)
//         const extension = file.mimetype.substring(6)
//         console.log(extension)
//         cb(null, `${randomName+Date.now()}.${extension}`)
//     },
// })

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpeg', 'image/jpg', 'image/png']
        cb(null, allowed.includes(file.mimetype))
    },
})

export default upload