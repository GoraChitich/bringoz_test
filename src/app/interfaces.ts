export interface Driver{
  name: string;
  phone: string;
  email: string;
  location: MapLocation;
  tasks:MapTask[];
}

export interface MapLocation{
  lat: number;
  lng: number;
}

export interface MapTask{
  id: string;
  location: MapLocation
}




