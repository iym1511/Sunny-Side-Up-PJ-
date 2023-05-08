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

export interface Nationwide {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    id: number;
    name: string;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface NationwideData {
  data: Nationwide

}

export interface Params {
  id?: string;
  appid: string;
  lang?: string;
  units?: string;
  lat?: string | null;
  lon?: string | null;
  q?: string;
}

export interface initialStateType {
  status: string;
  error: string | null;
  apiData: any | null | [];
}

// 220506(토)

export interface Location {
  name: string;
  lat: number;
  lon: number;
}

// 230508(월)
// export interface Nationwide {
//   data:{
//     cod: string;
//     message: number;
//     cnt: number;
//     list: List[];
//     city: {
//       coord: {
//         lat: number;
//         lon: number;
//       };
//       id: number;
//       name: string;
//       country: string;
//       population: number;
//       timezone: number;
//       sunrise: number;
//       sunset: number;
//     };
//   }
// }
