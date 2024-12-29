export function nowToHHMM() {
  const d = new Date();

  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}
