import { useRef, useState, useEffect } from "react";
//hoc
import Authorizing from "../../layout/authorizing";
//styles
import styles from "../../styles/home.module.scss";
//bootstrap
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
//react tostify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//rrd
import { useRouter } from "next/router";
import { AjaxCall } from "../../helper/ajax-call";
//preloader
import PreLoader from "../../common/loader";
//input component
import Input from "../../common/input";
import SimpleReactValidator from "simple-react-validator";
//ant design
import FormIcon from "../../common/icons";
//import context
import SimpleContext from "../../component/simpleContext";
import PanelHeader from "../../component/panelheader";


const Login = (props) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [usertoken, setUsertoken] = useState('')
  const [userinfo, setUserinfo] = useState('');

  const userInputRef = useRef(null);

  const router = useRouter();


  useEffect(() => {
    const lsToken = localStorage.getItem("token");
    if (lsToken != null) {
      router.push("/panel", "/panel", { shallow: true });
    }
    userInputRef.current.focus()
  }, [])


  //validating
  const [, forceUpdate] = useState();
  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: "پر کردن این فیلد الزامی میباشد",
      min: "کمتر از 3 کاراکتر نباید باشد",
      email: "ایمیل نوشته شده صحیح نمیباشد"
    },
    element: message => <div style={{ color: 'red', fontSize: '14px' }}>{message}</div>
  }));

  const reset = () => {
    setUser("");
    setPassword("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = {
      username,
      password,
      // grant_type: "password",
    };
    // const formData = new FormData();
    // formData.append("username", form.username);
    // formData.append("password", form.password);
    // formData.append("grant_type", form.grant_type);
    if (validator.current.allValid()) {
      router.push("/panel", "/panel", { shallow: true });
      // AjaxCall({
      //   method: "POST",
      //   url: "/login",
      //   data: JSON.stringify(form),
      //   headers: { "Content-Type": "aplication/json" }
      // })
      //   .then((res) => {
      //     const token = res.data.data.token;
      //     const user = res.data.data.user;
      //     localStorage.setItem("token", token);
      //     localStorage.setItem("user", JSON.stringify(user));
      //     toast.success("ورود با موفقیت انجام شد", {
      //       position: "top-right",
      //       closeOnClick: true,
      //     });
      //     //set local on context
      //     setUsertoken(localStorage.getItem("token"))
      //     setUserinfo(JSON.parse(localStorage.getItem("user")))

          
      //     router.push("/panel", "/panel", { shallow: true });
      //     e.target.style.disabled = true
      //   })
      //   .catch((e) => {
      //     if (e.response.status === 406) {
      //       toast.error("نام کاربری شما با رمز عبور مطابقت ندارد", {
      //         position: "top-right",
      //         closeOnClick: true,
      //       });
      //       setLoading(false);
      //     }
      //     else {
      //       e.response.data.errors.username.map((error) => {
      //         toast.error(error, {
      //           position: "top-right",
      //           closeOnClick: true,
      //         });
      //       })
      //       setLoading(false);
      //     }
      //     // setLoading(false);
      //   });
    } else {
      validator.current.showMessages();
      forceUpdate(1);
      setLoading(false);
    }
  };
  return (
    <SimpleContext.Provider value={{ token: usertoken, user: userinfo }}>
      {/* {console.log(usertoken,userinfo)} */}
      <PanelHeader display="d-none" />
      <Authorizing>
        <div className={`${styles.formMain} pt-3`}>
          <p>وارد اکانت خود شوید</p>
          <form>
            <Input
              reference={userInputRef}
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => {
                setUser(e.target.value);
                validator.current.showMessageFor("username");
              }}
              className={styles.subInput}
              name="username"
            />
            {validator.current.message("username", username, "required|min:3")}
            <Input
              type="password"
              placeholder="**********"
              className={styles.subInput}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validator.current.showMessageFor("password")
              }}
              name="password"
            />
            {validator.current.message("password", password, "required|min:5")}

            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex align-items-center">
                <input type="checkbox" id="reload" className={styles.subChek} />
                <label htmlFor="reload">مرا بخاطر بسپار</label>
              </div>
              <div className="d-flex">
                {loading ? <PreLoader /> :
                  <button type="submit" onClick={handleSubmit}>
                    ورود
                  </button>}
              </div>
            </div>
          </form>
          <h3 className="mt-3">یا ورود با</h3>
          <div className={`${styles.iconBox} mt-3 pt-2`}>
            <FormIcon />
          </div>
        </div>
      </Authorizing>
    </SimpleContext.Provider>
  );
};

export default Login;
