// some basic types so I don't get errors

declare module "convert-svg-to-png" {
  export function convert(
    input: string | SVGElement,
    options?: Options
  ): string;

  interface Options {
    background?: string;
    baseFile?: string;
    baseUrl?: string;
    height?: string | number;
    width?: string | number;
    scale?: number;
    puppeteer?: {};
  }
}
