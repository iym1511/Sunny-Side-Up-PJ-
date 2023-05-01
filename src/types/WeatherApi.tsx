export interface Coord {
  lon: number;
  lat: number;
}

export interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface List {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

export interface WeatherData {
  cnt: number;
  list: List[];
}

export interface Params {
  id?: string;
  appid: string;
  lang?: string;
  units?: string;
  lat?: string | null;
  lon?: string | null;
}

export interface initialStateType {
  status1: string;
  status2: string;
  error: string | null;
  apiData: List[] | null;
  apiData2: List | null;
}
