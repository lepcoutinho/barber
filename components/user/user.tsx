// 'use client';

import style from "./style.module.scss";
import Image from "next/image";

import Avatar from "../../Img/Avatar.png";

import {
  GrUser,
  GrNotification,
  GrMoreVertical,
  GrClose,
  GrLogout,
} from "react-icons/gr";

const User = () => {
  return (
    <section className={style.User}>
      <article>
        <div className={style.Img}>
          <div className={style.Notifi}>
            <GrNotification />
          </div>
          <Image src={Avatar} alt={"Logomarca"} />
        </div>

        <input type="checkbox" id="menu" className={style.checkbox} />
        <label htmlFor="menu">
          <GrMoreVertical className={style.IconOpen} />
          <GrClose className={style.IconClose} />
        </label>

        <ul className={style.listMenu}>
          <Image src={Avatar} alt={"Logomarca"} />
          <p>Joaquim Silva</p>
          <li>
            <a>
              {" "}
              <GrUser />
              PERFIL
            </a>
          </li>
          <li>
            <a>
              {" "}
              <GrLogout />
              SAIR
            </a>
          </li>
        </ul>
      </article>

    </section>
  );
};

export default User;
