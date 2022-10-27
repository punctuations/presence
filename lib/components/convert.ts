import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export async function convert(
    url: string,
    width?: string | number,
    height?: string | number
) {
    const font_list = [
        "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf",
        "https://cdn.dont-ping.me/api/&noto_normal.ttf",
        "https://cdn.dont-ping.me/api/&noto_bold.ttf",
        "https://cdn.dont-ping.me/api/&noto_jp_normal.ttf",
        "https://cdn.dont-ping.me/api/&noto_jp_bold.ttf",
        "https://cdn.dont-ping.me/api/&noto_kr_normal.ttf",
        "https://cdn.dont-ping.me/api/&noto_kr_bold.ttf",
        "https://cdn.dont-ping.me/api/&noto_sc_normal.ttf",
        "https://cdn.dont-ping.me/api/&noto_sc_bold.ttf"
    ]

    for (let font of font_list) {
        await chrome.font(font)
    }

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
