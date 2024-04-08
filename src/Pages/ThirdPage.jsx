import React, {useState} from 'react'
import { IoIosLink } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";


const ThirdPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  

  // input function
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

 

  // modal button
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // send a message
  const handleSendButtonClick = (e) => {
    e.prevetDafault();
    console.log("gkjh")
  };

  return (
    <div className="px-6 pt-4">
      <div className="flex justify-between border-b border-gray-400 px-12 items-center">
        <div className="flex items-center">
          <h2 className="capitalize font-semibold text-md text-[#151d48]">
            shahzad ali
          </h2>
          <h4 className="text-sm pl-4 text-[#151d48]">BlockChain Job Post</h4>
          <h4 className="text-sm pl-4 text-[#151d48]">Create a Contract</h4>
          <h4 className="capitalize text-sm pl-4 text-[#151d48]">
            view contract
          </h4>
        </div>
        <button
          onClick={toggleModal}
          className="capitalize underline p-2 text-[#151d48] cursor-pointer"
        >
          Message Setting
        </button>
      </div>
      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white w-[400px] rounded shadow-lg">
              <div className="p-8 w-[220px] rounded-xl absolute bottom-20 left-[210px] bg-[#faf8f8] ">
                <div className="border  border-gray-400 p-2">
                  <p
                    onClick={toggleModal}
                    className="capitalize text-[10px] text-[#7b7f97] cursor-pointer"
                  >
                    start new conversation
                  </p>
                  <p
                    onClick={toggleModal}
                    className="capitalize text-[10px] text-[#7b7f97] cursor-pointer "
                  >
                    files & links
                  </p>
                  <p
                    onClick={toggleModal}
                    className="capitalize text-[10px] text-[#7b7f97] cursor-pointer "
                  >
                    message setting
                  </p>
                  <p
                    onClick={toggleModal}
                    className="capitalize text-[10px] text-[#7b7f97] cursor-pointer"
                  >
                    notepad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-80  bg-[#f9fafb] rounded-xl mt-6 p-3">
        <div className="flex justify-between items-center">
          <p className="text-[#1f1f1f]  text-[10px] ">3 Minutes ago</p>
          <p className="text-[#1f1f1f]  text-[10px] ">12/3/2024</p>
        </div>
        <h2 className="capitalize font-semibold text-md py-1">shahzad ali</h2>
        <p className="text-[#1f1f1f] capitalize  text-[12px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe
          esse rerum.
        </p>
      </div>

      <div className="w-80  bg-[#e3e4e9] rounded-xl  p-3 mt-6 float-end  mr-10  ">
        <div className="flex justify-between items-center">
          <p className="text-[#1f1f1f]  text-[10px] ">3 Minutes ago</p>
          <p className="text-[#1f1f1f]  text-[10px] ">12/3/2024</p>
        </div>
        <h2 className="capitalize font-semibold text-md py-1">shahzad ali</h2>
        <p className="text-[#1f1f1f] capitalize  text-[12px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe
          esse rerum.
        </p>
      </div>

      <div className="flex bg-[#f0f0f0] w-[800px] m-auto px-4 py-4 rounded-2xl item-center top-56  shadow-[0 0 10px] to-black relative">
        <input
          className=" bg-transparent text-[13px] pl-2 outline-none w-full capitalize  "
          type="text"
          placeholder="can't send a message in archived room"
          value={message}
          onChange={handleMessageChange}
        />
       
          <button onClick={handleSendButtonClick} className="absolute top-[18px] right-3 cursor-pointer">
            <IoSend />
          </button>
     
        <div className=" text-[18px] flex absolute right-0 pr-10 ">
          <div className="pr-2">
            <IoIosLink />
          </div>
          <IoCameraOutline />
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
