import React, { /*useEffect, /*useRef,*/ useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


interface Booker {
  name: string,
  guests: number,
  occasion: string,
}

type reservationList = Record<string, Record<string, Array<Booker>>>;
const reservations:reservationList = {};

const maxGuests = 10;           // maximum number of guests per time slot per day
const minDate = new Date();     // minimum or earliest date of booking i.e. today
let maxDate = new Date(minDate.getTime());
maxDate.setDate(maxDate.getDate() + 14);    // maximum or latest date that can be booked (today + 2 weeks)
const allSlots = Array.from({ length: 6 }, (val, k) => `${17 + k}:00`);


const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState(allSlots);
  const [availableGuests, setAvailableGuests] = useState(maxGuests);
  const [timeFieldDisabled, setTimeFieldDisabled] = useState(true);
  const [guestsFieldDisabled, setGuestsFieldDisabled] = useState(true);
  const [occasionFieldDisabled, setOccasionFieldDisabled] = useState(true);

  const timeOptions = availableTimes.map((v, k) => {
    return (
      <option key={k} value={v}>{v}</option>
    );
  });

  const formik = useFormik({
    initialValues: {
      resDate: '',
      resTime: '',
      guests: 1,
      occasion: ''
    },
    onSubmit: (values) => {
      console.log(55, values)
      // submit("", values);
      if (!(values.resDate in reservations)) {
        reservations[values.resDate] = {};
      }
      let n = 0;
      if (values.resTime in reservations[values.resDate]) {
        n = reservations[values.resDate][values.resTime].length;
      } else {
        reservations[values.resDate][values.resTime] = [];
      }
      reservations[values.resDate][values.resTime][n] = {
        name: "Koto",
        guests: Number(values.guests),
        occasion: values.occasion,
      };
      console.log(reservations)
      formik.resetForm();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      resDate: Yup.string().required("Date is required"),
      resTime: Yup.string().required("Time is required"),
      guests: Yup.number().required("Guests number is required"),
      occasion: Yup.string().required("Occasion is required")
    }),
  });

  const isFormValid = (formik.values.resDate !== "") && (formik.values.resTime !== "") && (formik.values.occasion !== "");

  const getDateString = (date:Date) => {
    // return `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;
    return date.toISOString().split('T')[0];
  };

  const handleDateClick = (e:FormEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget);
    setAvailableTimes(allSlots);
  };

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.currentTarget;
    if (name === 'resDate') {
      if (value in reservations) {
        setAvailableTimes(() => {
          return availableTimes.filter(x => {
            if (Object.keys(reservations[value]).includes(x)) {
              const guestsBooked = reservations[value][x].reduce((s, r) => s + r.guests, 0);
              return guestsBooked < maxGuests;
            }
            return true;
          });
        });
      }
      console.log(reservations)
      setTimeFieldDisabled(false);
    } else if (name === 'guests') {
      // if (val in reservations && ) {
      // }
    }
    formik.setFieldValue(name, value);
  };

  const handleBlur = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    formik.validateField(e.currentTarget.name);
  };

  const handleSelectChange = (e:React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    // console.log(e.currentTarget.name, e.currentTarget.value)
    const {name, value} = e.currentTarget;
    if (name === 'resTime') {
      setGuestsFieldDisabled(false);
      setAvailableGuests(() => {
        let guests = maxGuests;
        if ((formik.values.resDate in reservations) && (value in reservations[formik.values.resDate])) {
          guests -= reservations[formik.values.resDate][value].reduce((s, r) => s + r.guests, 0);
        }
        return guests;
      });
      setOccasionFieldDisabled(false);
    }
    formik.setFieldValue(name, value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(44, formik.values)
    formik.handleSubmit(e);
    // console.log(dateInputRef.current)
    setTimeFieldDisabled(true);
    setGuestsFieldDisabled(true);
    setOccasionFieldDisabled(true);
    setAvailableTimes(allSlots);
  };

  // useEffect(() => {
  //   if (dateInputRef) {
  //     // dateInputRef.current?.datepicker({
  //     // });
  //   }
  //   // resetForm();
  // }, [dateInputRef]);

  return (
    <>
      <form onSubmit={handleSubmit} style={{ 'display': 'grid', 'width': '500px', gap: '20px' }}>
        <div className="form-group row">
          <label htmlFor="resDate" className="col-5 col-form-label">Choose date</label>
          <div className="col-7">
            <input
              type="date"
              id="resDate"
              name="resDate"
              min={getDateString(minDate)}
              max={getDateString(maxDate)}
              value={formik.values.resDate}
              className="form-control"
              onChange={handleChange}
              onClick={handleDateClick}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="resTime" className="col-5 col-form-label">Choose time</label>
          <div className="col-7">
            <select
              id="resTime"
              name="resTime"
              value={formik.values.resTime}
              className="form-control"
              disabled={timeFieldDisabled}
              onChange={handleSelectChange}
            >
              <option value="-1">--</option>
              {timeOptions}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="guests" className="col-5 col-form-label">Number of guests</label>
          <div className="col-7">
            <input
              type="number"
              id="guests"
              name="guests"
              value={formik.values.guests}
              placeholder="1"
              min="1"
              max={availableGuests}
              className="form-control"
              disabled={guestsFieldDisabled}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="occasion" className="col-5 col-form-label">Occasion</label>
          <div className="col-7">
            <select
              id="occasion"
              name="occasion"
              value={formik.values.occasion}
              className="form-control"
              disabled={occasionFieldDisabled}
              onChange={handleSelectChange}
            >
              <option value="-1">--</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <input
          type="submit"
          className="lemon-btn"
          value="Make Your reservation"
          disabled={!isFormValid || JSON.stringify(formik.errors) !== '{}'}
        />
      </form>
    </>
  );
};

export default BookingForm;
