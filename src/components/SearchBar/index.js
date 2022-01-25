import React, { useState } from "react";

const SearchBar = ({ timezones, onSearch, setSearch, search }) => {
  const [isSearch, setIsSearch] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
    setIsSearch(e.target.value !== "" ? true : false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (timezones.length > 0) {
        handleClickTimezone(timezones[0].id);
      }
    }
  };

  const handleClickTimezone = (id) => {
    onSearch(id);
    resetSearch();
  };

  const resetSearch = () => {
    setSearch("");
    setIsSearch(false);
  };

  return (
    <div className="relative mb-10">
      <input
        className="h-10 text-sm rounded-full px-4 w-2/5 bg-gray-200 focus:outline-none"
        placeholder="Find place or timezone - Press ↵"
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={search}
      />
      {isSearch && (
        <div className="absolute w-2/5 bg-gray-100 rounded-lg shadow-xl overflow-hidden z-50">
          {timezones.map((tz, index) => {
            const { id, area, city } = tz;
            // Solo muestra los primeros 6 resultados que encuentra en la busqueda
            if (index < 6) {
              return (
                <div
                  key={id}
                  className="text-sm p-2 border-y-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleClickTimezone(id)}
                >
                  <div className="text-sm font-bold">
                    {area ? `${area}, ${city}` : city}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
