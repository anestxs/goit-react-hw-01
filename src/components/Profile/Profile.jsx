import css from "./Profile.module.css";

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemText}>Followers</span>
          <span className={css.itemNumber}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Views</span>
          <span className={css.itemNumber}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Likes</span>
          <span className={css.itemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
