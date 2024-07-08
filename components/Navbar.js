import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MADGOAT</div>
      <div className={styles.links}>
        <a href="#">SEARCH</a>
        <a href="#">LOGIN</a>
        <a href="#">MY PAGE</a>
        <a href="#">CART (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;
