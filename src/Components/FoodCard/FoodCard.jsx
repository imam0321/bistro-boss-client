const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-sm">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
