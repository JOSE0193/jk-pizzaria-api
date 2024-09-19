import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController {
    
    async handle(req: Request, res: Response) {
        const productsService = new ListProductService();
        const products = await productsService.execute();

        return res.json(products);
    }

}

export { ListProductController }