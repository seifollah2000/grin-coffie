"use client";
import DataTable from "@/components/modules/dataTable/DataTable";
import Layout from "@/components/modules/layout/Layout";
import React from "react";
import styles from "../../../components/modules/dataTable/dataTable.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import swal from "sweetalert";

const page = () => {
  const removeComment = (commentID) => {
    swal({
      title: "آیا از حذف کامنت اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };

  const showCommentBody = (commentBody) => {
    swal({
      title: "عالی هستید",
      buttons: "اوکی",
    });
  };

  return (
    <Layout>
      <main>
        <DataTable title="لیست کامنت‌ها">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>تاریخ</th>
                <th>محصول</th>
                <th>امتیاز</th>
                <th>وضعیت</th>
                <th>مشاهده</th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4</td>
                <td>1402/10/23</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button type="button" className={styles.no_check}>
                    در انتظار تایید
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.btn}
                  >
                    مشاهده
                  </button>
                </td>

                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>1402/10/23</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button type="button" className={styles.check}>
                    تایید شده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.btn}
                  >
                    مشاهده
                  </button>
                </td>

                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>1402/10/23</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button type="button" className={styles.no_check}>
                    در انتظار تایید
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.btn}
                  >
                    مشاهده
                  </button>
                </td>

                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </DataTable>
        {/* <p className={styles.empty}>
          کامنتی وجود ندارد
        </p>  */}
      </main>
    </Layout>
  );
};

export default page;
