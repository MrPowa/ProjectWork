export interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    width: string;
    height: string;
}

export const mockProducts: Product[] = [
   
    {
        id: "1",
        name: "Product 1",
        image: require ("../assets/img/Vino-rosso.png"),
        price: "9,99€",
        description: "the wine ever",
        width: "220",
        height: "230",
    },

    {
        id: "2",
        name: "Product 2",
        image: require ("../assets/img/vino-bianco.jpg"),
        price: "9,99€",
        description: "the wine ever",
        width: "180",
        height: "230",
    },

    {
        id: "3",
        name: "Product 4",
        image: require ("../assets/img/vino-rosato.jpg"),
        price: "9,99€",
        description: "the wine ever",
        width: "200",
        height: "230",
    }

];
