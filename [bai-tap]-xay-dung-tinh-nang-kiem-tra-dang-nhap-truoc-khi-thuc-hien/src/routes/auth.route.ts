import {Router} from 'express';
const router = Router();
export default router;
import controller from '../controllers/auth.controller';
import requireAuth from "../middleware/auth.middleware"

router.use(requireAuth)
router.get('/', controller.index);
router.get('/login', controller.login);

router.post("/login", controller.postLogin);



