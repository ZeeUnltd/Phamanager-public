import React, { useState, useRef, useEffect } from "react";
import image2 from "/svg/image2.svg";
import love from "/svg/love.svg";
import facebook from "/svg/facebook.svg";
import twitter from "/svg/twitter.svg";
import platform from "/svg/platform.svg";
import restuarant from "/svg/restuarant.svg";
import image from "/svg/image.svg";
import CustomButton from "../../../../components/customButton/customButton";
import drugImage from "./image.svg";
import mail from "/svg/mail.svg";
import pointer from "/svg/pointer.svg";
import pointer2 from "/svg/pointer2.svg";
import setting from "/svg/setting-2.svg";
import cross from "/svg/cross.svg";
import AddNewProduct from "../../../../components/modals/addNewProduct/addNewProduct";
import Category from "../../../../components/CategoricalInventory";
import LoadImage from "../../../../components/LoadImage/Image";
import SearchBox from "../../../../components/SearchBox/SearchBox";
import Inventory from "../../../../components/Inventorys";
import InventoryEdit from "../../../../components/InventoryEdit/inventoryEdit";
import Container from "../../../../components/container/container";
import Header from "../components/Header";
import "./index.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../components/redux/Cart/cartSlice";
import { toggleActive } from "../../../../components/redux/Cart/activeSlice";

const myArray = [
  {
    id: "sda",
    price: "800",
    item: "Penincillin Ointment",
    brand: "Emzor",
    active: false,
  },
  {
    id: "sjs",
    price: "1000",
    item: "Penincillin Ointment",
    brand: "Mikatem",
    active: false,
  },
  {
    id: "swa",
    price: "500",
    item: "Paracetamol",
    brand: "Nunu",
    active: false,
  },
  {
    id: "fga",
    price: "1600",
    item: "Marijuana",
    brand: "Pablo",
    active: false,
  },
  {
    id: "sfa",
    price: "750",
    item: "Penincillin Ointment",
    brand: "Moko",
    active: false,
  },
  {
    id: "fgk",
    price: "870",
    item: "Penincillin Balm",
    brand: "Emzor",
    active: false,
  },
  {
    id: "qwe",
    price: "900",
    item: "Panadol",
    brand: "Engr",
    active: false,
  },
  {
    id: "oya",
    price: "1200",
    item: "Panadol Extra",
    brand: "Emzor",
    active: false,
  },
  {
    id: "opo",
    price: "800",
    item: "Penincillin Ointment",
    brand: "Tobias",
    active: false,
  },
  {
    id: "gbemi",
    price: "1500",
    item: "Gbemidebe Ointment",
    brand: "Ikay",
    active: false,
  },
  {
    id: "debe",
    price: "800",
    item: "Penincillin Ointment",
    brand: "Emzor",
    active: false,
  },
  {
    id: "omo",
    price: "400",
    item: "Piritin Capsule",
    brand: "Emzor",
    active: false,
  },
  {
    id: "iya",
    price: "700",
    item: "Aboniki Balm",
    brand: "Kins",
    active: false,
  },
  {
    id: "mii",
    price: "800",
    item: "Ferrous Caplsule",
    brand: "Laslas",
    active: false,
  },
  {
    id: "mafo",
    price: "800",
    item: "Miracle Capsule",
    brand: "Lord",
    active: false,
  },
];

const btnInputs = [
  {
    id: 1,
    input: "All",
  },
  {
    id: 2,
    input: "Oral drugs and supplements",
  },
  {
    id: 3,
    input: "Intravenous injections and infusions",
  },
  {
    id: 4,
    input: "First aid and treatment",
  },
];

type props = {
  callback: Function;
};

const CreateInvoice: React.FC = () => {
  const [array, setArray] = useState(myArray);
  const [addNewProduct, setAddNewProduct] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const formRef = useRef<{
    item?: string;
    category?: string;
    brand?: string;
    price?: any;
    id?: any;
    unit?: number;
    dosage_strength?: number;
  }>({});
  const dispatch = useDispatch();
  const param = useParams();
  const uniqueID = param.id;
  const activee = useSelector((state: any) => state.active.active);
  // const setActivee = () => {
  //   let activee;
  //   // Check if cart exists and is an array before using forEach
  //   if (cart && Array.isArray(cart)) {
  //     cart.forEach((item: any) => {
  //       activee = item.active
  //     });
  //   }

  //   return { activee };
  // };

  //   const handleClick = (id: string) => {
  //     const current = array.find((arr) => arr.id === id);
  //     if (current && current.active === false) {
  //       const value = cartCount + 1;
  //       setCartCount(value);
  //       setArray(
  //         array.map((value) =>
  //           value.id === id ? { ...value, active: true } : value
  //         )
  //       );
  //       props.callback(value);
  //     } else {
  //       const value = cartCount - 1;
  //       setCartCount(value);
  //       setArray(
  //         array.map((value) =>
  //           value.id === id ? { ...value, active: false } : value
  //         )
  //       );
  //       props.callback(value);
  //     }
  //   };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const toggle = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("arrayData") || "[]");
    console.log("Loaded from localStorage:", storedArray);
    setArray(storedArray);
  }, []);

  // Save data to localStorage whenever array changes
  useEffect(() => {
    console.log("Saving to localStorage:", array);
    localStorage.setItem("arrayData", JSON.stringify(array));
  }, [array]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Access input values from the formRef
    const formData = formRef.current;
    const finalData = { ...formData, active: false };

    // Do something with the form data
    console.log("Form Data:", finalData);

    setArray((prevArray) => {
      const newArray = [...prevArray, finalData];
      console.log("Updated Array: ", newArray); // This will show the correct updated array
      return newArray;
    });

    console.log("Array: ", array);

    formRef.current = {};
    setAddNewProduct(false);
    setActive(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the formRef with the input value
    formRef.current = { ...formRef.current, [name]: value };
  };

  return (
    <>
      <div className={addNewProduct ? "wrapper" : "none"}>
        <div className="add" onClick={() => setAddNewProduct(false)}></div>
        <div className="add-product-center">
          <AddNewProduct
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Header
        subtitle={"Create an invoice"}
        title={"Dispensary Counter"}
        linkTo={`/dashboard/${uniqueID}/inbounds`}
        cart={[]}
      />
      <Container type="blue-border">
        <>
          <div className="inventory-wrap">
            {/* <LoadImage
            callback={() => {}}
            alt=""
            className="page-image"
            imagePath={image2}
            height="200px"
            width="200px"
          /> */}
            <div className="inbound-top">
              {/* <div className="restuarant-img">
              <LoadImage
                callback={() => {}}
                alt=""
                imagePath={restuarant}
                height="100px"
                width="100px"
              />
            </div>
            <div className="header">
              <h2>
                <span>RX Pharmacy</span>{" "}
                <div>
                  <LoadImage
                    callback={() => {}}
                    alt=""
                    imagePath={love}
                    height="15px"
                    width="15px"
                  />
                </div>
              </h2>
              <p>Best in class medical dispensary services</p>
              <div className="socials">
                <LoadImage
                  callback={() => {}}
                  alt=""
                  imagePath={twitter}
                  height="20px"
                  width="20px"
                />
                <LoadImage
                  callback={() => {}}
                  alt=""
                  imagePath={platform}
                  height="20px"
                  width="20px"
                />
                <LoadImage
                  callback={() => {}}
                  alt=""
                  imagePath={facebook}
                  height="20px"
                  width="20px"
                />
                <LoadImage
                  callback={() => {}}
                  alt=""
                  imagePath={mail}
                  height="20px"
                  width="20px"
                />
              </div>
            </div> */}
              <div className="shelf">
                <p>Product Shelf</p>
              </div>
              <div className="searchbox">
                <SearchBox onSearch={handleSearch} />
              </div>

              <div className="search-settings">
                <div>
                  <img src={pointer} alt="" />
                </div>
                {btnInputs?.map((btn) => (
                  <CustomButton key={btn.id} input={btn.input} />
                ))}
                <div className="rotate-arrow">
                  <img src={pointer2} alt="" />
                </div>

                {!active ? (
                  <div className="counter-settings-active" onClick={toggle}>
                    <img className="set-img" src={setting} alt="" />
                    <p className="set-text-active">Counter Settings</p>
                  </div>
                ) : (
                  <div
                    className="counter-settings-active"
                    onClick={() => setAddNewProduct(true)}
                  >
                    <img className="set-cross-img" src={cross} alt="" />
                    <p className="set-text-active">Add New Product</p>
                  </div>
                )}
              </div>
            </div>
            <div className="inventories">
              {search ? (
                <Category
                  name={`Search results for "${search}"`}
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        key={index}
                        image={drugImage}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
              ) : (
                <>
                  {/* <Category
                  name="All Inventory"
                  count={1}
                  renderInventory={() => }
                /> */}
                  {!active ? (
                    <div className="inventory-grid">
                      {array.map((val) => (
                        <Inventory
                          id={val.id} //id is one of the main problem
                          key={val.id}
                          image={drugImage}
                          drugName={val.item}
                          brandName={val.brand}
                          tabletSize="500mg"
                          price={val.price}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="inventory-grid">
                      {array.map((val) => (
                        <InventoryEdit
                          id={val.id} //id is one of the main problem
                          key={val.id}
                          image={drugImage}
                          drugName={val.item}
                          brandName={val.brand}
                          tabletSize="500mg"
                          edit="Click here to edit"
                          
                        />
                      ))}
                    </div>
                  )}
                  {/* <Category
                  name="Oral Drugs and Supplement"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="Intravenous injections and infusions "
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="First aid and treatments"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="Baby and toddler supplies"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="Beauty products"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="Women health and sanitary products"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                />
                <Category
                  name="Vaccines and cures"
                  count={1}
                  renderInventory={() =>
                    myArray.map((val, index) => (
                      <Inventory
                        onClick={() => handleClick(val.id)}
                        key={index}
                        image={image}
                        drugName="Paracetamol"
                        drugType="ORAL"
                      />
                    ))
                  }
                /> */}
                </>
              )}
            </div>
          </div>
        </>
      </Container>
    </>
  );
};

export default CreateInvoice;
