const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration',
	body('name').isLength({min:2, max:255}),
	body('surname').isLength({min:2, max:255}),
	body('middlename').isLength({min:2, max:255}).optional({nullable: true, checkFalsy: true}),
	body('email').isEmail(),
	body('username').isLength({min:2, max:15}).optional({nullable: true, checkFalsy: true}),
	body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,),
 	userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.post('/changepassword', authMiddleware, userController.changepassword);

module.exports = router