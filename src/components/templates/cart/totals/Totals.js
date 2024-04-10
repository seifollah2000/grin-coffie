"use client";
import { useState } from "react";
import styles from "./totals.module.css";
import Link from "next/link";
import stateData from "@/utils/stateData";
import Select from "react-select";

const stateOptions = stateData();
const Totals = () => {
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);
  return (
    <div className={styles.totals}>
      <p className={styles.totals_title}>جمع کل سبد خرید</p>

      <div className={styles.subtotal}>
        <p>جمع جزء </p>
        <p>205,000 تومان</p>
      </div>

      <p className={styles.motor}>
        {" "}
        پیک موتوری: <strong> 30,000 </strong>
      </p>
      <div className={styles.address}>
        <p>حمل و نقل </p>
        <span>حمل و نقل به تهران (فقط شهر تهران).</span>
      </div>
      <p
        onClick={() => setChangeAddress((prev) => !prev)}
        className={styles.change_address}
      >
        تغییر آدرس
      </p>
      {changeAddress && (
        <div className={styles.address_details}>
          <Select
            defaultValue={stateSelectedOption}
            onChange={setStateSelectedOption}
            isClearable={true}
            placeholder={"استان"}
            isRtl={true}
            isSearchable={true}
            options={stateOptions}
          />
          <input type="text" placeholder="شهر" />
          <input type="number" placeholder="کد پستی" />
          <button onClick={() => setChangeAddress(false)}>بروزرسانی</button>
        </div>
      )}

      <div className={styles.total}>
        <p>مجموع</p>
        <p>235,000 تومان</p>
      </div>
      <Link href={"/checkout"}>
        <button className={styles.checkout_btn}>ادامه جهت تسویه حساب</button>
      </Link>
    </div>
  );
};

export default Totals;
