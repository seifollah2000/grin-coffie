import Layout from "@/components/modules/layout/Layout";

import styles from "../../styles/pannel/admin/index.module.css";
import Box from "@/components/modules/box/Box";
import { SalesChart } from "@/components/templates/p-admin/index/salesChart/SalesChart";
import { GrowthChart } from "@/components/templates/p-admin/index/growthChart/GrowthChart";
const page = () => {
  return (
    <Layout>
      <main>
        <section className={styles.dashboard_contents}>
          <Box title="مجموع تیکت های دریافتی" value="5005" />
          <Box title="مجموع محصولات سایت" value="9990" />
          <Box title="مجموع سفارشات" value="333" />
          <Box title="مجموع کاربر های سایت" value="10" />
        </section>
        <div className={styles.dashboard_charts}>
          <section>
            <p>آمار فروش</p>
            <SalesChart />
          </section>
          <section>
            <p>نرخ رشد</p>
            <GrowthChart />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default page;
