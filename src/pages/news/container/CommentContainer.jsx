import React from "react";
import Gravatar from "react-gravatar";

export const CommentContainer = ({ data }) => {
  return (
    <div className="flex items-start gap-x-3 mb-3 border-b pb-2">
      <div>
        <Gravatar
          email={data?.email}
          size={100}
          rating="pg"
          default="monsterid"
          className="CustomAvatar-image"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h2 className="text-base font-semibold">{data?.username}</h2>
        <span className="text-sm text-hard">
          {new Date(data?.date).toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <p>{data?.noidung}</p>
      </div>
    </div>
  );
};
