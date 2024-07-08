import styles from "../styles/Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>NEW ARRIVAL</li>
        <li>BAGS</li>
        <li>WALLETS</li>
        <li>ACCESSORIES</li>
        <li>SCARVES</li>
        <li>GLOVES</li>
        <li>ABOUT</li>
        <li>LOOKBOOK</li>
        <li>NOTICE</li>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
