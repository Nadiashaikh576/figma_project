export interface Product {
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