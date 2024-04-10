import Layout from "@/components/modules/layout/Layout";
import React from "react";
import styles from "../../../components/modules/dataTable/dataTable.module.css";
import DataTable from "@/components/modules/dataTable/DataTable";
import swal from "sweetalert";
const page = () => {
  return (
    <Layout>
      <main>
        <DataTable title="لیست کاربران">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام و نام خانوادگی</th>
                <th>ایمیل</th>
                <th>نقش</th>
                <th>ویرایش</th>
                <th>تغییر سطح</th>
                <th>حذف</th>
                <th>بن</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23232</td>
                <td>شاهین</td>
                <td>@kasrakasra924@gmail.com</td>
                <td>کاربر عادی</td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    حذف
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    بن
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </DataTable>
        {/* <p className={styles.empty}>
          کاربری وجود ندارد
        </p>   */}
      </main>
    </Layout>
  );
};

export default page;
