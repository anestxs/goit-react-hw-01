import userData from "../../userData.json";
import { Profile } from "../Profile/Profile.jsx";
import friends from "../../friends.json";
import { FriendsList } from "../FriendsList/FriendList.jsx";
import transaction from "../../Transactions.json";
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
