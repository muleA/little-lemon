/* eslint-disable @typescript-eslint/no-unused-vars */
const seededRandom = (seed: number): (() => number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return (): number => (s = (s * a) % m) / m;
};

const fetchAPI = (date: Date): string[] => {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submitAPI = (_formData: any): boolean => true;

export { fetchAPI, submitAPI };
