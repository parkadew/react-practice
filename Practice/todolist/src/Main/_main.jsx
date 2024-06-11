import React from "react";
import { useNavigate } from "react-router-dom";
const Products = [{
    id: 1,
    category: "rank1",
    name: "상품-1",
    price: 3000
},
{
    id: 2,
    category: "rank2",
    name: "상품-2",
    price: 5000
},
{
    id: 3,
    category: "rank3",
    name: "상품-3",
    price: 5000
},
{
    id: 4,
    category: "rank4",
    name: "상품-4",
    price: 5000
},
]


const Main = function () {
    const navigate = useNavigate()

    const handler = () => { }

    return <div onClick={handler}>
        {
            Products.map((PD) => {
                console.log(1)
                return <div key={PD.id} onClick={() => {
                    navigate(`/todo/${PD.id}?goods=${PD.price}`)
                }}>
                    {PD.name}
                </div>
            })
        }


    </div>
}

export default Main