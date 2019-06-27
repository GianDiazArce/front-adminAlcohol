export class Product {
    constructor(
        public id: number,
        public category_id: number,
        public proveedor_id: number,
        public name: string,
        public stock: number,
        public price_cost: number,
        public price_sale: number,
        public size: string
    ){}
}