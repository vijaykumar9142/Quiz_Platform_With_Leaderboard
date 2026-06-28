import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    qualification: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setFormData({
          name: data.name || "",
          phone: data.phone || "",
          dob: data.dob || "",
          qualification:
            data.qualification || "",
          address: data.address || "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const updateProfile = async () => {
    try {
      await axios.put(
        "http://localhost:5000/api/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert(
        "Profile Updated Successfully"
      );
    } catch (error) {
      alert("Update Failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          My Account
        </h1>

        {/* Profile Preview */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-3">
            Profile Details
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {formData.name}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {formData.phone}
          </p>

          <p>
            <strong>DOB:</strong>{" "}
            {formData.dob}
          </p>

          <p>
            <strong>Qualification:</strong>{" "}
            {formData.qualification}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {formData.address}
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="text"
          name="qualification"
          placeholder="Current Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-4"
          rows="3"
        />

        <div className="space-y-3">
          <button
            onClick={updateProfile}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 cursor-pointer"
          >
            Save Changes
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;