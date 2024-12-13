interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

type MapKeys = "11" | "12" | "21" | "22" | "30" | "33";

type Maps = {
  [key in MapKeys]: boolean;
};

interface Stats {
  [statsCode: string]: number;
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps;
  stats: Stats;
}
