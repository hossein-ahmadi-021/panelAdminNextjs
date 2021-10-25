/* eslint-disable react/jsx-no-comment-textnodes */
//bootstrap
import "../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import { Accordion } from "react-bootstrap";
//styles
import styles from "../styles/admin.module.scss";
//icons
import { MailOutlined } from "@ant-design/icons";

import { useRef, useState } from "react";
import PanelHeader from "../component/panelheader";
import PanelSlideBar from "../component/panelsidebar";
const PanelAdmin = (props) => {
  const ref = useRef();
  // const[active,setActive] = useState(false);
  return (
    <div className={`container-fluid p-0 m-0`} dir="rtl">
      <div className="d-flex">
        {/* panel slidebar start */}
        <div className={`${styles.sideBar}`}>
          <PanelSlideBar />
        </div>
        {/* panel slidebar finish */}
        <div className={`${styles.content}`}>
          {/* panel header start */}
          <header className="h-0 text-right">
            <PanelHeader />
          </header>
          {/* panel header finish */}
          <section className={`${styles.sectionMain}`}>
            {props.children}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PanelAdmin;
