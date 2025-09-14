function wordFreq(text) {
  const lower = text.toLowerCase();
  const clean = lower.replace(/[.,:;!?]/g, "");
  const words = clean.split(/\s+/).filter(Boolean);
  const freq = new Map();
  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  return freq;
}

console.log(wordFreq("Hola, hola! chau."));
