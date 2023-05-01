export interface Coord {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export interface PositionType {
  coords: Coord;
  timestamp: number;
}
