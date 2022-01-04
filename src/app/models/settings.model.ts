type YYYY = number;
type MM = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
type DD = number;

type Money = number;

type InputDate = `${YYYY}-${MM}-${DD}`;

export interface Settings {
  amount: Money;
  beginDate: InputDate;
  endDate: InputDate;
}
