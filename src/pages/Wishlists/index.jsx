import { Divider } from '@heroui/react';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';

function Wishlists() {
    const wishlistItems = [
        {
            id: 1,
            name: 'Beanie with Logo',
            image:
                'https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765360178/product5_dtuw99.png',
            price: 20,
            finalPrice: 18,
            date: 'December 5, 2019',
        },

    ];

    return (
        <div className="w-full bg-[#025043] min-h-screen  px-6 lg:px-24 py-24 font-[Expo-arabic] text-white">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                    <span className="">
                        <FavoriteIcon size={48} />
                    </span>
                </div>
                <h1 className="text-4xl font-bold tracking-wide">My Wishlist</h1>
            </div>

            <div className="flex justify-center my-6">
                <div className="w-100 h-px bg-white/70"></div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-sm text-white">
                            <th className="text-left py-4">Product name</th>
                            <th className="text-left py-4">Unit price</th>
                            <th className="text-right py-4"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {wishlistItems.map((item) => (
                            <tr key={item.id} className="border-b last:border-none">
                                {/* Product */}
                                <td className="py-6">
                                    <div className="flex items-center gap-4">
                                        <button
                                            title="Remove from wishlist"
                                            className="text-white/50 hover:text-red-400 transition text-sm"
                                        >
                                            ✕
                                        </button>

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-20 object-cover"
                                        />

                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="py-6">
                                    {item.finalPrice ? (
                                        <div className="flex gap-2 items-center">
                                            <span className="line-through text-gray-400">
                                                ${item.price.toFixed(2)}
                                            </span>
                                            <span className="text-[#E2995E] font-semibold">
                                                ${item.finalPrice.toFixed(2)}
                                            </span>
                                        </div>
                                    ) : (
                                        <span>${item.price.toFixed(2)}</span>
                                    )}
                                </td>

                                {/* Action */}
                                <td className="py-6 text-right">
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-xs text-gray-400">
                                            Added on: {item.date}
                                        </span>

                                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
                                            Add to cart
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Wishlists;
