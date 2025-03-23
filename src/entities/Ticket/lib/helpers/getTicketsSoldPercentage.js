export function getTicketsSoldPercentage(availableAmount, initialAmount) {
  let availablePercent = (initialAmount / 100) * availableAmount;
  return 100 - availablePercent;
}
