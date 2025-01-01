
import { groq } from "next-sanity";
import {client} from "@/sanity/lib/client"
import Products from "./components/Products";
import Hero from "./components/Hero";
import Category from "./components/Category";
export default async function Home() {

const products = await client.fetch(groq `*[_type=="product"]`) 

console.log(products)

  return (
    <div>
      <Hero/>
    <Products/>
    <Category/>
    </div>
  );
}
