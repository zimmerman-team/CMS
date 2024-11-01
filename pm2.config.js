module.exports = {
  apps: [
    {
      name: "the-data-explorer-cms",
      script: "yarn",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      max_memory_restart: "2G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      autorestart: true,
      restart_delay: 100,
      watch: true,
      ignore_watch: [
        ".git",
        ".circle",
        ".vscode",
        "README.md",
        "yarn.lock",
        ".gitignore",
        "node_modules",
        "package.json",
        "tsconfig.json",
      ],
    },
  ],
};
