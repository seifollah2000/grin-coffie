"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [fixTop, setFixTop] = useState(false);
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      const currentScroll = window?.pageYOffset;
      if (currentScroll > 100) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    });
  }, []);

  return (
    <nav className={!fixTop ? styles.navbar : styles.navbar_fixed}>
      <main>
        <div>
          <a href="/">
            {" "}
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href={"/"}> صفحه اصلی </Link>
          </li>
          <li>
            <Link href={"/category"}> فروشگاه </Link>
          </li>
          <li>
            <Link href={"/articles"}> مقالات </Link>
          </li>
          <li>
            <Link href={"/contact-us"}>تماس با ما</Link>
          </li>
          <li>
            <Link href={"/about-us"}>درباره ما </Link>
          </li>
          <li>
            <Link href={"/rules"}>قوانین</Link>
          </li>
          <li>
            <Link href={"/login-register"}>ورود / عضویت</Link>
          </li>
          {/* <div className={styles.dropdown}>
                        <Link href={'/p-user/'}>
                            <IoIosArrowDown className={styles.dropdown_icons} />
                            حساب کاربری من
                        </Link>
                        <div className={styles.dropdown_content}>
                            <Link href='/p-user/orders'>سفارش ها</Link>
                            <Link href='/p-user/orders'>تیکت های پشتیبانی</Link>
                            <Link href='/p-user/tickets'>کامنت ها</Link>
                            <Link href='/p-user/wishlist'>علاقه مندی</Link>
                            <Link href='/p-user/account-details'>جزئیات اکانت</Link> 
                              
                        </div>
                    </div> */}
        </ul>
        <div className={styles.navbar_icons}>
          <Link href={"/cart"}>
            <FiShoppingCart />
            <span>1</span>
          </Link>
          <Link href={"/wishlist"}>
            <FaRegHeart />
            <span>1</span>
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
