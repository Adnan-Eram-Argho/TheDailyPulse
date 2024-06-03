import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


function EditProfile() {
    const data = useLoaderData();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
  
      const name = form.name.value;
  
      const age = form.age.value;
      const mobileNumber = form.mobileNumber.value;
  
      const userData = {
        name,
        age,
        mobileNumber,
        //   email: data?.email,
      };
  
      fetch(
        `http://localhost:5000/user/${data?.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
        toast.success('Successfully Edited!')
    };
  return (
    <div className="w-10/12 p-16">
      <h1 className="text-center text-3xl">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="w-full py-5 px-7 border rounded-xl"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="w-full py-5 px-7 border rounded-xl"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="">User Age</label>
          <input type="text" name="age" className="w-full py-5 px-7 border rounded-xl" />
        </div>
        <div className="mb-4 ">
          <label htmlFor="">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            className="w-full py-5 px-7 border rounded-xl"
          />
        </div>
        <div className="mb-4 ">
          <input
            type="submit"
            value="Update Profile"
            className="w-full py-5 px-7 border btn btn-neutral"
          />
        </div>
      </form>
    </div>
  )
}

export default EditProfile
