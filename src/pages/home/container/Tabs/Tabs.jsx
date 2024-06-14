import { useEffect, useRef, useState } from "react";
import { ProductSelling } from "../ProductSelling";
import { ButtontTab } from "./ButtontTab";
import { AriticelsTabs } from "./contentTabs/AriticelsTabs";
import { ContentTabs } from "./contentTabs/ContentTabs";

export const Tabs = ({ className, dataProductNews, isLoading }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      img: "https://bizweb.dktcdn.net/thumb/thumb/100/508/659/themes/939030/assets/collection_tab_1.png?1710404714890",
      title: "Đồng hồ nam",
      content: (
        <ContentTabs
          data={dataProductNews?.filter((item) => item.id_list !== 111)}
          className={
            "border border-[#ebebeb]  my-2 lg:w-[220px] md:w-[22%] w-[45%]"
          }
        />
      ),
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/thumb/100/508/659/themes/939030/assets/collection_tab_2.png?1710404714890",
      title: "Đồng hồ nữ",
      content: (
        <ContentTabs
          data={dataProductNews?.filter((item) => item.id_list === 109)}
          className={
            "border border-[#ebebeb] my-2 lg:w-[220px] md:w-[22%] w-[45%]"
          }
        />
      ),
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/thumb/100/508/659/themes/939030/assets/collection_tab_3.png?1710404714890",
      title: "Đồng hồ đôi",
      content: (
        <ContentTabs
          data={dataProductNews?.filter((item) => item.id_list === 114)}
          className={
            "border border-[#ebebeb] my-2 lg:w-[220px] md:w-[22%] w-[45%]"
          }
        />
      ),
    },
  ];
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <section className={`${className}`}>
      <h2 className="text-2xl font-bold text-center uppercase my-2">
        Bán chạy nhất
      </h2>
      <div className="relative">
        <div className="flex space-x-3 w-full lg:justify-center md:justify-center justify-normal overflow-y-auto">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                <ButtontTab
                  img={tab.img}
                  title={tab.title}
                  active={activeTabIndex === idx}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </section>
  );
};
