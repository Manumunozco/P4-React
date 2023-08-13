import { useState } from "react";

export const Booking = () => {
  const firstBooking = {
    name: "",
    people: "",
    date: "",
    phone: "",
  };

  const [booking, setBooking] = useState(firstBooking);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form");
    console.log("booking");
  };

  const onChange = (e) => {
console.log(e.target.name)
console.log(e.target.value)
setBooking({ ...booking, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Booking</h1>

      <form className="form gap-5 p-5" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mt-3"
          name="name"
          placeholder="Full Name"
          value={booking.name}
          onChange={onChange}
        />
        <input
          type="number"
          className="form-control mt-3"
          name="people"
          placeholder="Number of People"
          value={booking.people}
          onChange={onChange}
        />
        <input
          type="datetime"
          className="form-control mt-3"
          name="date"
          placeholder="Select Date"
          value={booking.date}
          onChange={onChange}
        />
        <input
          type="phonenumber"
          className="form-control mt-3"
          name="phone"
          placeholder="Phone Number"
          value={booking.phone}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Book a Table
        </button>
      </form>
    </>
  );
};
