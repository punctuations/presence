declare module "extract-colors" {
  interface Colors {
    hex: string;
    red: number;
    green: number;
    blue: number;
    area: number;
    saturation: number;
  }

  declare function extractColors(src: string): Promise<Colors[]>;
}
