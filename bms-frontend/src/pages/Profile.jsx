import { useState } from "react";
import BookingHistory from "../components/profile/BookingHistory";
import { tabs } from "../utils/constants";
import { IoIosLogOut, IoMdAdd} from "react-icons/io";
import { FiEdit } from "react-icons/fi";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className="bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 py-2 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 cursor-pointer font-semibold text-sm ${
                activeTab === tab
                  ? "text-[#f74565]"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-screen py-10 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* profile page */}
          {activeTab === "profile" && (
            <>
              {/* {Headers}</> */}
              <div className="bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-md px-6 py-6 flex items-center gap-6 text-white">
                <div className="relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-400 text-4xl">
                  <IoMdAdd size={24} />
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold">hi, amirit raj</h2>
                  <small>
                    <IoIosLogOut size={20} className="inline mr-1" /> Logout
                  </small>
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-white px-6 py-6 rounded-b-md">
                <h3 className="text-lg font-semibold mb-4">Account Details</h3>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-normal">Email Address</p>
                  <div className="flex items-center gap-2">
                    <span>testemail@gmail.com</span>
                    <span className="text-green-600 text-xs rounded">
                      Verified
                    </span>
                  </div>
                  <FiEdit className="ml-2 text-pink-500 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-normal">Phone Number</p>
                  <div className="flex items-center gap-2">
                    <span>922222222</span>
                    <span className="text-green-600 text-xs rounded">
                      Verified
                    </span>
                  </div>
                  <FiEdit className="ml-2 text-pink-500 cursor-pointer" />
                </div>
              </div>

              {/* personal info */}
              <div className="bg-white p-6 mt-4 rounded-md">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-normal">Name</label>
                        <input type="text" value="amit raj" readOnly className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                        <label className="text-sm font-normal">Birthday</label>
                        <input type="text" value="dd-mm-yyyy" readOnly className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-normal">identity (op)</label>
                    <div className="flex gap-2 mt-1">
                        <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                            woman
                        </button>
                        <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                            man
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-normal">Married (op)</label>
                    <div className="flex gap-2 mt-1">
                        <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                            yes
                        </button>
                        <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                            no
                        </button>
                    </div>
                </div>
              </div>
            </>
          )}

          {/* booking section */}
          { activeTab === "Your Orders" && <BookingHistory />}

        </div>
      </div>
    </>
  );
};

export default Profile;
