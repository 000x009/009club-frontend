export const isFormValid = (tickets) => {
  const isValid = tickets.every(ticket => ticket.name.trim());
  if (!isValid) {
    alert('Please fill in all ticket names');
    return;
  }
  
  return isValid;
}
