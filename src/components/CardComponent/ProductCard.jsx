const ProductCard = ({
  name,
  image,
  des,
  rating,
  price,
  category,
  discount,
  review,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 border border-gray-200 relative w-full">
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="text-md text-gray-700 font-semibold">{category}</span>
        <p className="text-gray-700 mt-2">{des}</p>
        <div className="flex items-center mt-2 ">
          <div
            className="px-1 rounded"
            style={{
              backgroundColor: "rgb(76,167,44)",
            }}
          >
            <span className="text-white text-sm font-semibold">★ {rating}</span>
          </div>
          <span className="text-sm text-gray-600 ml-2">({review} Reviews)</span>
        </div>
        <div className="text-xl font-bold text-gray-800 mt-2">₹ {price}</div>
        {discount && (
          <p className="text-red-600 text-sm">Discount: {discount}% off</p>
        )}
      </div>
      <img
        src={image}
        alt={name}
        className="absolute bottom-4 right-4 w-24 h-24 object-cover rounded-xl"
      />
    </div>
  );
};
export default ProductCard;
