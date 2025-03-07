export const formatFormToCartItems = (tickets) => {
    const cartItems = tickets.reduce((acc, ticket) => {
        const existingItem = acc.find(item => item.ticket_tier_id === ticket.ticketId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({
                ticket_tier_id: ticket.ticketId,
                price: ticket.price,
                quantity: 1
            });
        }
        
        return acc;
    }, []);

    return cartItems;
}
