import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export async function convert(
    url: string,
    width?: string | number,
    height?: string | number
) {
    await chrome.font("https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_normal.ttf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_bold.ttf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_jp_normal.otf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_jp_bold.otf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_kr_normal.otf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_kr_bold.otf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_sc_normal.otf")
    await chrome.font("https://cdn.dont-ping.me/api/&noto_sc_bold.otf")

    const options = process.env.AWS_REGION
        ? {
            args: [...chrome.args, "--disable-web-security"],
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
        }
        : {
            args: ["--disable-web-security"],
            headless: true,
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
        width: 2000,
        height: 1000,
    });
    await page.setContent(url, {waitUntil: "networkidle0"});
    return await page.screenshot({
        type: "png",
        omitBackground: true,
        clip: {
            x: 9,
            y: 8,
            width: width
                ? typeof width === "string"
                    ? parseInt(width)
                    : width
                : 1920,
            height: height
                ? typeof height === "string"
                    ? parseInt(height)
                    : height
                : 1080,
        },
    });
}
