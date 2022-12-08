import styles from './imageGallery.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
export default function ImageGallery(second) {
  return (
    <ul className={styles.gallery}>
      <li>ImageGallery Набір li із зображеннями</li>
    </ul>
  );
}
