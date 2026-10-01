import React from 'react';
import { notFound } from 'next/navigation';
import productsData from '../../data/product.json';
import ProductDetailView from '../../components/ui/ProductDetailView';
import { Product } from '../../components/ui/product';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  
  const rawData: any = productsData;
  const products: Product[] = Array.isArray(rawData) ? rawData : rawData.products;
  const brandData = Array.isArray(rawData) ? null : rawData.brand;
  
  const product = products.find(p => p.slug === slug || p.id === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} brandData={brandData} />;
}
