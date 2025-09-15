export function categoriesChip(object) {
  return object.map((obj) => obj.title).join("، ");
}

export function SynonymsAntonyms(obj) {
  return obj.map(w => w.word).join("، ");
}

export function affixChip(affix) {
  return affix.map((fix) => {
    if (fix.kind === "suffix") return `+${fix.title}`;
    if (fix.kind === "infix") return `+${fix.title}+`;
    if (fix.kind === "prefix") return `${fix.title}+`;
  }).join("، ");
}