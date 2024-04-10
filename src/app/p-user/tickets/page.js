'use client'
import Layout from '@/components/modules/layout/Layout'
import styles from '../../../styles/pannel/user/tickets.module.css'
import Link from 'next/link'
import Box from '@/components/templates/p-user/tickets/box/Box'
import Ticket from '@/components/modules/ticket/Ticket'


const page = () => {

  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span>همه تیکت ها</span>
          <Link href='/p-user/tickets/sendTicket'> ارسال تیکت جدید  </Link>
        </h1>

        <div className={styles.boxes}>
          <Box title={'باز'} value={0} />
          <Box title={'بسته'} value={0} />
          <Box title={'پاسخ داده شده'} value={0} />
          <Box title={'پایان یافته'} value={0} />
          <Box title={'همه'} value={0} />
        </div>

        <div className={styles.filtering}>
          <div>
            <select>
              <option>
                همه
              </option>
              <option>
                فرستاده شده
              </option>
              <option>
                دریافتی
              </option>
            </select>
            <select>
              <option>
                همه
              </option>
              <option>
                باز
              </option>
              <option>
                بسته
              </option>
              <option>
                پاسخ داده شده
              </option>
              <option>
                پایان یافته
              </option>
            </select>
            <select>
              <option>
                تاریخ پاسخ
              </option>
              <option>
                تاریخ ایجاد
              </option>
            </select>
          </div>
          <button type="submit">
            اعمال
          </button>
        </div>

        <div>
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
        {/* <div className={styles.empty}>
            <p>تیکتی وجود ندارد</p>
          </div> */}
      </main>
    </Layout>
  )
}

export default page
