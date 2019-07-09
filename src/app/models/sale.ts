export class Sale{
    constructor(
        public id:number,
        public product_id: number,
        public user_id: number,
        public total: number,
        public descuento: number
    ){}
}