import './App.css';

import user from '../data/user.json';
import Profile from './User/User';

import data from '../data/data.json';
import Statistics from './Statistics/Statistics';

import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
