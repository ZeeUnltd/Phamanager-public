import React, { useState, createContext } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  quantity: number;
  unit: string;
  price: number;
  minStatus: boolean;
  minAmount: number;
  status: string;
};

type InventoryContextProviderProps = {
  children: React.ReactNode;
};

type InventoryContextObj = {
  productData: Product;
  setProductData: React.Dispatch<React.SetStateAction<Product>>;
  inventoryProducts: Product[];
  setInventoryProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  renderedData: Product[];
  setRenderedData: React.Dispatch<React.SetStateAction<Product[]>>;
  addToInventory: () => void;
  filterInventoryProduct: (category: string) => void;
  deleteInventoryProduct: (itemProps: Product) => void;
};

const defaultProductData = {
  id: "#5094826369",
  name: "",
  category: "",
  brand: "",
  quantity: 0,
  unit: "",
  price: 0,
  minStatus: false,
  minAmount: 10,
  status: "",
};

export const InventoryContext = createContext<InventoryContextObj | undefined>(
  undefined
);

export const InventoryContextProvider = ({
  children,
}: InventoryContextProviderProps) => {
  const [productData, setProductData] = useState<Product>(defaultProductData);
  const [inventoryProducts, setInventoryProducts] = useState<Product[]>([]);
  const [renderedData, setRenderedData] = useState<Product[]>([]);

  const productStatus =
    productData.quantity > productData.minAmount ? "available" : "alerted";

  function addToInventory() {
    if (productData) {
      const data = {
        id: "#5094826369",
        name: productData.name,
        category: productData.category,
        brand: productData.brand,
        quantity: productData.quantity,
        unit: productData.unit,
        price: productData.price,
        minStatus: productData.minStatus,
        minAmount: productData.minAmount,
        status: productStatus,
      };

      setInventoryProducts(inventoryProducts => [...inventoryProducts, data]);
      setRenderedData(inventoryProducts => [...inventoryProducts, data]);
      setProductData(defaultProductData);
      console.log("item added:", data);
    }
  }

  const filterInventoryProduct = (category: string) => {
    if (category !== "All") {
      const selectedCategory = inventoryProducts.filter(
        product => product.category === category
      );

      return setRenderedData(selectedCategory);
    } else setRenderedData(inventoryProducts);
  };

  function deleteInventoryProduct(itemProps: Product) {
    const itemId = itemProps.id;
    const updatedProducts = inventoryProducts.filter(
      product => product.id !== itemId
    );
    setInventoryProducts(updatedProducts);
    setRenderedData(updatedProducts);
    console.log("Deleted Item:", itemProps);
  }

  const contextValue = {
    productData,
    setProductData,
    inventoryProducts,
    setInventoryProducts,
    renderedData,
    setRenderedData,
    addToInventory,
    filterInventoryProduct,
    deleteInventoryProduct,
  };

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  );
};
