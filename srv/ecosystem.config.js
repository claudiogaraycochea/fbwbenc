module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "WBENC-FB-server-" + (process.env.NODE_ENV || "local"),
      script: "./server.js",
      env: {
        PORT: 3000,
        SHARED_SECRET: "UIEDFSLSA^dassajio328789",
        MONGODB_URI: "mongodb://localhost/wbenc-local"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 6010,
        SHARED_SECRET: "UIEDFSLSA^dassajio328789",
        MONGODB_URI: "mongodb://localhost/wbenc-production"
      },
      env_staging: {
        NODE_ENV: "staging",
        PORT: 6011,
        SHARED_SECRET: "UIEDFSLSA^dassajio328789",
        MONGODB_URI: "mongodb://localhost/wbenc-staging"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      key: "~/.ssh/gala.pem",
      user: "ubuntu",
      host: "13.57.107.178",
      ref: "origin/production",
      repo: "git@github.com:AzumoHQ/wbenc.git",
      path: "/home/ubuntu/services/wbenc/production",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "pre-setup": "echo 'commands or local script path to be run on the host before the setup process starts'",
      "post-setup": "echo 'commands or a script path to be run on the host after cloning the repo'",
      "post-deploy": "cd ./server; npm i && pm2 startOrRestart ecosystem.config.js --env production --force",
      env: {
        NODE_ENV: "production"
      }
    },
    staging: {
      key: "~/.ssh/gala.pem",
      user: "ubuntu",
      host: "13.57.107.178",
      ref: "origin/staging",
      repo: "git@github.com:AzumoHQ/wbenc.git",
      path: "/home/ubuntu/services/wbenc/staging",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "pre-setup": "echo 'commands or local script path to be run on the host before the setup process starts'",
      "post-setup": "echo 'commands or a script path to be run on the host after cloning the repo'",
      "post-deploy": "cd ./server; npm i && pm2 startOrRestart ecosystem.config.js --env staging --force",
      env: {
        NODE_ENV: "staging"
      }
    }
  }
};
