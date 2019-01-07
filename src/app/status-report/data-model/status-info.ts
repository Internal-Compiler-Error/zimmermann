/**
 * Infered from https://yorkapitest.roada.ca/Help/Api/GET-api-StatusInfo. Please consult Randy Bolton for more information.
 *
 * Below is a rant from a developer with less than 20 hours in JavaScript, take a with a grain of salt. Please consider that it was written
 * in late 2018, JavaScript may very well have improved (Kinda hard to see how it can be in 2018 but nevertheless)
 *
 * Why the F does people think a language that doesn't force any type discipline can be used by any people with half a bit of brain? The
 * same applies to people who use Python in large scale projects, I hope you like debugging because of some sort of BS that only occurs on
 * non typed dynamic languages.
 */

export interface StatusInfo {
  LocDate: Date;
  DevId: number;
  UnitNum: string;
  AltUnitNum: string;
  SOG: number;
  COG: number;
  Lat: number;
  Lon: number;
  DryOn: boolean;
  LiqOn: boolean;
  PWOn: boolean;
  TempVal: number;
  AirTemp: number;
  SurfTemp: number;
  Plow: boolean;
  Wing: boolean;
  Tow: boolean;
  spType: number;
  DryRate: number;
  WetRate: number;
  RateMode: number;
  ioStat: number;
  VehType: number;
}
