"use client"
import DataTable from '@/components/modules/dataTable/DataTable'
import Layout from '@/components/modules/layout/Layout'
import tableStyles from '../../../components/modules/dataTable/dataTable.module.css'
import { useState } from 'react'
import Modal from '@/components/modules/modal/Modal'
import styles from '../../../styles/pannel/user/orders.module.css'

const page = () => {
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => setShowModal(false)
  return (
    <Layout>
      <main>
        <DataTable title="سفارش ها">
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>تاریخ</th>
                <th>وضعیت</th>
                <th>محصول</th>
                <th>مبلغ </th>
                <th>عملیات ها</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                 1
                </td>
                <td>1402/10/20</td>
                <td>تکمیل شده</td>
                <td className={tableStyles.row}>
                  <img width={40} height={40} src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png" alt="" />
                  قهوه عربیکا 40 درصد
                </td>
                <td>
                  200000 هزار تومان
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className={tableStyles.btn}
                  >
                    نمایش
                  </button>
                </td>

              </tr>
              <tr>
                <td>
                  2
                </td>
                <td>1402/10/20</td>
                <td>تکمیل شده</td>
                <td className={tableStyles.row}>
                  <img width={40} height={40} src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png" alt="" />
                  قهوه کلمبیا 40 درصد
                </td>
                <td>
                  200000 هزار تومان
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className={tableStyles.btn}
                  >
                    نمایش
                  </button>
                </td>

              </tr>
             

            </tbody>
          </table>
        </DataTable>
        {/* <p className={tableStyles.empty}>
          سفارشی وجود ندارد
        </p> */}
      </main>
      {showModal && (
        <Modal title="مشخصات سفارش" hideModal={hideModal}>
          <p className={styles.modal_title}>سفارش #2232 در تاریخ 1402/10/21 ثبت شده است و در حال حاضر در وضعیت تکمیل شده می باشد</p>
          <div className={styles.groups}>
            <div className={styles.group}>
              <p>محصول</p>
              <p>مجموع</p>
            </div>
            <div className={styles.group}>
              <p> قهوه عربیکا 40 درصد</p>
              <p>220000 هزار تومان</p>
            </div>
            <div className={styles.group}>
              <p>جمع کل سبد خرید:</p>
              <p>0 تومان</p>
            </div>
            <div className={styles.group}>
              <p>قیمت نهایی:</p>
              <p>220000 هزار تومان</p>
            </div>
          </div>
          <div>

          </div>
          <button className={styles.modal_btn}>سفارش دوباره</button>
          <div className={styles.modal_bill}>
            <p>آدرس صورت حساب:</p>
            <div>
              <p>شاهین مشکل گشا</p>
              <p>09046417084</p>
              <p>kasrakasra924@gmail.com</p>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  )
}

export default page
