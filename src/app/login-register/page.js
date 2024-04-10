"use client";
import styles from "../../styles/login-register.module.css";
import Register from "@/components/templates/login-register/register/Register";
import { useState } from "react";
import Login from "@/components/templates/login-register/login/Login";

const login_register = () => {
  const [type, setType] = useState("login");
  const showRegisterForm = () => setType("register");
  const showloginForm = () => setType("login");

  return (
    <div className={styles.login_register}>
      <div className={styles.form_bg} data-aos="fade-up">
        {type == "login" ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>
      <section>
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default login_register;
