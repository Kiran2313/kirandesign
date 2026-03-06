import { defineConfig, type PluginOption, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function resendApiPlugin(): PluginOption {
  return {
    name: "resend-api",
    configureServer(server) {
      const env = loadEnv("development", process.cwd(), "");
      server.middlewares.use("/api/send-email", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let body = "";
        for await (const chunk of req) body += chunk;
        const { name, email, message } = JSON.parse(body);

        if (!name || !email || !message) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: "All fields are required" }));
          return;
        }

        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "RESEND_API_KEY not set in .env" }));
          return;
        }

        try {
          const { Resend } = await import("resend");
          const resend = new Resend(apiKey);
          await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "kiran.kethavath97@gmail.com",
            replyTo: email,
            subject: `New message from ${name}`,
            html: `<h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>`,
          });
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true }));
        } catch (err) {
          console.error("Resend error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Failed to send email" }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && resendApiPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
