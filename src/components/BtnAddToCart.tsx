import { Button } from "@mui/material";

type ItemType = {
    id: number | null,
    name: string,
    price: number | null,
    description: string,
    img: string,
    url: string
}

const BtnAddToCart = (_props: ItemType) => {

    const handleClick = () => {

    }

    return (
        <Button
            variant="outlined"
            sx={{ width: "300px" }}
            onClick={handleClick}
        >
            Add to cart
        </Button>
    );
}

export default BtnAddToCart;