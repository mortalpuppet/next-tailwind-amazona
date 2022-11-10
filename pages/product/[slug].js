import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function PoroductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    <div>Product not fount!</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={480}
            Layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li> Category : {product.category}</li>
            <li>
              Rated {product.rating} out of {product.numReviews} reviews
            </li>
            <li> Price : {product.price}</li>
            <li> Description: {product.description}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price is </div>
            <div>{product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>
              {product.CountInStock > 0 ? ' In Stock' : ' Out of Stock'}
            </div>
          </div>
          <button className="primary-button w-full">Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}
