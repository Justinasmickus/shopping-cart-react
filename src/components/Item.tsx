import React from 'react'

//types
import { CartItemType } from '../App'


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <div className='flex flex-col h-full gap-2 m-auto
         p-2 w-full text-center  border-1 rounded-[20px] 
         border-blue-200 shadow-md '>
            <img className='max-h-[250px] object-contain'
                src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                {/* <p>{item.description}</p> */}
                <h3>${item.price}</h3>
            </div>
            <button className='mt-auto mx-auto w-48 rounded-[20px] p-2
             bg-green-700 text-white border-2 hover:bg-green-800 hover:shadow-sm duration-200' onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
    )
}

export default Item