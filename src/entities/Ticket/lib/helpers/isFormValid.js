export const isFormValid = (tickets) => {
  const isValid = tickets.every(ticket => ticket.name.trim());
  if (!isValid) {
    alert('Please fill in all ticket names');
    return;
  }

  if (tickets.length === 0) {
    alert('Please select at least one ticket');
    return;
  }
  
  return isValid;
}
