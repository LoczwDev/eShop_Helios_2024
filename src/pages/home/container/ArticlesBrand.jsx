import React from "react";
import { stable } from "../../../constants";
// import stable from "../../../constants";
export const ArticlesBrand = ({ data }) => {
  return (
    <div className="rounded-lg">
        <div className="rounded-lg">
          <div className="rounded-lg">
            <img
              src={stable.UPLOAD_THUMBS_PRODUCT + data?.photo}
              className="rounded-lg object-cover"
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold text-md my-2">{data.title}</p>
          </div>
        </div>
    </div>
  );
};
