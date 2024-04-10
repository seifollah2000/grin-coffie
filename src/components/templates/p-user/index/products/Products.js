import Link from "next/link";
import Card from "../card/Card";
import styles from "./product.module.css";
import { FaArrowLeft } from "react-icons/fa6";

const Products = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p>سفارش های اخیر</p>
        <Link href="/p-user/orders">
          همه سفارش ها <FaArrowLeft />
        </Link>
      </div>
      <Card />
      <Card />
      <Card />
      {/* <p className={styles.empty}>سفارشی ثبت نشده</p> */}
    </div>
  );
};

export default Products;
