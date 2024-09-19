import prismaClient from "../../prisma"

class ListProductService{
    async execute () {
        const products = await prismaClient.product.findMany({
            select: {
                id: true, 
                description: true, 
                price: true,
                category_id: true, 
                banner: true       
            }
        });
        return products;
    }
}

export { ListProductService }