import { existsSync } from "node:fs";
import puppeteer from "puppeteer-core";

const edgePaths = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];
const executablePath = edgePaths.find((p) => existsSync(p));
if (!executablePath) throw new Error("Edge não encontrado");

const sizes = [
  [390, 844],
  [1280, 800],
  [1920, 1080],
];

const browser = await puppeteer.launch({ executablePath });
for (const [width, height] of sizes) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await page.screenshot({ path: `scripts/shot-${width}x${height}.png` });
  const [scrollWidth, clientWidth, banner] = await page.evaluate(() => {
    const img = document.querySelector("main picture img");
    const rect = img.getBoundingClientRect();
    return [
      document.documentElement.scrollWidth,
      document.documentElement.clientWidth,
      { top: Math.round(rect.top), height: Math.round(rect.height) },
    ];
  });
  console.log(
    `${width}x${height} → scrollWidth ${scrollWidth} / clientWidth ${clientWidth}` +
      ` ${scrollWidth > clientWidth ? "OVERFLOW-X!" : "ok"} | banner top ${banner.top}, height ${banner.height}`,
  );
  await page.close();
}
await browser.close();
