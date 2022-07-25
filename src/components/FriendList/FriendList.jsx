import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>;


};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
