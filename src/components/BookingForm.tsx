import React, { /*useEffect, /*useRef,*/ useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


interface Booking {
  author: string,
  resDate: string,
  resTime: string,
  guests: number,
  occasion: string,
}

// interface BookingError {
//   resDate?: string,
//   resTime?: string,
//   guests?: number,
//   occasion?: string,
// }

type reservationList = Record<string, Record<string, Array<Booking>>>;
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
  // const [occasionFieldDisabled, setOccasionFieldDisabled] = useState(true);

  const timeOptions = availableTimes.map((v, k) => {
    return (
      <option key={k} value={v}>{v}</option>
    );
  });

  const formik = useFormik({
    initialValues: {
      author: 'Koto',
      resDate: '',
      resTime: '',
      guests: 0,
      occasion: ''
    },
    onSubmit: (values) => {
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
        author: "Koto",
        resDate: values.resDate,
        resTime: values.resTime,
        guests: Number(values.guests),
        occasion: values.occasion,
      };
      console.log(JSON.stringify(reservations, null, 2))
      formik.resetForm();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      resDate: Yup.string().required("Date is required"),
      resTime: Yup.string().required("Time is required"),
      guests: Yup.number().min(1, "Guests number must be >= 1").required("Guests number is required"),
      // occasion: Yup.string().required("Occasion is required")
    }),
  });

  // const isFormValid = (formik.values.resDate !== "") && (formik.values.resTime !== "") && (formik.values.occasion !== "");

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
      // setOccasionFieldDisabled(false);
    }
    formik.setFieldValue(name, value);
  };

  const handleCancel = () => {
    // e.preventDefault();
    formik.resetForm();
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.validateForm();
    // console.log(44, formik.values)
    if (formik.isValid) {
      formik.handleSubmit(e);
    }
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
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="resDate" className="col-sm-12 col-md-5 col-form-label">Choose date</label>
          <div className="col-sm-12 col-md-7">
            <input
              type="date"
              id="resDate"
              name="resDate"
              min={getDateString(minDate)}
              max={getDateString(maxDate)}
              value={formik.values.resDate}
              className={"form-control" + (formik.errors.resDate ? " is-invalid" : "")}
              onChange={handleChange}
              onClick={handleDateClick}
              onBlur={handleBlur}
            />
          </div>
          {
            formik.errors.resDate ? (
              <div className="col">
                <small className="text-danger">
                  {formik.errors.resDate}
                  </small>
              </div>
            ) : null
          }
        </div>
        <div className="form-group row">
          <label htmlFor="resTime" className="col-sm-12 col-md-5 col-form-label">Choose time</label>
          <div className="col-sm-12 col-md-7">
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
          {
            formik.errors.resTime ? (
              <div className="col">
                <small className="text-danger">
                  {formik.errors.resTime}
                  </small>
              </div>
            ) : null
          }
        </div>
        <div className="form-group row">
          <label htmlFor="guests" className="col-sm-12 col-md-5 col-form-label">Number of guests</label>
          <div className="col-sm-12 col-md-7">
            <input
              type="number"
              id="guests"
              name="guests"
              value={formik.values.guests}
              placeholder="0"
              min="0"
              max={availableGuests}
              className="form-control"
              disabled={guestsFieldDisabled}
              onChange={handleChange}
            />
          </div>
          {
            formik.errors.guests ? (
              <div className="col">
                <small className="text-danger">
                  {formik.errors.guests}
                  </small>
              </div>
            ) : null
          }
        </div>
        <div className="form-group row">
          <label htmlFor="occasion" className="col-sm-12 col-md-5 col-form-label">Occasion</label>
          <div className="col-sm-12 col-md-7">
            <select
              id="occasion"
              name="occasion"
              value={formik.values.occasion}
              className="form-control"
              // disabled={occasionFieldDisabled}
              onChange={handleSelectChange}
            >
              <option value="-1">--</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          {
            formik.errors.occasion ? (
              <div className="col">
                <small className="text-danger">
                  {formik.errors.occasion}
                  </small>
              </div>
            ) : null
          }
        </div>
        <div className="row">
          <div className="col-6">
            <button
              type="reset"
              className="lemon-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <button
              type="submit"
              className="lemon-btn"
              title="Make your reservation"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
