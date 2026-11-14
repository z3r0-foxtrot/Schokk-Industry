export type Stat = { label: string; value: string };
export type Section = { heading: string; body: string };
export type RecordItem = {
  id: string; slug: string; name: string; classification?: string; status?: string;
  description: string; image?: string; tags?: string[]; stats?: Stat[];
  abilities?: string[]; upgrades?: Array<Record<string,string>>;
  strengths?: string[]; weaknesses?: string[]; relatedRecords?: string[];
  lastUpdated?: string; sections?: Section[]; features?: string[]; specifications?: Stat[];
  category?: string; categoryTitle?: string; canonStatus?: string; releaseDate?: string; version?: string;
  function?: string; acquisition?: string; limitations?: string[]; resistances?: string[]; weaknesses?: string[];
  encounter?: string; difficulty?: string; environment?: string; hazards?: string[];
  [key: string]: unknown;
};
export type CategoryKey = "towers"|"enemies"|"maps"|"equipment"|"lore"|"mechanics"|"guides"|"updates";
export type Category = { key: CategoryKey; title: string; prefix: string; description: string };
