import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  let photo =
    "https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg";
  if (user.photoURL) {
    photo = user.photoURL;
  }
  return (
    <>
    <h1 className="text-center text-3xl my-5"> Profile</h1>
      <div className="hero min-h-screen bg-base-200 w-10/12 my-5 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{userInfo?.name}</h1>
            <p className="py-6">{userInfo?.email}</p>
            <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
