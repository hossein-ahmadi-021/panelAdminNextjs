import { Fragment } from "react";
import ClickEventsChart from "../../common/charts/clickeventschart";
import CrazyChart from "../../common/charts/crazychart";
import LineChart from "../../common/charts/linechart";
import PolarChart from "../../common/charts/polar";
import RadarChart from "../../common/charts/radarchart";
import ScatterChart from "../../common/charts/scatter";
import PanelAdmin from "../../layout/adminlayout";
import styles from "../../styles/dashboard.module.scss";

const Panel = () => {
  return (
    <Fragment>
      <PanelAdmin>
        <div className="d-flex">
          <div className={styles.chartItem}>
            <PolarChart />
          </div>
          <div className={`${styles.chartItem} w-50`}>
            <p>رضایت</p>
            <CrazyChart />
          </div>
        </div>
      </PanelAdmin>
    </Fragment>
  );
};

export default Panel;
