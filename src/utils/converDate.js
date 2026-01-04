import dateFormat from "dateformat";

// const date = "2026-01-07T09:01:00"

export function convertDate(date){
  return dateFormat(date, "yyyy-mm-dd hh:MM");
}

