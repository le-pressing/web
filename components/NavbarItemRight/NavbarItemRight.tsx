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

  return (
    <NavbarItem
      label={label}
      extraClasses="right"
      onClick={() => dispatch(setModal(modal))}
    >
      <Modal show={modalView === modal} onClose={() => dispatch(setModal(0))}>
        asdf
      </Modal>
    </NavbarItem>
  );
}
