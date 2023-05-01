export interface Documents {
  address: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    mountain_yn: "N" | "Y";
    main_address_no: string;
    sub_address_no: string;
    zip_code: string;
    x: string;
    y: string;
  };
  road_address: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    underground_yn: "N" | "Y";
    main_building_no: string;
    sub_building_no: string;
    building_name: string;
    zone_no: string;
    x: string;
    y: string;
  } | null;
}

export interface KakaoApiType {
  meta: {
    total_count: number;
  };
  documents: Documents[];
}
