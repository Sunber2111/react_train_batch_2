import React, { useState } from "react";
import "./profile.css";

interface IProfileDetail {
  id: string;
  name: string;
}

// Props = Properties
interface IProps {
  name: string;
  age: number;
  height?: number; // options thì ko bắt buộc phải truyền => '?'
  data: IProfileDetail; // object
  myArray: number[]; // array
  handleClick2: () => void; // function
}

// truyền props
// có thể truyền trực tiếp chuỗi : string
// ngoài string ra thì các bạn sẽ truyền dữ có thêm syntax {}

interface IUserProfile {
  username: string;
  password: string;
}

// properties
const Profile: React.FC<IProps> = ({ name, height, age, handleClick2 }) => {
  // lấy các props trong object
  // es6
  // const { age, name, height } = props;

  const handleClick = () => {
    alert("helo word");
  };

  const [profile, setProfile] = useState<IProfileDetail>({
    id: "THGDE-123DDS-DAVDE-2FFS",
    name: "nem",
  });

  const [numOfPages, setNumOfPages] = useState(0);

  // state
  const [arrayPages, setArrayPages] = useState([0, 12, 1, 23]);

  const handleChangeName = () => {
    // clone : copy tất cả các giá trị của properties vào trong object khác
    let profileClone = { ...profile }; // object or array
    profileClone.name = name;
    setProfile(profileClone);

    setNumOfPages(10);

    let arrayClone = [...arrayPages];
    arrayClone.push(12); // đẩy vào cuối cùng của mảng
    setArrayPages(arrayClone);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userList, setUserList] = useState<IUserProfile[]>([]);

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleInsertUserProfile = () => {
    let userListClone = [...userList];
    userListClone.push({
      username: username,
      password: password,
    });
    setUserList(userListClone);
  };

  const handleDeleteUser = (index: number) => {
    let userListClone = [...userList];
    userListClone.splice(index, 1);
    setUserList(userListClone);
  };

  return (
    <div className="pro-f" style={{ fontWeight: "bold", color: "white" }}>
      {name} : {age}
      <button onClick={(e) => handleClick()}>Click me</button>
      <button onClick={(e) => handleClick2()}>Click me 2</button>
      <p> Id : {profile.id} </p>
      <p> Name : {profile.name} </p>
      <p> num of pages : {numOfPages} </p>
      <button onClick={(e) => handleChangeName()}> Change name </button>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUsername(e)
        }
        type="text"
        value={username}
      />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangePassword(e)
        }
        type="text"
        value={password}
      />
      <button onClick={(e) => handleInsertUserProfile()}>
        Create new User
      </button>
      <table>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        {userList.map((value, index) => (
          <tr>
            <td>{value.username}</td>
            <td>{value.password}</td>
            <td>
              <button onClick={(e) => handleDeleteUser(index)}>Xóa</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

// props : data bên ngoài truyền vào
// state : có sẵn rtong component

export default Profile;

// bt : tạo 1 form dang nhap có username; password
// CRUD trên table đó
