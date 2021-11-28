import React from "react";
import styles from "../styles/Badge.module.scss";

type IBadgeList = {
  badges: string[];
};

type IBadge = {
  content: React.ReactNode;
};

export const BadgeList = ({ badges }: IBadgeList) => {
  const RenderBadges = () => {
    return badges.map((badge: string) => {
      return <Badge content={badge} key={badge} />;
    });
  };
  return <div className={styles.badge_list}>{RenderBadges()}</div>;
};

export const Badge = ({ content }: IBadge) => {
  return <div className={styles.badge}>{content}</div>;
};
