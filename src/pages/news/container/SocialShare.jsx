import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare
} from "react-icons/fa";

export const SocialShare = ({ url, title }) => {
  return (
    <div className="flex items-center gap-x-3">
        <span>Chia sẽ bài viết:</span>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
      >
        <FaFacebookSquare className="text-[#007aff] w-5 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <FaTwitterSquare className="text-[#00acee] w-5 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <FaPinterestSquare className="text-[#930d18] w-5 h-auto" />
      </a>

    </div>
  );
};

