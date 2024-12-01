import React from "react";
import Image from "next/image";
import { images } from "@/common";
import Button from "@/common/Button";
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentSection}>
        <h4 className={styles.subtitle}>About Ironji</h4>
        <h1 className={styles.title}>
          Safe Logistic & Transport Solutions That Saves our Valuable Time!
        </h1>
        <p className={styles.description}>
          Brook presents your services with flexible, convenient and cdpose
          layouts. You can select your favorite layouts & elements for cular ts
          with unlimited ustomization possibilities. Pixel-perfect replication
          of the designers is intended.
        </p>
        <p className={styles.description}>
          Brook presents your services with flexible, convefnient and chient
          anipurpose layouts. You can select your favorite layouts.
        </p>
        <Button
          title="MORE ABOUT US"
          path="/about"
          className={styles.aboutButton}
        />
      </div>
      <div className={styles.imageSection}>
        <Image src={images.truck3} alt="About Image" className={styles.image} />
      </div>
    </div>
  );
};

export default AboutPage;
