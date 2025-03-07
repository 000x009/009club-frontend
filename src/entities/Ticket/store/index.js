import { Store } from '@tanstack/store'


export const ticketStore = new Store({
    tickets: [],
})

export const ticketActions = {
  updateTicketForm: (ticketId, formData) => {
    ticketStore.setState((state) => ({
        tickets: {
        ...state.tickets,
        [ticketId]: formData
      }
    }))
  },

  clearTicketForms: () => {
    ticketStore.setState(initialState)
  },

  getTicketFormsData: () => {
    const state = ticketStore.state
    return Object.entries(state.tickets).map(([ticketId, formData]) => ({
      ticketId,
      tickets: formData.tickets
    }))
  }
}
