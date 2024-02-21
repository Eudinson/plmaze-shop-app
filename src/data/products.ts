import apprenticeImg from '../assets/apprentice.jpg';
import masterImg from '../assets/master.jpg';
import miniImg from '../assets/mini.jpg';

type ItemType = {
    id: number | null,
    name: string,
    price: number | null,
    description: string,
    img: string,
    url: string
}

type ProductType = {
    item: ItemType[]
}

export const products: ProductType = {
    item: [
        {
            id: 1,
            name: "Apprentice",
            price: 100,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita reprehenderit animi voluptatum tenetur dolores quam, laborum omnis fugit vero sunt quaerat aut facere id quidem nemo veniam impedit.",
            img: apprenticeImg,
            url: "/product/apprentice"
        },
        {
            id: 2,
            name: "Master",
            price: 150,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita reprehenderit animi voluptatum tenetur dolores quam, laborum omnis fugit vero sunt quaerat aut facere id quidem nemo veniam impedit.",
            img: masterImg,
            url: "/product/master"
        },
        {
            id: 3,
            name: "Mini",
            price: 50,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita reprehenderit animi voluptatum tenetur dolores quam, laborum omnis fugit vero sunt quaerat aut facere id quidem nemo veniam impedit.",
            img: miniImg,
            url: "/product/mini"
        },
        {
            id: 4,
            name: "Master 2",
            price: 70,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita reprehenderit animi voluptatum tenetur dolores quam, laborum omnis fugit vero sunt quaerat aut facere id quidem nemo veniam impedit.",
            img: masterImg,
            url: "/product/master-2"
        },
        {
            id: 5,
            name: "Mini 2",
            price: 650,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis expedita reprehenderit animi voluptatum tenetur dolores quam, laborum omnis fugit vero sunt quaerat aut facere id quidem nemo veniam impedit.",
            img: miniImg,
            url: "/product/mini-2"
        },
    ]
}