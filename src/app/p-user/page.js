import Layout from "@/components/modules/layout/Layout";
import styles from "../../styles/pannel/user/index.module.css";
import Box from "@/components/modules/box/Box";
import Tickets from "@/components/templates/p-user/index/tickets/Tickets";
import Products from "@/components/templates/p-user/index/products/Products";
const page = () => {
  return (
    <Layout>
      <main>
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value="20" />
          <Box title="مجموع کامنت ها " value="0" />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value="10" />
        </section>
        <section className={styles.contents}>
          <Tickets />
          <Products />
        </section>
      </main>
    </Layout>
  );
};

export default page;
