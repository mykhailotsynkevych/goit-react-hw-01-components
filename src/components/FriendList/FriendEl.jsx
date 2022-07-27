import s from './FriendList.module.css';

const FriendEl = ({
  isOnline,
  avatar,
  name,
}) => {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </>
  );
};

export default FriendEl;
