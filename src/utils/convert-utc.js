const convertUTC = (utc) => {
  const unixEpochTimeMS = utc * 1000;
  const d = new Date(unixEpochTimeMS);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const strDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return strDate;
};

export default convertUTC;
