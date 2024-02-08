import { create } from "zustand";

const useStore = create((set) => ({
    reservation: [],
    addReservation: (hotel, dates) => (
        set(state => ({
            reservation: [...state.reservation, {hotel, dates}]
        }))
    )
}))

export default useStore;