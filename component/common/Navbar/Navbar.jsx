import React, { useState, useEffect, forwardRef } from "react";
import cn from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import s from "./Navbar.module.css";
import HeaderLogo from "../../../public/img/logo.png";
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'

export default function Navbar() {

  const CustomLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest} className={s.navButtonDrop}>
          {children}
        </a>
      </Link>
    )
  })
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
      //const netWorkId = ethereum.net.getId();
      //console.log("accounts", accounts);
      // if () {
      //   setclient({
      //   isConnected: false,
      //   wrongNetwork: true
      // });
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("");
        toast.error("It looks like do not have MetaMask installed.", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });

      toast.success("Connected to MetaMask", {
        position: "top-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
      toast.error("Error connecting to metamask" + error, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const disconnectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error("It looks like do not have MetaMask installed.", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      setclient({
        isConnected: false,
        address: '0x0',
      });
      //window.location.reload();
    } catch (error) {
      toast.error("Error connecting to metamask" + error, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const changeNetwork = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }
       await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
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
    <ToastContainer />
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
                <a href="#about">
                  About
                </a>
              </li>
            <li>
              <a href="#mission">
                  Roadmap
              </a>
            </li>
            <li>
              <a href="#rarity">
                  Traits
              </a>
            </li>
            <li>
              <a href="#team">
                  Team
              </a>
            </li>
            <li>
              <a href="#footer">
                  Contact
              </a>
            </li>
          </ul>
          <div className="d-inline-flex">
            {client.isConnected ? (
              <>
              <Menu>
                {({ open }) => (
                <>
                  <Menu.Button className={cn(s.navButton, open ? 'open' : '' )}>
                    {client.address.slice(0, 4)}...
                    {client.address.slice(38, 42)}
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={s.navItems}>
                      <Menu.Item className={s.navDropLink}>
                          <CustomLink href="#">My Tuffs</CustomLink>
                        </Menu.Item>
                        <Menu.Item className={s.navDropLink}>
                          <CustomLink href="/fuse">Fuse</CustomLink>
                        </Menu.Item>
                        <Menu.Item className={s.navDropLink}>
                          <CustomLink href="" onClick={disconnectWeb3}>Disconnect</CustomLink>
                        </Menu.Item>
                      </Menu.Items>
                  </Transition>
                </>
                )}
                </Menu>
              </>
                ) : (
                  <a className={cn(s.navButton, "button")} onClick={connectWeb3}>
                    Connect Wallet
                  </a>
                )}
            </div>
        </nav>
		</>
	);
};
