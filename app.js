const puppeteer = require("puppeteer");
const { chrome } = require("./config");
const PdfUtils = require("./PdfUtils");

(async () => {
  const browser = await puppeteer.launch(chrome);
  const page = await browser.newPage();
  await page.goto("https://www.electronjs.org/zh/docs/latest/api/app");
  const pdfUtils = new PdfUtils(page);
  const menuLength = await pdfUtils.getMenuLength();
  console.log(menuLength);
  const menuName = await pdfUtils.getMenuNameHandle();
  console.log(menuName);
  await pdfUtils.clickMenu();
  const menuHrefArr = await pdfUtils.getHrefInfo();
  console.log(menuHrefArr);
  // 开始下载
  for (let i = 0; i < menuHrefArr.length; i++) {
    console.log("---");
    await pdfUtils.getPdf(menuHrefArr[i]);
    // 判断是否全部下载完毕,如果下载完毕则关闭浏览器
    if (i === menuHrefArr.length - 1) {
      await browser.close();
    }
  }
})();
