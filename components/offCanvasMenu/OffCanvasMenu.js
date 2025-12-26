import styles from "./OffCanvasMenu.module.css";
import { MdClose } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";

export default function OffCanvasMenu() {
  const { menuStatus, setMenuStatus } = useContext(AppContext);

  // closeMenu func:
  const closeMenu = () => {
    setMenuStatus("close");
  };

  return (
    <>
      <aside
        className={menuStatus === "open" ? `${styles.offCanvasMenu}` : "close"}
      >
        {/* top: */}
        <div className={styles.offCanvasHeader}>
          <h3>Meghdad IT store</h3>
          <MdClose size="20px" onClick={closeMenu} />
        </div>

        {/* bottom */}
        <ul>
          <li>
            <Link href="/products/laptops">Laptop</Link>
            <RxCaretDown />
          </li>

          <li>
            <Link href="/products/mobiles">Mobile</Link>
            <RxCaretDown />
          </li>

          <li>
            <Link href="/products/tablets">Tablet</Link>
            <RxCaretDown />
          </li>

          <li>
            <Link href="/products/cameras">Camera</Link>
            <RxCaretDown />
          </li>

          <li>
            <Link href="/products/consoles">Console</Link>
            <RxCaretDown />
          </li>
        </ul>
      </aside>
    </>
  );
}
