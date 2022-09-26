import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import {Home} from "./Components/HomePage/Home";
import {SideBar} from "./Components/HomePage/SideBar";
import {arrange} from "./Components/Servicelist/Serviceslist";
import {Category} from "./Components/Category/Category";
import {ProductsTitle} from "./Components/Products/ProductTitle";
import {Contact} from "./Components/Contact/Contact";
import {Blog} from "./Components/Blog/Blog";
import {Footer} from "./Components/Footer/Footer";
import {ScrollBtn} from "./Components/ScrollBtn/ScrollBtn";
import {ShowReview} from "./Components/Review/Review";
import {listProducts} from "./Components/Products/Allitems";
import {fashionImages} from "./Components/Fashion/Fashion.jsx"
import "./Components/MediaQuery/Media.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar
          link1="Home"
          link2="Shop"
          link3="About"
          link4="contact"
          link5="blog"
        />
        <Home />
        <div className="services-list container">{arrange}</div>
        <ProductsTitle title="Products Of The Week" />
        <Category />
        <div className="products-list container">{listProducts}</div>
        <ProductsTitle title="Latest fashion news" />
        <ScrollBtn />
        <div className="container fashionImages">{fashionImages}</div>
        <ProductsTitle title="Our Reviews" />
        <div className="container revew-images">{ShowReview}</div>
        <Contact />
        <div className="container">
          <Blog />
        </div>
        <Footer
          title="Information"
          title_2="Category"
          title_3="Help & Support"
        />
      </div>
    );
  }
}
export default App;
