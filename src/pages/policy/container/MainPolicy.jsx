import { useQuery } from "@tanstack/react-query";
import React from "react";

import toast from "react-hot-toast";
import parse from "html-react-parser";
import { getPolicyNews } from "../../../services/newsAPI";

export const MainPolicy = ({className}) => {
  const { data: dataPolicy, isLoading: isLoadingPolicy } = useQuery({
    queryFn: () => getPolicyNews({}),
    queryKey: ["policy"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <div className={`${className}`}>
      {!isLoadingPolicy &&
        dataPolicy?.map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold my-3">{item.title}</h2>
            <div>
              <div
              className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: parse(item.noidung),
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
