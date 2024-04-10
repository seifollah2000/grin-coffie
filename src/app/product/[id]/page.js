"use client";
import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/gallery/Gallery";
import Details from "@/components/templates/product/details/Details";
import Tabs from "@/components/templates/product/tabs/Tabs";
import MoreProducts from "@/components/templates/product/moreProducts/MoreProducts";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";

const product = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div data-aos="fade-up" className={styles.contents}>
        <div className={styles.main}>
          <Details />
          <Gallery />
        </div>
        <Tabs />
        <MoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default product;
