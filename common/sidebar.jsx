import React, { useRef, useState, useEffect, useCallback } from "react";
//bootstrap
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
//acordion
import { Accordion } from "react-bootstrap";
//styles
import styles from "../styles/admin.module.scss";
//icons from ant-design
import {
  AlignRightOutlined,
  CopyOutlined,
  DashboardOutlined,
  EditOutlined,
  LogoutOutlined,
  PercentageOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Oneside from "./onside";
//img porofile
import porof from "../images/logo-light.png";
import { style } from "dom-helpers";
//router
import { useRouter } from "next/router";

const Side = (props) => {
  const router = useRouter();

  const handleSubmitExit = () => {
    localStorage.clear();
    router.push("/login", "/login", { shallow: true });
  };
  return (
    <React.Fragment>
      <div className={styles.headerSide}>
        <img src={porof.src} className="text-center" alt="" />
      </div>
      <h5 className={styles.title}>منو</h5>
      <Accordion defaultActiveKey="0">
        {items.map((item, index) => (
          <Oneside
            title={item.title}
            index={index}
            icon={item.icon}
            id={item.id}
            itemPath={item.path}
          >
            {item?.childs?.map((list) => (
              <p>{list}</p>
            ))}
          </Oneside>
        ))}
      </Accordion>
      <div className={`d-flex align-items-center ${styles.exit}`}>
        <span className="ml-3">
          <LogoutOutlined />
        </span>
        <button onClick={handleSubmitExit}>خروج</button>
      </div>
    </React.Fragment>
  );
};

export default Side;

//SIDE BAR DATA
const items = [
  {
    title: "داشبورد",
    icon: <DashboardOutlined />,
    path: "/panel",
  },
  {
    title: "کاربران",
    icon: <TeamOutlined />,
    path: "/panel/members",
  },
  {
    title: "دسته ها",
    icon: <CopyOutlined />,
    path: "/panel/categories",
  },
  {
    title: "نویسنده ها",
    icon: <EditOutlined />,
    path: "/panel/authors",
  },
  {
    title: "دوره و فصل ها",
    icon: <AlignRightOutlined />,
    path: "/panel/seasons",
  },
  {
    title: "کدهای تخفیف",
    icon: <PercentageOutlined />,
    path: "/panel/discount",
  },
  {
    title: "درخواست های خرید",
    icon: <ShoppingCartOutlined />,
    path: "/panel/buy",
  },
];
