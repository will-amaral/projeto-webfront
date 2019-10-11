export function calculateAge(date) {
  const ageDifference = Date.now() - date.getTime();
  const ageDate = new Date(ageDifference);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
