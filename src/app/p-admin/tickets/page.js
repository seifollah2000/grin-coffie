"use client";
import DataTable from "@/components/modules/dataTable/DataTable";
import Layout from "@/components/modules/layout/Layout";
import React from "react";
import styles from "../../../components/modules/dataTable/dataTable.module.css";
import swal from "sweetalert";

const page = () => {
  const removeTicket = (ticketId) => {
    swal({
      title: "آیا از حذف تیکت اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };

  const showTicketBody = (TicketBody) => {
    swal({
      title: "عالی هستید",
      buttons: "اوکی",
    });
  };

  const banUser = (userID) => {
    swal({
      title: "آیا از بن اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };

  const answerToTicket = (ticketId) => {
    swal({
      title: "پاسخ مورد نظر را وارد کنید",
      content: "input",
      buttons: "ثبت پاسخ",
    }).then((answerText) => {
      //code
    });
  };

  return (
    <Layout>
      <main>
        <DataTable title="لیست تیکت ها">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>تاریخ</th>
                <th>کاربر</th>
                <th>مشاهده</th>
                <th>پاسخ</th>
                <th>حذف</th>
                <th>بن</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.no_answer_comment}>4</td>
                <td>1402/10/23</td>
                <td>شاهین مشکل گشا</td>

                <td>
                  <button
                    type="button"
                    onClick={() => showTicketBody(null)}
                    className={styles.btn}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => answerToTicket(null)}
                    className={styles.btn}
                  >
                    پاسخ
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => removeTicket(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => banUser(null)}
                    className={styles.delete_btn}
                  >
                    بن
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </DataTable>
        {/* <p className={styles.empty}>
          تیکتی وجود ندارد
        </p> */}
      </main>
    </Layout>
  );
};

export default page;
