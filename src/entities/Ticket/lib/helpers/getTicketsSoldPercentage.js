export function getTicketsSoldPercentage(availableAmount, initialAmount) {
  let percentage = (availableAmount / initialAmount) * 100;
  return 100 - percentage.toFixed(0);
}
