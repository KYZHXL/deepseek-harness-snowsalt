# DeepSeek Harness SnowSalt 🧂

**Everything is a Plugin.** —— 基于 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的产品化魔改版，给你开箱即用的桌面 GUI、插件市场与多供应商一键接入。

> 本仓库是 **SnowSalt** 魔改分支（`deepseek-harness-salt`）。保留上游全部能力，额外提供下述产品化改造。

[English](README.md) | 中文

## ✨ 魔改亮点（SnowSalt 新增）

### 🖥️ ChatGPT / Codex 风格桌面 GUI
- 重做对话区、输入条、侧边栏与空状态欢迎页，现代圆角风格
- Electron 桌面壳：原生窗口 + 系统托盘，双击即用（或浏览器访问）

### 🧩 插件市场（ComfyUI Manager 风格）
- 侧边栏「插件市场」按钮 + 设置 → 插件 → 市场 tab
- 内置插件目录，**一键安装 / 卸载 / 更新** profile 插件
- 底层走 `dsh plugin`（pnpm 转发），扩展即装即用

### ⚡ 供应商一键导入
- 设置 → 模型 → 内置 9 个一键预设
- DeepSeek / OpenAI / Anthropic / Gemini / Groq / OpenRouter / Kimi / MiniMax / Ollama / **中转站**
- 点选预设自动填好 endpoint / 协议 / 模型，只需粘贴 API key

### 🎯 技能管理
- 设置 → 技能 页面：列出全部技能，**模型/用户调用开关、删除**（改写 SKILL.md frontmatter）

### 👤 人格设定（Persona）
- 设置 → 人格设定 页面：编辑 `~/.dsh/AGENTS.md`，为每个会话注入你的全局指令

### 🔧 一键启动整合包
- `整合包/`：桌面壳 + 完整后端，`start.cmd` 一键启动（发布中）

---

## 🚀 快速开始

### 方式一：桌面应用（安装版）

1. 下载 **`DeepSeek-Harness-Setup-0.1.0.exe`**（[Releases](https://github.com/KYZHXL/deepseek-harness-snowsalt/releases)）
2. 安装后，将源码仓库放在安装目录同级（或设 `DSH_BACKEND_DIR` 指向源码目录），首次启动自动拉起后端
3. 双击桌面图标即可使用

### 方式二：源码运行

```bash
# 1. 克隆本分支
git clone -b deepseek-harness-salt https://github.com/KYZHXL/deepseek-harness-snowsalt.git
cd deepseek-harness-snowsalt

# 2. 安装依赖（国内推荐 npmmirror 镜像）
pnpm install --registry=https://registry.npmmirror.com

# 3. 构建
pnpm run build

# 4. 启动 Web UI
pnpm dsh web
# 浏览器打开 http://127.0.0.1:3080
```

### 方式三：一键整合包

下载 `DeepSeek-Harness-SnowSalt-整合包.zip`（发布中），解压后双击 `start.cmd`。

---

## 📁 仓库结构

```
deepseek-harness-master/   # 魔改源码（继承上游，含全部改造）
desktop/                   # Electron 桌面壳（原生窗口 + 托盘）
plugin-manager/            # 独立插件管理器（已集成进 Web UI）
整合包/                     # 一键启动整合包（桌面壳 + 后端）
```

---

# 上游 DeepSeek Harness 简介

DeepSeek Harness（`dsh`）是由 [DeepSeek AI](https://deepseek.com) 开发的开源 agent harness（智能体框架）。它采用**一切皆插件**的架构，并由 [Cordis](https://github.com/cordiverse/cordis) 驱动。

## 开发者预览

DeepSeek Harness 目前处于 _开发者预览_ 阶段，正在快速迭代。**未来将出现破坏兼容性的变更。**

## 通过 `npm` 运行

安装 `Node.js`，然后运行：

```sh
npx @deepseek-ai/dsh web
```

该命令会启动 Web UI，默认地址为 `http://127.0.0.1:3080`。

## 社区与支持

- 欢迎通过 [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions) 提交反馈或 bug 报告。
- 为你的插件仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) 话题，便于被发现。

## 参与贡献

参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

[MIT](LICENSE)

第三方依赖及其许可证见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
