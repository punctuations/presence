import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export async function convert(
  url: string,
  width?: string | number,
  height?: string | number
) {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({
    width: width ? (typeof width === "string" ? parseInt(width) : width) : 2000,
    height: height
      ? typeof height === "string"
        ? parseInt(height)
        : height
      : 1000,
  });
  await page.setContent(url, { waitUntil: "networkidle0" });
  return await page.screenshot({ type: "png", omitBackground: true });
}
