'use client'
import Layout from '@/components/modules/layout/Layout'
import styles from '../../../../../styles/pannel/user/answerTicket.module.css'
import Link from 'next/link'
import Answer from '@/components/templates/p-user/tickets/answer/Answer'


const page = () => {

  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span>تیکت تستی</span>
          <Link href='/p-user/tickets/sendTicket'>ارسال تیکت جدید</Link>
        </h1>

        <div>
          <Answer type="user" />
          <Answer type="admin" />


          {/* <div className={styles.empty}>
            <p>هنوز پاسخی دریافت نکردید</p>
          </div> */}
        </div>
      </main>
    </Layout>
  )
}

export default page
