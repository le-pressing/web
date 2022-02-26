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
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>Good to see you again.</h3>
          <p>Please log in to your account.</p>
        </div>
        <div className={styles.form}>
          <input />
          <input />
          <button>Log In</button>
        </div>
        <div className={styles.oauth}>
          <p>Or continue with</p>
          <button>Google</button>
          <button>Facebook</button>
        </div>
        <div className={styles.options}>
          Don&apos;t have an account?{' '}
          <a href="">Sign up</a>{' '}|{' '}
          <a href="">Reset password</a>
        </div>
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

  const extraClasses = ["right"];

  return (
    <NavbarItem label={label} extraClasses={extraClasses} onClick={open}>
      {visible && (
        <Modal close={close}>{modalView === 1 ? Login : SignUp}</Modal>
      )}
    </NavbarItem>
  );
}
