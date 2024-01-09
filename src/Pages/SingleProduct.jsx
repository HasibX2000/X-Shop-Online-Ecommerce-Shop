import React from 'react';
import { useParams } from 'react-router-dom';
// import Products from '../Data/Prouducts.json';
import Ratings from '../Components/Ratings';
import useFetch from '../hooks/useFetch';

const SingleProduct = () => {
  const { id } = useParams();
  const { product: products } = useFetch();
  // console.log(products);
  const sPro = products.find((item) => item.id == id);
  // console.log(sPro);

  return (
    <div className="container mx-auto  p-5 md:p-0 md:py-5">
      <h1 className="text-5xl text-center dark:text-white text-orange-600 font-medium py-5">
        {sPro.title}
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-5">
        <div className="flex justify-center lg:justify-end">
          <img src={sPro.images[0]} alt="image" className="max-w-sm" />
        </div>
        <div className="flex  flex-col items-center lg:items-start">
          <h1 className="text-4xl text-center dark:text-white text-orange-600 font-medium pb-3">
            ${sPro.price}
          </h1>
          <Ratings className="text-3xl" />
          <div className="mt-5 flex flex-col md:flex-row gap-5">
            <div className="bg-orange-600 text-white dark:bg-white dark:text-orange-600 px-3 py-1 text-xl rounded font-semibold">
              BEST SELLER
            </div>

            <div className="text-white bg-green-500 dark:bg-white dark:text-green-500 px-3 py-1 text-xl rounded font-semibold">
              INSTOCK
            </div>

            {sPro.fileSize ? (
              <div className="text-white bg-orange-600 dark:bg-white dark:text-blue-500 px-3 py-1 text-xl rounded font-semibold">
                {sPro.fileSize}MB
              </div>
            ) : (
              <div className="text-white bg-orange-600 dark:bg-white dark:text-blue-500 px-3 py-1 text-xl rounded font-semibold">
                100MB
              </div>
            )}
          </div>

          <div className="bg-orange-600 flex justify-center items-center mt-5 px-3 py-2 rounded text-white text-orange-8">
            Add To Cart
            <span className="bi bi-plus-square ml-3"></span>
          </div>

          <p className="max-w-xl mt-3 text-xl dark:text-white text-orange-600 text-center lg:text-left">
            {sPro.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
