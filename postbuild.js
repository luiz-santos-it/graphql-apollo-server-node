import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

// Get __filename and __dirname equivalents in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

// Resolve the paths for the source and destination
const src = resolve(__dirname, "src/schema.graphql");
const dest = resolve(__dirname, "dist/schema.graphql");

// Copy the file and overwrite if it exists
copyFileSync(src, dest);
console.log(`Copied ${src} to ${dest}`);
