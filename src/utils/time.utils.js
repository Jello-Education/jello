export const timeFormatter = (time) => {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours;
  let minutes;
  let seconds;

  if (reptms.test(time)) {
    const matches = reptms.exec(time);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    else seconds = 0;
  }

  const minutesAndSeconds = `${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(
    -2
  )}`;
  return hours
    ? `${`0${hours}`.slice(-2)}:${minutesAndSeconds}`
    : minutesAndSeconds;
};

export const reptmsToLengthObject = (time) => {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours;
  let minutes;
  let seconds;

  if (reptms.test(time)) {
    const matches = reptms.exec(time);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    else seconds = 0;
  }

  return { seconds, minutes, hours };
};

export const playerTimeFormatter = (time) =>
  new Date(time * 1000).toISOString().substr(14, 5);

export const secondsToPTMS = (time) => {
  const [minutes, seconds] = new Date(time * 1000)
    .toISOString()
    .substr(14, 5)
    .split(':');
  return `PT${minutes}M${seconds}S`;
};
