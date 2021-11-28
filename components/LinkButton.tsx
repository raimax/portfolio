import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import styles from '../styles/LinkButton.module.scss'

type ILinkButton = {
  content: string;
  link: string;
};

const LinkButton = ({ content, link }: ILinkButton) => {
  return (
    <a href={link} className={styles.link_button}>
      {content}
      <BiLinkExternal />
    </a>
  );
};

export default LinkButton;
