import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { isAutenticated } from './middlewares/isAutenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductController';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Routes User
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutenticated, new DetailsUserController().handle)

// Routes Category
router.post('/category', isAutenticated, new CreateCategoryController().handle)
router.get('/category', isAutenticated, new ListCategoryController().handle)

// Router Product

router.post('/product', isAutenticated, upload.single('file'), new CreateProductController().handle)
router.get('/product', isAutenticated, new ListProductController().handle)

export { router };