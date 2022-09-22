export const convertTimeToLocalTimeZone = (originTime) => {
  return new Date(
    originTime.getTime() - originTime.getTimezoneOffset() * 60 * 1000
  );
};

export const dateTimeWithoutTime = (originTime) => {
  const newDate = new Date(
    Date.UTC(
      originTime.getUTCFullYear(),
      originTime.getUTCMonth(),
      originTime.getUTCDate()
    )
  );
  return newDate;
};
