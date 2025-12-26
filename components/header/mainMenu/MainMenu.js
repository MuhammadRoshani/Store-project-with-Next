import Link from "next/link";
import styles from "./MainMenu.module.css";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import SubMenu from "../subMenu/SubMenu";

export default function MainMenu() {
  // we use this state for laptop sunMenu when show and not
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      <div className={styles.menu}>
        <div className="container">
          <ul>
            {/* first SPA link */}
            <li
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <Link href="/products/laptops">Laptop</Link>
              <RxCaretDown />
              {showSubMenu && <SubMenu />}
            </li>
            {/* second SPA link */}
            <li>
              <Link href="/products/mobiles">Mobile</Link>
              <RxCaretDown />
            </li>
            {/* third SPA link */}
            <li>
              <Link href="/products/tablets">Tablet</Link>
              <RxCaretDown />
            </li>
            {/* forth SPA link */}
            <li>
              <Link href="/products/cameras">Camera</Link>
              <RxCaretDown />
            </li>
            {/* fifth SPA link */}
            <li>
              <Link href="/products/consoles">Console</Link>
              <RxCaretDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
