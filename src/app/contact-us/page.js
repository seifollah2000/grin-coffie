"use client";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Form from "@/components/templates/contact-us/form/Form";
import Information from "@/components/templates/contact-us/information/Information";
import Map from "@/components/templates/contact-us/map/Map";
import styles from "@/styles/contact-us.module.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb route={"تماس با ما"} />
      <div className={styles.container}>
        <main className={styles.maps}>
          <section>
            <Map
              position={[35.72021225108499, 51.42222691580869]}
              center={[35.72021225108499, 51.42222691580869]}
            >
              <span>فروشگاه ما</span>
              <h3>آدرس فروشگاه حضوری قهوه ست (شعبه جم)</h3>
              <p>
                تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم) –
                شماره ۱۰{" "}
              </p>
              <p>021-88305827</p>
              <Link href={"/about-us"}>درباره فروشگاه</Link>
            </Map>
          </section>
          <section>
            <Map
              position={[35.70153474690238, 51.41497422314844]}
              center={[35.70153474690238, 51.41497422314844]}
            >
              <span>فروشگاه ما</span>
              <h3>آدرس فروشگاه حضوری قهوه ست (شعبه انقلاب)</h3>
              <p>
                تهران - خ انقلاب بین میدان فردوسی و چهار راه کالج روبروی خ ویلا
                شماره ۸۵۲
              </p>
              <p>021-66726563</p>
              <Link href={"/about-us"}>درباره فروشگاه</Link>
            </Map>
          </section>
        </main>
        <div className={styles.contents}>
          <Form />
          <Information />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
