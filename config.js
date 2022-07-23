// 配置文件
module.exports = {
  // chrome配置文件
  chrome: {
    headless: true,
    // 忽略 自动化提示
    ignoreDefaultArgs: ["--enable-automation"],
    // 浏览器路径
    // executablePath: "",
    // 浏览器用户数据存放地址
    userDataDir: "./userDataDir",
    slowMo: 30,
    defaultViewport: {
      width: 1536,
      height: 730,
    },
  },
};
