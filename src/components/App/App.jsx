import userData from "../../data/userData.json";
import { Profile } from "../Profile/Profile.jsx";
import friends from "../../data/friends.json";
import { FriendsList } from "../FriendsList/FriendList.jsx";
import transaction from "../../data/transactions.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory.jsx";

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
