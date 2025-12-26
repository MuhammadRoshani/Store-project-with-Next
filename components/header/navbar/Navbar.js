import Link from "next/link";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";

export default function Navbar() {
  const { setMenuStatus } = useContext(AppContext);

  return (
    <>
      <div className={styles.navbar}>
        {/* container class : max-width : 1200px in globals.css */}
        <div className="container">
          <ul>
            {/* we use react-icons below for offCanvasMenu in mobile breakPoint show */}
            <li>
              <GiHamburgerMenu
                size="20px"
                onClick={() => setMenuStatus("open")}
              />
            </li>

            {/* first SPA link: */}
            <li>
              <Link href="/">Main page</Link>
            </li>

            {/* second SPA link: */}
            <li>
              <Link href="/articles">Articles</Link>
            </li>

            {/* third SPA link: */}
            <li>
              <Link href="/about">About us</Link>
            </li>

            {/* forth SPA link: */}
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
