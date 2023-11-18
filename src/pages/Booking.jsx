import "./Booking.css"
import { useState } from "react";
import { dataBase } from "../firebase/fireBase"
import { AnimatedText } from '../components/AnimatedText';


  const firstBooking = {
    name: "",
    people: "",
    date: "",
    phone: "",
    email: "",
  
  };

  export const Booking = () => {
  const [booking, setBooking] = useState(firstBooking);
  const [bookingMade, setBookingMade] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!booking.name || !booking.people || !booking.date || !booking.phone || !booking.email) {
      setError("Please fill in all fields.");
      setBookingMade(false);
      return;
    }
try {
    await dataBase.collection("bookings").add(booking)
    console.log("Submitted Form");
    console.log("booking");
    setBookingMade(true);
    setBooking(firstBooking);
    setError(null);
  } catch (error) {
    console.error("Error submitting form:", error);
      setError("There was an error submitting the form. Please try again.");
      setBookingMade(false);
  }

  };
  
  const onChange = (e) => {
console.log(e.target.name)
console.log(e.target.value)
setBooking({ ...booking, [e.target.name]: e.target.value})
  }

  return (
    <>
        <div className="animated">
  <AnimatedText text="Book and enjoy with Us!!!" className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
</div>

{bookingMade && !error && (
      <div className="success-message">
  Thank you for your booking! We look forward to serving you.
</div>
)}
{error && !bookingMade &&(
        <div className="error-message">
          {error}
        </div>
      )}

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
        <input
          type="email"
          className="form-control mt-3"
          name="email"
          placeholder="Email"
          value={booking.email}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Book a Table
        </button>
        
      </form>
    </>
  );
};
