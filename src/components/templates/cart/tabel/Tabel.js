
import Link from 'next/link'
import styles from './tabel.module.css'
import { IoMdClose } from 'react-icons/io'
const Table = () => {
    return (
        <div className={styles.tabel_container}>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th> جمع جزء</th>
                        <th>تعداد</th>
                        <th>قیمت</th>
                        <th>محصول</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 205,000 تومان</td>
                        <td className={styles.counter}>
                            <div>
                                <span>-</span>
                                <p>0</p>
                                <span>+</span>
                            </div>
                        </td>
                        <td className={styles.price}> 205,000 تومان</td>
                        <td className={styles.product}>
                            <img src="https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg" alt="" />
                            <Link href={'/'}>کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( RED ) 10 عددی LIMITED EDITION - Ethiopia Natural ( اتیوپی )</Link>
                        </td>

                        <td><IoMdClose className={styles.delete_icon} /></td>
                    </tr>
                </tbody>
            </table>
            <section>
                <button className={styles.update_btn}> بروزرسانی سبد خرید</button>
                <div>
                    <button className={styles.set_off_btn}>اعمال کوپن</button>
                    <input type="text" placeholder='کد تخفیف' />
                </div>
            </section>

        </div>
    )
}

export default Table
