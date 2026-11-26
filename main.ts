// Deadpan forecast for Mirewick, a city that does not exist.
// The entry is one line of at most 160 characters, written verbatim to
// /output/entry.txt. It is assembled below from its three beats — a
// concrete scene, an escalation, and a short punch — then checked against
// the gate's length bound before anything is written. The program reads
// nothing from the environment and makes no network calls.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 160;

// Beat 1: the broadcast scene (invented city, sky, temperature).
const SCENE = "Tonight in Mirewick: clear skies, minus 4,";
// Beat 2: the escalation (an absurd but flatly stated event).
const ESCALATION =
  "and the northern lights have filed a formal noise complaint";
// Beat 3: the punch, three words, delivered deadpan.
const PUNCH = "against the streetlamps.";

function buildEntry(): string {
  const line = [SCENE, ESCALATION, PUNCH].join(" ");
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} chars, gate allows 1-160`);
  }
  return line;
}

function main(): void {
  const entry = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();
