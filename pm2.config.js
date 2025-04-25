module.exports = {
  apps: [
    {
      name: "aida-cms",
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
