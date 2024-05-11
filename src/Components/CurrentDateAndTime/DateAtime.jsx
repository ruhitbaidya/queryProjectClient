

const DateAtime = () => {
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const munit = date.getMinutes();

const meridiem = hours >= 12 ? 'PM' : 'AM';
const hoursDr = hours  > 12 ? hours - 12 : hours;

const times = `${day <= 9 ? `0${day}` : `${day}`}/${month <= 9 ? `0${month}` : `${month}`}/${year},  ${hoursDr <= 9 ? `0${hoursDr}` : `${hoursDr}`}:${munit <= 9 ? `0${munit}` : `${munit}`} ${meridiem}`
  return times;
}

export default DateAtime