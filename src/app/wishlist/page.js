import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Card from "@/components/templates/wishlist/card/Card";
import styles from "@/styles/wishlist.module.css";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb route={"علاقه مندی ها"} />
      <main className={styles.container} data-aos="fade-up">
        <p className={styles.title}>محصولات مورد علاقه شما</p>
        <section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      {/* <div class={styles.wishlist_empty} data-aos="fade-up"  >
                <FaRegHeart  />
                <p>محصولی یافت نشد</p>
                <span>شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
                <span>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
                <div>
                    <Link href='/category'>بازگشت به فروشگاه</Link>
                </div>
            </div> */}
      <Footer />
    </>
  );
};

export default page;
