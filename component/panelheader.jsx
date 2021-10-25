//styles
import styles from "../styles/admin.module.scss";
//img
import porof from "../images/user-1.jpg";
//icon
import { ExpandOutlined, FireFilled } from "@ant-design/icons";
//context
import React, { useContext, useMemo, useState } from "react";
import SimpleContext from "./simpleContext";

const PanelHeader = ({ display }) => {
  const context = useContext(SimpleContext);
  const [f11, setF11] = useState(true);

  const fullScreen = (element) => {
    var elem = document.documentElement;
    console.log(element);
    if (element == true) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    console.log("badbakht");
  };

  console.log(context, "context");
  return (
    <header className={`${display} ${styles.sectionHeader}`}>
      <div>
        <span onClick={() => {fullScreen(f11); setF11(!f11)}}>
          <ExpandOutlined />
        </span>
        <span className="ml-2">
          <FireFilled />
        </span>
        <span>
          <p></p>
          <img src={porof.src} alt="porofile" />
        </span>
      </div>
    </header>
  );
};

export default PanelHeader;
