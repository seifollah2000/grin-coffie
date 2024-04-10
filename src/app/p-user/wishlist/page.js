import Layout from "@/components/modules/layout/Layout";
import styles from "../../../styles/pannel/user/wishlist.module.css";
import Card from "@/components/templates/p-user/wishlist/card/Card";

const page = () => {
  return (
    <Layout>
      <main>
        <h1 className={styles.title}>
          <span>علاقه مندی ها</span>
        </h1>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* <p className={styles.empty}>
          محصولی وجود ندارد
        </p> */}
      </main>
    </Layout>
  );
};

export default page;
