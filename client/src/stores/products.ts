import { api } from "./session";



export function getProducts() {
  return api<ListEnvelope<Product>>('products');
}

export function getProduct(id: number) {
  return api<Product>(`products/${id}`)
}


export interface ListEnvelope<T> {
    products: T[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    _id: string
    price: number
    desc: string
    image: string
    name: string
  }