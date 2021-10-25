import React from "react";
import { useState } from "react";
//acordion
import { Accordion } from "react-bootstrap";
//styles
import styles from "../styles/admin.module.scss";
import "../styles/admin.module.scss";
//routing
import Link from "next/link";
import { useRouter } from "next/router";

const Oneside = ({ children, title, index, id, icon, itemPath }) => {
  const router = useRouter();
  // const handleSubmit = () => {
  //     router.push({itemPath}, {itemPath} , { shallow: true });
  // }
  return (
    <React.Fragment>
      <Accordion.Item eventKey={index}>
        <Link key={index} href={itemPath}>
          <Accordion.Header
            className={`d-flex  ${
              router.pathname === itemPath ? styles.chosen : ""
            }`}
          >
            <div>
              <span className="ml-3">{icon}</span>
              {title}
            </div>
          </Accordion.Header>
        </Link>
        <Accordion.Body>
          <div>{children}</div>
        </Accordion.Body>
      </Accordion.Item>
      {/* <div onClick={() => setMega((PREV) => !PREV)}>{title}</div> */}
    </React.Fragment>
  );
};

export default Oneside;
