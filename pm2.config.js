module.exports = {
  apps: [
    {
      name: "aida-cms",
      script: "npm",
      args: "start",
      instances: "max",
      interpreter: "/bin/bash",
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
      watch: false,
    },
  ],
};
