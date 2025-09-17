import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Ensure we are in the correct directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const versionFilePath = resolve(__dirname, "../public/version.json");

// Use ISO date/time or timestamp
const versionData = {
  version: new Date().toISOString()
};

writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));

console.log(`✅ Version file updated at ${versionFilePath}`);