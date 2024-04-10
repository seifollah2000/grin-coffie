"use client"
import Layout from '@/components/modules/layout/Layout'
import styles from '../../../styles/pannel/user/accountDetails.module.css'
import swal from 'sweetalert';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from 'react';
 
const page = () => {
  const [userName, setUserName] = useState('شاهین مشکل گشا')
  const [email, setEmail] = useState('kasrakasra924@gmail.com')
  const [phoneNumber, setPhoneNumber] = useState('password')

  const deleteProfile = () => {
    swal({
      title: "آیا از حذف پروفایل اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      //code
    });
  }
  const changePasword=()=>{
    swal({
      title: "رمز قبلی خود را وارد کنید",
      content: "input",
      buttons: "ثبت",
    }).then((result) => {
      //code
    });
  }

  return (
    <Layout>
      <main>
        <div className={styles.details}> 
          <h1 className={styles.title}>
            <span> جزئیات اکانت</span>
          </h1>
          <div className={styles.details_main}>
            <section>
              <div>
                <label>نام کاربری</label>
                <input value={userName} onChange={(event)=>setUserName(event.target.value)} placeholder='لطفا نام کاربری خود را وارد کنید' type="text" />
              </div>
              <div>
                <label>ایمیل</label>
                <input value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='لطفا ایمیل خود را وارد کنید' type="text" />
              </div>
              <div>
                <label>شماره تماس</label>
                <input value={'09046417074'} onChange={(event)=>setPhoneNumber(event.target.value)} placeholder='لطفا شماره تماس خود را وارد کنید' type="number" />
              </div>

            </section>
            <section>
              <div className={styles.uploader}>
                <img src="/images/shahin.jpg" alt="" />
                <div>
                  <div>
                    <button>
                      <IoCloudUploadOutline />
                      تغییر
                    </button>
                    <input type="file" name="" id="" />
                  </div>
                  <button onClick={deleteProfile}>
                    <MdOutlineDelete />
                    حذف</button>
                </div>
              </div>
              <div>
                <label>رمز عبور</label>
                <div className={styles.password_group}>
                  <input value={phoneNumber} disabled type="password" />
                  <button onClick={changePasword}>تغییر رمز عبور</button>
                </div>
              </div>
            </section>
          </div>
          <button type='submit' disabled={true} className={styles.submit_btn}>ثبت تغییرات</button>
        </div>

      </main>
    </Layout>
  )
}

export default page
