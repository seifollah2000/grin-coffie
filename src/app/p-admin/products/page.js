"use client"
import Layout from '@/components/modules/layout/Layout'
import styles from '../../../components/modules/dataTable/dataTable.module.css'
import DataTable from '@/components/modules/dataTable/DataTable'
import swal from 'sweetalert'
const page = () => {
  const removeProduct = (productId) => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  };


  return (
    <Layout>
      <main>
        <DataTable title='لیست محصولات'>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام محصول</th>
                <th>قیمت</th>
                <th>وضعیت</th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td style={{ color: '#711D1C' }}>اتمام موجودی </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
              <tr>
                <td>23232</td>
                <td>دانه قهوه ترکیبی 80R 20A ( 82R+ ) یک کارتن</td>
                <td> 200000 هزار تومان </td>
                <td>موجود </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                  >
                    ویرایش
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeProduct(null)}
                  >
                    حذف
                  </button>
                </td>

              </tr>
            </tbody>
          </table>
        </DataTable>
        {/* <p className={styles.empty}>
          محصولی وجود ندارد
        </p> */}
      </main>
    </Layout>
  )
}

export default page
