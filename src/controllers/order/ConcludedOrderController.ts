import { Request, Response } from "express";
import { ConcludedOrderService } from "../../services/order/ConcludedOrderService";

class ConcludedOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;
        const orderService = new ConcludedOrderService();
        const orderConcluded = await orderService.execute({
            order_id
        });

        return res.json(orderConcluded);
    }
}

export { ConcludedOrderController }