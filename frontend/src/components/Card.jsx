const Card = ({ item }) => {
  const { image, price, category, title, name } = item;

  return (
    <div className="card w-92 bg-base-100 shadow-lg m-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary bg-pink-500  text-white font-light ">
            {category}
          </div>
        </h2>
        <p>{title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">${price}</div>
          <div className="cursor-pointer badge badge-outline p-2 hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
