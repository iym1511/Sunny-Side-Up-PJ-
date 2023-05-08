export interface initialStateType {
  status: string;
  apiData: null | Predict5Api;
  error: string | null;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface List {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf?: number;
  };
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility?: number;
  pop?: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
  rain?: {
    "3h": number;
  };
  snow?: {
    "3h": number;
  };
}

export interface Predict5Api {
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

export interface Predict5Api1 {
  data:{
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
}