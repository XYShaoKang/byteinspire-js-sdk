[![codecov](https://codecov.io/gh/Margaux7/action-test/branch/master/graph/badge.svg?token=A22UJDMWKE)](https://codecov.io/gh/Margaux7/action-test)
[![vulnerabilities](https://snyk.io/test/github/margaux7/action-test/badge.svg)](https://snyk.io/test/github/margaux7/action-test)
[![Build Status](https://github.com/Margaux7/action-test/actions/workflows/test.yml/badge.svg)](https://github.com/Margaux7/action-test/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# 轻服务 SDK

轻服务 SDK，您可以通过这个 SDK 调用轻服务中的函数和上传文件。SDK 目前支持在浏览器和 NodeJS 环境调用。

## 安装

### NPM

```bash
$ npm install --save inspirecloud
```

### YARN

```bash
$ yarn add inspirecloud
```

### 浏览器引入

```html
<script type="text/javascript" src="https://unpkg.com/@byteinspire/inspirecloud/dist/inspirecloud-browser.min.js"></script>
```

### 小程序

#### 手动导入

1. 点击打开 [https://unpkg.com/@byteinspire/inspirecloud/dist/inspirecloud-mp.min.js](https://unpkg.com/inspirecloud/dist/inspirecloud-mp.min.js) 并下载 JS 文件，移动到小程序 `libs` 目录。
2. 在小程序中：
    ```javascript
    // 注意填写正确的相对路径
    const InspireCloud = require('./libs/inspirecloud-mp.min.js');
    ```

#### WePY 和 mpvue

在 [WePY](https://tencent.github.io/wepy/) 或 [mpvue](http://mpvue.com/) 中使用 SDK 时，可以直接通过 NPM 或 YARN 来安装。参见上方 [NPM](#NPM) 或 [YARN](#YARN) 章节。

#### 配置域名白名单

如果要在线上小程序中使用 SDK，需要先配置域名白名单（参见 [网络使用说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)）。具体操作方法为：

1. 登录 [微信公众平台](https://mp.weixin.qq.com/)；
2. 前往 __设置 > 开发设置 > 服务器域名__，点击 __修改__ 按钮；
3. 在「request 合法域名」项中填入 __[YOUR_SERVICE_ID].fn.thelarkcloud.com__。

## 使用

见 [轻服务 JavaScript SDK 快速入门](https://qingfuwu.cn/docs/nodejs/sdk/js-sdk.html#quickstart)。


## 更新日志
见 [轻服务 SDK 更新日志](./CHANGELOG.md)。