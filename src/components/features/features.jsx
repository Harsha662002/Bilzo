import React from "react";
import Styles from "./features.module.scss";

const Features = () => {
  return (
    <div className={Styles.features}>
      <h1 className={Styles.features__title}>Features that suit your needs</h1>
      <div className={Styles.features__list}>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/groups.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              Setup Employees Groups
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Use any parameter to setup distinct employee groups to implement
              policies
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/rule_engine.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              The Definitive Rule Engine
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Configure ANY policy - and if you can’t configure it, we promise
              to work on it <strong>for free</strong>
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/report.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              Customized Reports
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Setup the reports that you want using our seamless reporting
              engine.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.features__list}>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/superior_employee.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              Superior Employee Experience
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Manage all expenses and travel requests easily. Empower your
              employees with personalized reports.
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/easy_integrations.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              Easy Integrations
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Integrate with your upstream, HRMS or your downstream finance
              system to seamlessly deliver value through our Open APIs.
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/configurable_workflow.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              Configurable Workflows
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Configure approvals or rejections. Escalations and reports. At
              will, setup new groups.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.features__list}>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/scan_bill.png" alt="Logo" />
            </div>
            <div
              className={`${Styles.features__item__title} 
            ${Styles["features__item__title--text"]}`}
            >
              Scan any Bill
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              The World's best OCR system backs up this product. All data goes
              in, 99% success.
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/conceige.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              AI-Based Concierge
            </div>
            <div className={Styles.features__item__coming__soon}>
              Coming Soon
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Ask the concierge to change things during your travel - and it
              will trigger relevant actions 24*7.
            </p>
          </div>
        </div>
        <div className={Styles.features__list__item}>
          <div className={Styles.features__list__item__title}>
            <div className={Styles.features__logo}>
              <div className={Styles.features__rectangle}></div>
              <img src="../assets/trip_planning.png" alt="Logo" />
            </div>
            <div className={Styles.features__item__title}>
              AI-Assisted Trip Planning
            </div>
            <div className={Styles.features__item__coming__soon}>
              Coming Soon
            </div>
          </div>
          <div className={Styles.features__content}>
            <p>
              Just tell us what you want to do in normal language and we will
              try and put together the best itinery for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
