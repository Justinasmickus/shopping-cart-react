
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = ({ ...props }) => {
    type Props = {
        getTotalItems: number;
        onClick: () => void
    }

    return (


        <div className='block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
            <button {...props}>
                <AiOutlineShoppingCart size={50} className='fixed top-2 right-2 ' />
                <span className="fixed right-3 top-3 rounded-full  bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
                </span>
            </button>

        </div>

    )
}

export default CartButton