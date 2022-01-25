export const getTimezones = async () => {
  try {
    let url = `http://worldtimeapi.org/api/timezone`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getTimezones", error);
  }
};

export const getLocationData = async (location) => {
  try {
    let url = `http://worldtimeapi.org/api/timezone/${location}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getLocationData", error);
  }
};
