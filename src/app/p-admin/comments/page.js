'use client'
import DataTable from '@/components/modules/dataTable/DataTable'
import Layout from '@/components/modules/layout/Layout'
import React from 'react'
import styles from '../../../components/modules/dataTable/dataTable.module.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import swal from 'sweetalert'

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
      title: 'عالی هستید',
      buttons: "اوکی",
    });
  };

  const banUser = (userID) => { 
    swal({
      title: "آیا از بن مطمعنی؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
    //code
    });
  };

  const acceptComment = (commentID) => {
    swal({
      title: "آیا از تایید کامنت اطمینان دارید",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };

  const rejectComment = (commentID) => {
    swal({
      title: "آیا از رد کامنت اطمینان دارید",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };

  const answerToComment = (commentID) => {
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
        <DataTable title="لیست کامنت‌ها">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>کاربر</th>
                <th>محصول</th>
                <th>امتیاز</th>
                <th>مشاهده</th>
                <th>پاسخ</th>
                <th>تایید</th>
                <th>ویرایش</th>
                <th>حذف</th>
                <th>بن</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className={styles.no_answer_comment}
                > 
                  4
                </td>
                <td>شاهین مشکل گشا</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar  />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.edit_btn}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => answerToComment(null)}
                    className={styles.edit_btn}
                  >
                    پاسخ
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => rejectComment(null)}
                    className={styles.delete_btn}
                  >
                    رد
                  </button>
                </td>

                {/* <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => acceptComment(null)}
                    >
                      تایید
                    </button>
                  </td> */}

                <td>
                  <button type="button"  
                   className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>banUser(null)}
                    className={styles.delete_btn}
                  >
                    بن
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className={styles.no_answer_comment}
                > 
                  4
                </td>
                <td>شاهین مشکل گشا</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar  />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
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
                  <button
                    type="button"
                    onClick={() => answerToComment(null)}
                    className={styles.edit_btn}
                  >
                    پاسخ
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => rejectComment(null)}
                    className={styles.delete_btn}
                  >
                    رد
                  </button>
                </td>

                {/* <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => acceptComment(null)}
                    >
                      تایید
                    </button>
                  </td> */}

                <td>
                  <button type="button" 
                  
                  onClick={()=>removeComment(null)}
                   className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>banUser(null)}
                    className={styles.delete_btn}
                  >
                    بن
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className={styles.no_answer_comment}
                > 
                  4
                </td>
                <td>شاهین مشکل گشا</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar  />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.edit_btn}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => answerToComment(null)}
                    className={styles.edit_btn}
                  >
                    پاسخ
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => rejectComment(null)}
                    className={styles.delete_btn}
                  >
                    رد
                  </button>
                </td>

                {/* <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => acceptComment(null)}
                    >
                      تایید
                    </button>
                  </td> */}

                <td>
                  <button type="button" 
                  
                  onClick={()=>removeComment(null)}
                   className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>banUser(null)}
                    className={styles.delete_btn}
                  >
                    بن
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className={styles.no_answer_comment}
                > 
                  4
                </td>
                <td>شاهین مشکل گشا</td>
                <td>قهوه عربیکا 40 درصد</td>
                <td>
                  <FaRegStar  />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(null)}
                    className={styles.edit_btn}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => answerToComment(null)}
                    className={styles.edit_btn}
                  >
                    پاسخ
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => rejectComment(null)}
                    className={styles.delete_btn}
                  >
                    رد
                  </button>
                </td>

                {/* <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => acceptComment(null)}
                    >
                      تایید
                    </button>
                  </td> */}

                <td>
                  <button type="button" 
                  
                  onClick={()=>removeComment(null)}
                   className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>removeComment(null)}
                    className={styles.delete_btn}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={()=>banUser(null)}
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
          کامنتی وجود ندارد
        </p>  */}
      </main>
    </Layout>
  )
}

export default page
