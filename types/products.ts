export interface Product {
    productName: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    inventory: number;
    reviews: boolean;
    _id: string;
    name: string;
    _type: string;
    image? : {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    description?: string;
    slug : {
        _type : "slug";
        current : string;
    };
    stockLevel : number
}