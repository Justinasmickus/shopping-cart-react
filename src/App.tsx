import { useState } from "react";
import { useQuery } from "react-query";

// components
import Item from './components/Item'

//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;



  return (
    <div className="grid p-6 justify-items-start  content-start sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full gap-4">
      {data?.map((item) => (
        <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default App;
