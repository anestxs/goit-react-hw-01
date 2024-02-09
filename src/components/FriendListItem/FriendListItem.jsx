import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ data }) => {
  const statusText = clsx(
    css.status,
    data.isOnline ? css.greenStatus : css.redStatus
  );

  return (
    <div className={css.container}>
      <img className={css.avatar} src={data.avatar} alt="Avatar" width="48" />
      <p className={css.text}> {data.name}</p>
      <p className={statusText}>{data.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
