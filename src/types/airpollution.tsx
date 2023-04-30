export interface initialStateType {
    status: string;
    apiData: null | AirPollutionApi;
} 

export interface Components {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
}

export interface List {
    components: Components;
    dt: number;
        main: {
            aqi: number;
        };
}

export interface AirPollutionApi {
        coord: {
            lon: number;
            lat: number;
        };
        list: List[];
        dt: number;
}[]