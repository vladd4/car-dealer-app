export function getYearArray() {
  const currentYear = 2024;
  return Array.from({ length: currentYear - 2014 }, (_, i) => currentYear - i);
}
