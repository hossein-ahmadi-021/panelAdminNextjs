import { Fragment } from "react";
import logo from "../images/logo-27.png";
import Link from "next/link";
import styles from "../styles/home.module.scss"
import { ToastContainer } from "react-toastify";

const Authorizing = (props) => {
  return (
    <div className={styles.frame}>
      <div className={`container ${styles.formparent}`}>
        {<ToastContainer />}
        <section
          className={`${styles.loginSection} d-flex justify-content-center mt-4 mb-4`}
          dir="rtl"
        >
          <div className={`${styles.form} pb-4 pt-5`}>
            <div className={`${styles.formHeader} text-center`}>
              <img className="mt-0 mb-2" src={logo.src} />
              <div className={`${styles.buttonGroup} mt-5`}>
                <Link href="/login">
                  <a>ورود</a>
                </Link>
                <Link href="/register">
                  <a>ثبت نام</a>
                </Link>
                <Link href="/remember">
                  <a>فراموشی رمز عبور</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.formMain} pt-4`}>{props.children}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Authorizing;
