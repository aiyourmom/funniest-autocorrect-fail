import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Good morning team! Reminder that the client presentation is at 10am. Please wear something professional and bring your own coffin.";

// Gate: 1-199 characters, single line, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 199 || TEXT.includes("\n") || TEXT.trim().length === 0) {
  throw new Error(`entry fails gate: ${TEXT.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to /output/entry.txt`);
