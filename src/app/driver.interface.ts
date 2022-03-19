import MapLocation from "./mapLocation.interface";
import MapTask from "./mapTask.interface";

interface Driver{
  name: string;
  phone: string;
  email: string;
  location: MapLocation;
  tasks:MapTask[];
}

export default Driver
