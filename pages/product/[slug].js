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
      <h2>{product.name}</h2>
    </Layout>
  );
}
