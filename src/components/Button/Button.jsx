import styles from './button.module.css';
// import PropTypes from 'prop-types';
export default function Button(text, handleClick) {
  return (
    <button type="button" className={styles.Button}>
      Load more
    </button>
  );
}
