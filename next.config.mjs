/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

// import "webpack-external-import";

// module.exports = {
//   // Другие настройки вашего next.config.js

//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // Добавьте плагин webpack-external-import только для клиентской стороны
//       config.plugins.push(
//         new ExternalImportWebpackPlugin({
//           externals: {
//             "telegram-web-app": "https://telegram.org/js/telegram-web-app.js",
//           },
//         })
//       );
//     }

//     return config;
//   },
// };

export default nextConfig;
