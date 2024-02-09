import { FriendListItem } from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendsList.module.css";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
};
