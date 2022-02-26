import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { setModal } from "../../redux/slices/navbarSlice";
import { RootState } from "../../redux/store";

import Modal from "../Modal";
import NavbarItem from "../NavbarItem";
import styles from "./NavbarItemRight.module.scss";

export interface NavbarItemRightType {
  label: string;
  modal: number;
}

export default function NavbarItemRight({ label, modal }: NavbarItemRightType) {
  const dispatch = useDispatch();
  const { modalView } = useSelector((state: RootState) => state.navbar);

  const close = () => dispatch(setModal(0));
  const open = () => dispatch(setModal(modal));

  const visible = modalView !== 0;
  const Login = (
    <div className={styles.modalBody}>
      <div className={styles.form}>
        <span className={styles.header}>Good to see you again.</span>
        <span className={styles.please}>Please log in to your account.</span>
      </div>
      <div className={styles.img}>
        <Image
          alt="login"
          src="/images/login.jpg"
          width={360}
          height={600}
          objectFit="cover"
        />
      </div>
    </div>
  );
  const SignUp = "SignUp";

  return (
    <NavbarItem label={label} extraClasses="right" onClick={open}>
      {visible && (
        <Modal close={close}>{modalView === 1 ? Login : SignUp}</Modal>
      )}
    </NavbarItem>
  );
}
