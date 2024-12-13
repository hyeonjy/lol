import { Champion, Image } from "./Champion";

interface Skins {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: { [leveltipCode: string]: string };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;

  // TODO: 빈 객체만 반환하면 타입은?
  datavalues: {};
  effect: (null | number[])[];
  effectBurn: (null | string)[];
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Passive {
  name: string;
  description: string;
  image: Image;
}

export interface ChampionDetail extends Champion {
  skins: Skins[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  partype: string;
  spells: Spell[];
  passive: Passive;
  recommended: [];
}
