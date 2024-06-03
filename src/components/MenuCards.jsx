import {Link} from "react-router-dom";
import MenuCard from "./MenuCard";
import Container from "../ui/Container";

export default function MenuCards() {
    const dishes = [
        {
            path: "#",
            name: "Greek Salad",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "$12.99",
            image: "/assets/images/dish-greek-salad.webp",
        },
        {
            path: "#",
            name: "Bruschetta",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
            price: "$7.99",
            image: "/assets/images/dish-bruschetta.webp",
        },
        {
            path: "#",
            name: "Grilled Fish",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
            price: "$20.00",
            image: "/assets/images/dish-grilled-fish.webp",
        },
        {
            path: "#",
            name: "Pasta",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
            price: "$18.99",
            image: "/assets/images/dish-pasta.webp",
        },
        {
            path: "#",
            name: "Lemon Dessert",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae..",
            price: "$6.99",
            image: "/assets/images/dish-lemon-dessert.webp",
        },
    ]

    return (
        <Container>
            <ul className="p-4 grid md:grid-cols-3 md:gap-6">
                {dishes.map(({path, name, desc, price, image}) => (
                        <li key={name} className="md:bg-brand-lightgray rounded-2xl">
                            <Link to={path}>
                                <MenuCard name={name} desc={desc} price={price} image={image}/>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </Container>
    )
}
