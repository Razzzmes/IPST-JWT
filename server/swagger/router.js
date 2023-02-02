/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: JWT авторизация
 * /registration:
 *   post:
 *     summary: Cоздание нового профиля
 *     tags: [Authorization]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mironov
 *               surname:
 *                 type: string
 *                 example: MironovMironov
 *               middlename:
 *                 type: string
 *                 example: ''
 *               email:
 *                 type: string
 *                 example: miron_706@vk.com
 *               username:
 *                 type: string
 *                 example: miron_70
 *               password:
 *                 type: string
 *                 example: Miron_70
 *     responses:
 *       200:
 *         description: Пользователь зарегистрирован.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc1MzY0OTgzfQ.bPy6ywnEbO3boL8llUMLHPD9G4cmWCjO-0rXimuNb-E
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc3OTU1MTgzfQ.ctaK2s-bcPjiW0_vYE7fTNrNGAZbh76Enu2izloFMgs
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: miron_70@vk.com
 *                     id:
 *                       type: string
 *                       example: 63d9e9c3f0675f85fcff8093
 *                     isActivated:
 *                       type: string
 *                       example: false
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 *
 * /login:
 *   post:
 *     summary: Вход
 *     tags: [Authorization]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: miron_70@vk.com
 *               password:
 *                 type: string
 *                 example: Miron_70
 *     responses:
 *       200:
 *         description: Пользователь успешно вошел.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc1MzY0OTgzfQ.bPy6ywnEbO3boL8llUMLHPD9G4cmWCjO-0rXimuNb-E
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc3OTU1MTgzfQ.ctaK2s-bcPjiW0_vYE7fTNrNGAZbh76Enu2izloFMgs
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: miron_70@vk.com
 *                     id:
 *                       type: string
 *                       example: 63d9e9c3f0675f85fcff8093
 *                     isActivated:
 *                       type: string
 *                       example: false
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 * /logout:
 *   post:
 *     summary: Выход
 *     tags: [Authorization]
 *     responses:
 *       200:
 *         description: Пользователь успешно вышел.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   example: true
 *                 deletedCount:
 *                   type: int
 *                   example: 1
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 * 
 * /changepassword:
 *   post:
 *     summary: Смена пароля
 *     description: Для изменения пароль пользователь должен быть авторизован.
 *     tags: [Authorization]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: miron_70@vk.com
 *               password:
 *                 type: string
 *                 example: Miron_760
 *     responses:
 *       200:
 *         description: Пароль изменен.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Пароль успешно изменен
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 * 
 * 
 * /users:
 *   get:
 *     summary: Просмотр всех аккаунтов
 *     description: метод get users выведет всех имеющихся пользователей из бд пользователь должен быть авторизован.
 *     tags: [Authorization]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSchema'
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 * 
 * /refresh:
 *   get:
 *     summary: Обновление токена
 *     description: Обновление токена.
 *     tags: [Authorization]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc1MzY0OTgzfQ.bPy6ywnEbO3boL8llUMLHPD9G4cmWCjO-0rXimuNb-E
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcm9uXzcwQHZrLmNvbSIsImlkIjoiNjNkOWU5YzNmMDY3NWY4NWZjZmY4MDkzIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY3NTM2MzE4MywiZXhwIjoxNjc3OTU1MTgzfQ.ctaK2s-bcPjiW0_vYE7fTNrNGAZbh76Enu2izloFMgs
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: miron_70@vk.com
 *                     id:
 *                       type: string
 *                       example: 63d9e9c3f0675f85fcff8093
 *                     isActivated:
 *                       type: string
 *                       example: false
 *       400:
 *         description: ошибка неверного запроса
 *       500:
 *         description: ошибка сервера
 * 
 */