import { Fragment, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

import img from "../assets/img/best-product-1.jpg";
import img2 from "../assets/img/best-product-2.jpg";
import img3 from "../assets/img/best-product-3.jpg";
import img4 from "../assets/img/best-product-4.jpg";
import img5 from "../assets/img/best-product-5.jpg";

const products = [
  {
    product_name: "Orange",
    product_description:
      "Apple is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Apple",
    product_type: "Fruit",
    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Raspberry",
    product_description:
      "Banana is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Banana",
    product_type: "Fruit",

    // product_owner: "",
    product_img: img2,
  },
  {
    product_name: "Banana",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Fruit",

    // product_owner: "",
    product_img: img3,
  },
  {
    product_name: "Apricots",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img4,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img5,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Meat",

    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Meat",

    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit -Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
  {
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: "10",
    product_company: "Grapes",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
];

const Products = () => {
  const [category, setCategory] = useState("");

  const filterProducts = (category) => {
    setCategory(category);
  };

  const handleVote = (prodID) => {
    alert(prodID);
  };
  return (
    <Fragment>
      {/*   Fruits Shop Start */}
      <div className="flex justify-center items-start w-full fruite py-5">
        <div className="lg:flex justify-center items-center lg:px-14 mx-auto fruite py-5">
          <div className="tab-class text-center">
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-4">
              <div className="text-start text-3xl font-semibold text-shade mb-5">
                <h1>Our Organic Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="flex items-center justify-start flex-wrap gap-2 text-center mb-5 text-shade">
                  <li className="nav-item">
                    <button
                      className="flex m-2 py-2 bg-light rounded-full active"
                      href="#tab-1"
                      onClick={() => filterProducts("")}
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="flex py-2 m-2 bg-light rounded-full"
                      href="#tab-2"
                      onClick={() => filterProducts("Vegetables")}
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="flex m-2 py-2 bg-light rounded-full"
                      href="#tab-3"
                      onClick={() => filterProducts("Fruit")}
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Fruits
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="flex m-2 py-2 bg-light rounded-full"
                      href="#tab-4"
                      onClick={() => filterProducts("Bread")}
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Bread
                      </span>
                    </button>
                  </li>
                  {/*   Add more, make a slide to accommodate more categories */}
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    {/* Main Products Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 row gap-4 px-5 lg:px-0">
                      {products &&
                        products
                          ?.filter((prodCategory) =>
                            prodCategory?.product_type.includes(category)
                          )
                          .slice(0, 8)
                          .map((product, index) => (
                            <div
                              key={index + 1}
                              className="col-md-6 col-lg-4 col-xl-3"
                            >
                              <div className="rounded-lg relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src={product?.product_img}
                                    className="max-w-full h-auto w-full rounded-t-md"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-accent px-3 py-1 rounded-lg absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  {product?.product_type}
                                  {/* Fruits */}
                                </div>
                                <div className="flex flex-col gap-2 p-4 border border-accent border-t-0 rounded-b-lg text-shade">
                                  <h4 className="text-2xl font-bold">
                                    {product?.product_name}
                                  </h4>
                                  <p className="">
                                    {product?.product_description}
                                  </p>
                                  <div className="flex flex-col items-center gap-2">
                                    <p className="text-2xl font-semibold mb-0 text-secondary">
                                      ${product?.product_price}/ kg
                                    </p>
                                    <button
                                      href="#"
                                      className="border border-accent rounded-full py-2 px-4 text-secondary hover:bg-accent hover:text-primary flex items-center gap-1 font-semibold transition-all duration-700 ease-in-out"
                                      onClick={() =>
                                        handleVote(product?.product_id)
                                      }
                                    >
                                      <FaThumbsUp className="me-2 text-inherit" />
                                      Vote
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End */}
    </Fragment>
  );
};

export default Products;
