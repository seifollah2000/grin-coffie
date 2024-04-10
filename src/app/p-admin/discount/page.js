"use client"
import DataTable from '@/components/modules/dataTable/DataTable'
import Layout from '@/components/modules/layout/Layout' 
import styles from '../../../styles/pannel/admin/discount.module.css'
import swal from 'sweetalert'
const page = () => {
    const removeDiscount = (discountId) => {
        swal({
            title: "آیا از حذف کد تخفیف اطمینان دارید؟",
            icon: "warning",
            buttons: ["نه", "آره"],
        }).then((result) => {
            //code
        });
    };

    return (
        <Layout>
            <main>
                <section className={styles.discount}>
                    <p>افزودن کد تخفیف جدید</p>
                    <div className={styles.discount_main}>
                        <div>
                            <label>شناسه تخفیف</label>
                            <input placeholder='لطفا شناسه تخفیف را وارد کنید' type="text" />
                        </div>
                        <div>
                            <label>درصد تخفیف</label>
                            <input placeholder='لطفا درصد تخفیف را وارد کنید' type="text" />
                        </div>
                        <div>
                            <label>حداکثر استفاده</label>
                            <input placeholder='حداکثر استفاده از کد تخفیف' type="text" />
                        </div>
                        <div>
                            <label>محصول</label>
                            <select name="" id="">
                                <option value="">قهوه ترک</option>
                                <option value="">قهوه عربیکا</option>
                                <option value="">قهوه اسپرسو</option>
                            </select>
                        </div>
                    </div>
                    <button>افزودن</button>
                </section>
                <DataTable title="لیست تخفیفات  ">
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>کد</th>
                                <th>درصد</th>
                                <th>حداکثر استفاده</th>
                                <th>دفعات استفاده شده</th>
                                <th>سازنده</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    coffee50
                                </td>
                                <td>
                                    50
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    شاهین مشکل گشا
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className={styles.delete_btn}
                                        onClick={() => removeDiscount(null)}
                                    >
                                        حذف
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    coffe70
                                </td>
                                <td>
                                    70
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    شاهین مشکل گشا
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className={styles.delete_btn}
                                        onClick={() => removeDiscount(null)}
                                    >
                                        حذف
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    coffee100
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    شاهین مشکل گشا
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className={styles.delete_btn}
                                        onClick={() => removeDiscount(null)}
                                    >
                                        حذف
                                    </button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </DataTable>
            </main>
        </Layout>
    )
}

export default page
