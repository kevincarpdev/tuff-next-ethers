import React, { useState, useEffect } from "react";
import cn from "classnames";
import Link from 'next/link'
import s from "./Navbar.module.css";
import HeaderLogo from "../../../public/img/logo.png";
import Image from 'next/image'

export default function Navbar() {
	const [haveMetamask, sethaveMetamask] = useState(true);

  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);
	return (
		<>
				<nav className={cn(s.root, "container")}>
            <Link href="/" className={s.navLink}>
              <Image
                src={HeaderLogo}
                alt={"Tuff Guys"}
                quality="85"
                layout="intrinsic"
                loading="lazy"
                width={80}
                height={80}
						  />
            </Link>
          <ul className={s.mainNav}>
              <li>
                <Link href="/" scroll={true}>
                  About
                </Link>
              </li>
            <li>
              <Link href="/" scroll={true}>
                  Roadmap
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                  Traits
                </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                  Team
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                  Contact
              </Link>
            </li>
          </ul>
          <div className="d-inline-flex">
            <div>
              <button className={cn(s.navButton, "button")} onClick={connectWeb3}>
                {client.isConnected ? (
                  <>
                    {client.address.slice(0, 4)}...
                    {client.address.slice(38, 42)}
                  </>
                ) : (
                  <>Connect Wallet</>
                )}
              </button>
            </div>
          </div>
        </nav>
		</>
	);
};
