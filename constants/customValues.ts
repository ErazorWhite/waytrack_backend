export enum transmissionType {
  MANUAL = "Manual",
  AUTOMATIC = "Automatic",
  VARIABLE = "Continuously Variable",
  DUAL_CLUTCH = "Dual-Clutch",
  SEMI_AUTOMATIC = "Semi-Automatic",
  TIPTRONIC = "Tiptronic",
  AUTOMATED_MANUAL = "Automated Manual",
  ELECTRIC = "Electric Vehicle",
  HYDROSTATIC = "Hydrostatic",
  TORQUE_CONVERTER = "Torque Converter",
}

export enum formType {
  CLASS_A = "Class A",
  CLASS_B = "Class B",
  CLASS_C = "Class C",
  TRAVEL_TRAILER = "Travel Trailer",
  FIFTH_WHEEL_TRAILER = "Fifth-Wheel Trailer",
  POP_UP_CAMPER = "Pop-Up Camper",
  TEARDROP_TRAILER = "Teardrop Trailer",
  TRUCK_CAMPER = "Truck Camper",
  TOY_HAULER = "Toy Hauler",
  EXPANDABLE_TRAILER = "Expandable Trailer",
  HYBRID_TRAILER = "Hybrid Trailer",
  PARK_MODEL = "Park Model",
  CAMPER_VAN = "Camper Van",
  CONVERSION_VAN = "Conversion Van",
  SKOOLIE = "Skoolie",
}

export enum engineType {
  PETROL = "Petrol",
  DIESEL = "Diesel",
  ELECTRIC = "Electric",
  HYBRID = "Hybrid",
  HYDROGEN = "Hydrogen",
  NATURAL_GAS = "Natural Gas",
  LPG = "LPG",
  BIOFUEL = "Biofuel",
  ETHANOL = "Ethanol",
  FLEX_FUEL = "Flex Fuel",
}

export const MINNAME_L = 2;
export const MAXNAME_L = 30;
export const MINPRICE = 0;
export const MINRATING = 0;
export const MAXRATING = 10;
export const MINLENGH = 1;
export const MAXLENGH = 10;
export const MINWIDTH = 1;
export const MAXWIDTH = 5;
export const MINHEIGHT = 1;
export const MAXHEIGHT = 5;
export const MINTANK = 0;
export const MAXTANK = 1800;
export const MAXDESC_L = 1200;