import React, { useState, useEffect } from "react";
import Locations from "../Locations";
import SearchBar from "../SearchBar";

import { getTimezones, getLocationData } from "../../api/locations";
import { formattedArea, formattedCity } from "../../utils/methods";

const Container = () => {
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);
  const [timezones, setTimezones] = useState();
  const [listTimezones, setListTimezones] = useState([]);
  const [filterTimezones, setFilterTimezones] = useState([]);

  const fetchTimezones = async () => {
    const data = await getTimezones();
    setTimezones(data);
  };

  const fetchLocationData = async (location) => {
    const exist = locations.find((l) => l.timezone === location);
    if (!exist) {
      const locationData = await getLocationData(location);
      setLocations([...locations, locationData]);
    } else {
      alert(`Ya existe ${formattedCity(location)}`);
    }
  };

  const handleDelete = (id) => {
    setLocations(locations.filter((location) => location.timezone !== id));
  };

  useEffect(() => {
    fetchTimezones();
    fetchLocationData("America/Mexico_City");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timezones) {
      let arrayTimezones = [];
      timezones.forEach((timezone) => {
        const area = formattedArea(timezone);
        const city = formattedCity(timezone);
        arrayTimezones.push({ id: timezone, area, city });
      });
      setListTimezones(arrayTimezones);
    }
  }, [timezones]);

  useEffect(() => {
    setFilterTimezones(
      listTimezones.filter(
        (tz) =>
          tz.city.toLowerCase().includes(search.toLowerCase()) ||
          tz.area.toLowerCase().includes(search.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    console.log("locations: ", locations);
  }, [locations]);

  return (
    <div
      className="bg-gray-100 rounded-lg p-8 shadow-xl"
      style={{ width: "1024px" }}
    >
      <SearchBar
        timezones={filterTimezones}
        setSearch={setSearch}
        onSearch={fetchLocationData}
        search={search}
      />
      <Locations locations={locations} onDelete={handleDelete} />
    </div>
  );
};

export default Container;
