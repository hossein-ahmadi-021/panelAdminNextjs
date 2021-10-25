import { useRef, useEffect,Fragment } from "react";
import Authorizing from "../../layout/authorizing";
import styles from "../../styles/home.module.scss";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import FormIcon from "../../common/icons";
import Input from "../../common/input";


const Register = () => {
  const userInputRef = useRef(null);
  useEffect(() => {
    userInputRef.current.focus()
    console.log(userInputRef)
  })
  return (
    <Fragment>
      <Authorizing>
        <div className={`${styles.formMain} pt-3`}>
          <p>ساخت اکانت</p>
          <form action="#">
            {/* <input reference={userInputRef} type="text" placeholder="نام" className={styles.subInput} /> */}
            <Input
            reference={userInputRef}
            type="text"
            placeholder="نام"
            className={styles.subInput}
            name="username"
          />
            <input
              type="text"
              placeholder="ایمیل"
              className={styles.subInput}
            />
            <input
              type="password"
              placeholder="**********"
              className={styles.subInput}
            />
            <div className="d-flex justify-content-between mt-4">
              <button>ثبت نام</button>
            </div>
          </form>
          <h3 className="mt-3">یا ورود با</h3>
          <div className={`${styles.iconBox} mt-3`}>
              <FormIcon/>
          </div>
        </div>
      </Authorizing>
    </Fragment>
  );
};

export default Register;
