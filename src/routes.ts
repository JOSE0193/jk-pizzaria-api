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
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailsOrderController } from './controllers/order/DetailsOrderController';
import { ConcludedOrderController } from './controllers/order/ConcludedOrderController';

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
router.get('/category/product', isAutenticated, new ListByCategoryController().handle);

// Router Order
router.post('/order', isAutenticated, new CreateOrderController().handle)
router.delete('/order', isAutenticated, new RemoveOrderController().handle)
router.get('/orders', isAutenticated, new ListOrderController().handle)
router.put('/order', isAutenticated, new ConcludedOrderController().handle)

router.post('/order/item', isAutenticated, new AddItemController().handle)
router.delete('/order/item', isAutenticated, new RemoveItemController().handle)

router.put('/order/send', isAutenticated, new SendOrderController().handle)

router.get('/order/details', isAutenticated, new DetailsOrderController().handle)

export { router };