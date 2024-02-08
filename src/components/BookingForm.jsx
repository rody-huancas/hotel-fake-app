import { Button, Input, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useStore from "../store/store"

export const BookingForm = ({hotel}) => {

  const addReservation = useStore(state => state.addReservation)

  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    addReservation(hotel, data)
    toast.success("Reservation made!")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register('startDate', {required: true})}></Input>
      {errors.startDate && (
        <Typography style={{color: 'red'}}>Start Date in required!</Typography>
      )}
      <Input type="date" {...register('endDate', {required: true})}></Input>
      {errors.endDate && (
        <Typography style={{color: 'red'}}>End Date in required!</Typography>
      )}
      <br />
      <br />
      <Button variant="contained" type="submit">Make Reservation</Button>
    </form>
  )
}
