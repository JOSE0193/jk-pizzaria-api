import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(rec: Request, res: Response){
        const listCategories = new ListCategoryService();

        const category = await listCategories.execute();

        return res.json(category);
    }
}

export {ListCategoryController}