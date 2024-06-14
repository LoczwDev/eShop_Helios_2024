import React, { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import { CommentContainer } from "./CommentContainer";

export const FormComment = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [noidung, setNoidung] = useState("");
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const hanldeChangeValue = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "noidung":
        setNoidung(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username,
      email,
      noidung,
      date: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);

    setUsername("");
    setEmail("");
    setNoidung("");
  };

  return (
    <div className="w-full my-10">
      <h2 className="text-lg text-black font-semibold my-3">Viết bình luận</h2>
      <form className="w-full flex flex-col gap-y-3" onSubmit={handleSubmit}>
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-3 w-full gap-x-3">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <input
              onChange={hanldeChangeValue}
              name="username"
              value={username}
              type="text"
              placeholder="Họ và tên"
              className="w-full text-black pl-3 py-2 focus:outline-none border border-inputBor rounded-sm"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <input
              onChange={hanldeChangeValue}
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              className="w-full text-black pl-3 py-2 focus:outline-none border border-inputBor rounded-sm"
            />
          </div>
        </div>
        <div className="w-full">
          <textarea
            onChange={hanldeChangeValue}
            name="noidung"
            value={noidung}
            className="w-full border border-inputBor resize-none pl-3 pt-2 focus:outline-none"
            placeholder="Nội dung"
            rows={7}
            id=""
          ></textarea>
        </div>
        <div className="lg:w-1/5 md:w-1/5 w-1/2">
          <button
            type="submit"
            className="w-full text-white bg-[#516f86] px-2 py-2.5 hover:bg-blueDe duration-200 rounded-md"
          >
            Gửi tin nhắn
          </button>
        </div>

        <div className="my-5">
          <h2 className="text-lg font-bold mb-3">Bình luận {`(${comments.length})`}</h2>
          {comments?.map((item, index) => (
            <CommentContainer data={item} key={index} />
          ))}
        </div>
      </form>
    </div>
  );
};
