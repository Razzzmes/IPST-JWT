/**
 * @swagger
 * components:
 *   schemas:
 *     UserSchema:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - middlename
 *         - email
 *         - username
 *         - password
 *         - isActivated
 *         - activationLink
 *       properties:
 *         id:
 *           type: string
 *           description: Уникальный id пользователя
 *         name:
 *           type: string
 *           require: true
 *           description: Имя, обязательное, от 2 до 255 символов 
 *         surname:
 *           type: string
 *           require: true
 *           description: Фамилия, обязательное, от 2 до 255 символов 
 *         middlename:
 *           type: string
 *           description: Отчество, необязательное, от 2 до 255 символов 
 *         email:
 *           type: string
 *           unique: true
 *           require: true
 *           description: Почта, должна соотвествовать email формату, от 2 до 255 символов 
 *         username:
 *           type: string
 *           description: Ник, необязательный, от 2 до 15 символов 
 *         password:
 *           type: string
 *           require: true
 *           description: Пароль, должен содержать латинские символы (ОБЯЗАТЕЛЬНО ОДНИ СИМВОЛ ЗАГЛАВНЫЙ), цифры и один спецсимвол
 *         isActivated:
 *           type: boolean
 *           default: false
 *           description: Подтверждена ли почта или нет true false
 *         activationLink:
 *           type: string
 *           description: в activationLink хранится ссылка для активации
 *       example:
 *         id: 63d703241675fbc6c5bf8431
 *         name: admin
 *         surname: adminadmin
 *         middlename: adminadminadmin
 *         email: pasha.mironov.2004@bk.ru
 *         username: Admin
 *         password: $2b$04$MFSg76aZ1bz3H1dO5JJzQ.nzBvIBwOL98ZDpzaufBJTQPqCoTOw6O
 *         isActivated: true
 *         activationLink: 48bd51fa-4aa8-4f27-8bfa-c7a98ac32c82
 * 
 *     TokenSchema:
 *       type: object
 *       required:
 *         - user
 *         - refreshToken
 *       properties:
 *         id:
 *           type: string
 *           description: Уникальный id
 *         user:
 *           type: ObjectId
 *           description: id профиля
 *         refreshToken:
 *           type: string
 *           require: true
 *           description: сам refreshToken
 *       example:
 *         id: 63dae2475dd1d2e35c354708
 *         user: 63d9e9c3f0675f85fcff8093
 *         refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJpYXQiOjE2NzUyODkxNTksImV4cCI6MTY3Nzg4MTE1OX0.tcIF5KUWUHiKXYFtoLCwd85u1VIDcxhhb1V9BGeMDzA
 * 
 * 
 * 
 */