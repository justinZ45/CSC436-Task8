import { getCurrentUser } from "../utils/data";

const { name, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div>
      <br />
      <br />
      <img className="profilePic" src={avatar} alt="profile pic" />
      <div className="profileName flex justify-between items-center">
        <p className="h1">{name}</p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TopContent;
