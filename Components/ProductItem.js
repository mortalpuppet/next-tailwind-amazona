/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        ></img>
      </Link>
      <div className="flex flex-col item-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg ">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.category}</p>
        <p className="text-m">{product.price}</p>
        <p className="text-lg">{product.rating}</p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
