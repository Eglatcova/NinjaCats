// ../client/vite.config.ts
import { defineConfig, loadEnv } from "file:///Users/marialisok/Desktop/practicum/NinjaCats/node_modules/vite/dist/node/index.js";
import react from "file:///Users/marialisok/Desktop/practicum/NinjaCats/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/marialisok/Desktop/practicum/NinjaCats/node_modules/vite-plugin-svgr/dist/index.js";
import * as path from "path";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve("../../"), "");
  return {
    server: {
      port: Number(env.CLIENT_PORT) || 3e3
    },
    define: {
      __SERVER_PORT__: env.SERVER_PORT,
      __REDIRECT_URI__: JSON.stringify(env.REDIRECT_URI)
    },
    plugins: [svgr(), react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/style/variables";`
        }
      },
      modules: {
        localsConvention: "dashesOnly"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21hcmlhbGlzb2svRGVza3RvcC9wcmFjdGljdW0vTmluamFDYXRzL3BhY2thZ2VzL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hcmlhbGlzb2svRGVza3RvcC9wcmFjdGljdW0vTmluamFDYXRzL3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFyaWFsaXNvay9EZXNrdG9wL3ByYWN0aWN1bS9OaW5qYUNhdHMvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcGF0aC5yZXNvbHZlKCcuLi8uLi8nKSwgJycpXG4gIHJldHVybiB7XG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiBOdW1iZXIoZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAwLFxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX1NFUlZFUl9QT1JUX186IGVudi5TRVJWRVJfUE9SVCxcbiAgICAgIF9fUkVESVJFQ1RfVVJJX186IEpTT04uc3RyaW5naWZ5KGVudi5SRURJUkVDVF9VUkkpLFxuICAgIH0sXG4gICAgcGx1Z2luczogW3N2Z3IoKSwgcmVhY3QoKV0sXG5cbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIi4vc3JjL3N0eWxlL3ZhcmlhYmxlc1wiO2AsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbW9kdWxlczoge1xuICAgICAgICBsb2NhbHNDb252ZW50aW9uOiAnZGFzaGVzT25seScsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsY0FBYyxlQUFlO0FBQy9ZLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsWUFBWSxVQUFVO0FBR3RCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQVcsYUFBUSxRQUFRLEdBQUcsRUFBRTtBQUNwRCxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixNQUFNLE9BQU8sSUFBSSxXQUFXLEtBQUs7QUFBQSxJQUNuQztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04saUJBQWlCLElBQUk7QUFBQSxNQUNyQixrQkFBa0IsS0FBSyxVQUFVLElBQUksWUFBWTtBQUFBLElBQ25EO0FBQUEsSUFDQSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUFBLElBRXpCLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1Asa0JBQWtCO0FBQUEsTUFDcEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
