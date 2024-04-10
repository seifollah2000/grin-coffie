"use client"
import styles from './card.module.css'
import Link from 'next/link';
import { IoMdStar } from "react-icons/io";  
import swal from 'sweetalert';
const Card = () => {
    const removeProduct=(productId)=>{
        swal({
            title: "آیا از حذف محصول اطمینان دارید؟",
            icon: "warning",
            buttons: ["نه", "آره"],
          }).then((result) => {
           //code
          });
    }
    return (
        <div className={styles.card}>
            <Link href={'/product/123'}>
                <img width={283} height={283} src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png" alt="" />
            </Link>
            <p dir='rtl'>دانه قهوه ترکیبی  80R 20A ( 82R+ ) یک کارتن</p>
            <div>
                <div>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                </div>
                <span>265,000 تومان</span>
            </div>
            <button onClick={()=>removeProduct(null)} className={styles.delete_btn}>حذف محصول </button>
        </div>
    )
}

export default Card
