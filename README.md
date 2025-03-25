# tree-node-cli

## 安装

作为一次性命令工具
```bash
npx @hotdogc1017/tree-node-cli@latest
```

作为开发依赖
```bash
npm add -D @hotdogc1017/tree-node-cli
```

## 使用
拓展了原有的`tree-node-cli`，支持以下选项：

  - `--allow-gitignore`(node中为`allowGitignore`)：忽略`.gitignore`文件规则，显示所有文件。默认为`false`。


其他使用方式和配置请参考[源仓库的README](https://github.com/yangshun/tree-node-cli)

## 说明
包含以下改动：
  - 不再支持获取文件夹大小：fast-folder-size依赖不支持ESM。因此移除了fast-folder-size依赖。
  - 遵守`.gitignore`文件规则：默认排除`.gitignore`文件中忽略的文件。但可以通过指定选项来忽略此规则：在node中传入`allowGitignore`选项；在CLI中传入`--allow-gitignore`选项。

## 感谢
Thanks to [yangshun](https://github.com/yangshun)
