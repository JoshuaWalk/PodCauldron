
import styles from "./Header.module.css"

const Header = () => (
    <div className={styles.navbar}>
    <a href="/">PodCauldron</a>
    <a href="http://cardsandcubes.com">Cards and Cubes</a>
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Bub Club</button>
      <div className={styles.dropdownContent}>
        <a href="/bubClub">Home</a>
        <a href="/bubclub/about">About</a>
      </div>
    </div>
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Rabble Rabble Rabble</button>
      <div className={styles.dropdownContent}>
        <a href="/rabble"> Home </a>
        <a href="/rabble/about"> About </a>
      </div>
    </div>
  </div>
);

export default Header;
