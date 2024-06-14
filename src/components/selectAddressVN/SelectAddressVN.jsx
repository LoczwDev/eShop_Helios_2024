import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

export const SelectAddressVN = ({onSelectChange, onWardChange  }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Lấy dữ liệu bị lỗi:", error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSelectedDistrict("");
    setWards([]);

    const selectedCityData = cities.find((city) => city.Id === value);
    if (selectedCityData) {
      setDistricts(selectedCityData.Districts);
    }
    onSelectChange("city", value);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    setWards([]);

    const selectedCityData = cities.find((city) => city.Id === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (district) => district.Id === value
      );
      if (selectedDistrictData) {
        setWards(selectedDistrictData.Wards);
      }
    }
    onSelectChange("district", value);
  };
  const handleWardChange = (value) => {
    onWardChange(value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Select
        showSearch
        placeholder="Chọn tỉnh thành"
        className="placeholder:text-3xl"
        value={selectedCity}
        onChange={handleCityChange}
        optionFilterProp="children"
        style={{ width: "100%" }}
      >
        {cities.map((city) => (
          <Option key={city.Id} value={city.Id}>
            {city.Name}
          </Option>
        ))}
      </Select>

      <Select
        showSearch
        placeholder="Chọn quận huyện"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        optionFilterProp="children"
        style={{ width: "100%" }}
        disabled={!selectedCity}
      >
        {districts.map((district) => (
          <Option key={district.Id} value={district.Id}>
            {district.Name}
          </Option>
        ))}
      </Select>

      <Select
        showSearch
        placeholder="Chọn phường xã"
        optionFilterProp="children"
        className="py-1"
        style={{ width: "100%" }}
        disabled={!selectedDistrict}
        onChange={handleWardChange}
      >
        {wards.map((ward) => (
          <Option key={ward.Id} value={ward.Id}>
            {ward.Name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
