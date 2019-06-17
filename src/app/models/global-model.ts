export interface IDictionnary {
  word: string;
  meaning: string;
}
export interface IGridResult {
  type: any;
  csInt: number;
  intTotal: number;
  rIR: number;
  remu: number;
  IR: number;
  cs: number;
  rIS: number;
  cout: number;
}

export interface IObjResult {
  netPrice: number;
  grid: [];
}
