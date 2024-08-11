import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';


interface ProductProps {
  product: Product|null;
  setProduct: (product:Product) => void;
}

const useProductsStore = create<ProductProps>()(
    (set) => ({
      product:null,
      setProduct: (product) => set(() => ({ product })),
    }),
  )

export default useProductsStore;
