"use client";

import { useState, useEffect } from "react";

import TabNavigator from "@/components/TabNavigator";
import CardProduct from "@/components/CardProduct";

import { api } from "@/services/api";

// STYLES
import * as S from "./styles";

// TYPES
import { IProduct, IProductRows } from "@/types/Product";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get<IProductRows>("/products");
      setProducts(response?.data?.listProducts);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <TabNavigator />
      <S.MainContainer>
        {products.length === 0 && !products ? (
          <>Nenhum produto disponível</>
        ) : (
          products.map((item) => {
            return (
              <CardProduct
                key={item["id"]}
                name={item["name"]}
                image_url={item["image_url"]}
                price={item["price"]}
              />
            );
          })
        )}
      </S.MainContainer>
    </>
  );
};

export default Home;
