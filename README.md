# 极简学术个人主页模板

这是一个无框架、无构建过程的静态网页模板，适合直接托管到 GitHub Pages。

## 你只需要改什么？

主要编辑 `content.js`。这里包含：

- 姓名和单位
- 首页标题和个人介绍
- 研究方向
- 论文列表
- 新闻动态
- 邮箱和办公地址
- CV、Google Scholar、GitHub 等链接

通常不需要修改 `index.html`、`styles.css` 或 `script.js`。

---

## 本地预览

### 方法 1：直接打开

双击 `index.html`。大部分内容可以正常显示。

### 方法 2：用 Python 启动本地网页服务器

在该文件夹中打开终端：

```bash
python3 -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

---

## 添加个人照片

1. 把照片放进 `assets/` 文件夹，例如：

```text
assets/xiang.jpg
```

2. 在 `content.js` 中修改：

```javascript
profilePhoto: "assets/xiang.jpg",
```

建议使用正方形 JPG 或 PNG。

不需要照片时：

```javascript
profilePhoto: "",
```

---

## 添加 CV 和论文 PDF

把 PDF 放进 `files/`，例如：

```text
files/cv.pdf
files/paper-1.pdf
```

然后在 `content.js` 中填写：

```javascript
{ label: "CV", url: "files/cv.pdf" }
```

或：

```javascript
{ label: "Paper", url: "files/paper-1.pdf" }
```

---

## 部署到 GitHub Pages：网页操作版

### 第 1 步：建立 GitHub 仓库

仓库名称必须是：

```text
你的GitHub用户名.github.io
```

例如 GitHub 用户名是 `xiang123`，仓库名称就是：

```text
xiang123.github.io
```

仓库设为 `Public`。

### 第 2 步：上传文件

把本模板中的所有文件上传到仓库根目录，确保 `index.html` 在最外层，而不是再套一层文件夹。

正确：

```text
xiang123.github.io/
├── index.html
├── content.js
├── script.js
├── styles.css
├── assets/
└── files/
```

错误：

```text
xiang123.github.io/
└── academic-homepage-template/
    └── index.html
```

### 第 3 步：启用 Pages

进入：

```text
Repository → Settings → Pages
```

选择：

```text
Deploy from a branch
Branch: main
Folder: / (root)
```

保存。

稍后访问：

```text
https://你的GitHub用户名.github.io/
```

---

## 更新网页

以后只需要：

1. 打开 GitHub 仓库中的 `content.js`；
2. 点击铅笔图标编辑；
3. 修改文字；
4. 点击 `Commit changes`。

网页会自动更新。

---

## 自定义域名

以后可以买一个域名，例如：

```text
xiangresearch.com
```

再在 GitHub Pages 的 `Custom domain` 中绑定。初期完全没有必要，先使用免费的 `github.io` 地址即可。

---

## 常见问题

### 修改后网页没更新

- 等待一两分钟后刷新；
- 强制刷新浏览器；
- 检查 `content.js` 是否少了逗号或引号；
- 在 GitHub 仓库的 `Actions` 页面查看部署状态。

### 页面显示空白

通常是 `content.js` 中 JavaScript 格式错误。重点检查：

- 字符串是否有完整的引号；
- 每个字段之间是否有逗号；
- 数组的 `[` 和 `]` 是否成对；
- 对象的 `{` 和 `}` 是否成对。

### 是否需要安装 Jekyll、React、Node.js？

不需要。该模板是纯 HTML/CSS/JavaScript。
