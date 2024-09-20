import React, { useState } from 'react';
import './AvailableSessions.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';

const AvailableSessions = ({total, therapistinfo, setTherapistId, therapistId }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const SendTherapistId = therapistId;
    const navigate = useNavigate();

    const { userDetails } = useSelector((state) => state);
    const userId = userDetails._id;

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const bookAppointment = () => {
        if (!SendTherapistId || !date || !time) {
            toast.error("Please pick a date and time");
            return; // Early return on validation failure
        }

        // Payment processing function
        function payKorapay() {
            window.Korapay.initialize({
                key: import.meta.env.VITE_Ecommerce_key,
                reference: `mindpal${Date.now()}`,
                amount: total, // Ensure 'total' is defined or passed in
                currency: "NGN",
                customer: {
                    name: `${userDetails.firstName} ${userDetails.lastName}`,
                    email: userDetails.email
                }
            });

            Swal.fire({
                title: 'That is great',
                text: "You have taken the first step to mental health care! Your session has successfully been booked.",
                icon: 'success',
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    content: 'my-content-class',
                    confirmButton: 'my-confirm-class',
                    cancelButton: 'my-cancel-class'
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/"); // Use navigate instead of nav
                }
            });
        }
        payKorapay();
       
        // const url = `https://mind-pal-8a5l.onrender.com/api/v1/appointments/book/${userId}`;
        // const data = { SendTherapistId, date, time };
        
        // axios.post(url, data)
        //     .then((res) => {
        //         console.log(res);
        //         toast.success("Session successfully booked!");
        //         navigate("/login");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         toast.error("Error booking session");
        //     });

        
        
    };

    return (
        <div className='AvailableSessions'>
            <div className="AvailableSide">
                <div className="AvailableSideHeader">
                    <h2>Available Sessions</h2>
                    <p>Book 1:1 sessions from the options</p>
                </div>
                <div className="AvailableSideMain">
                    <div className="HoldSelectedAppointmentTherapist">
                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Selected Therapist:</p>
                        <div className='TherapistNameAppointment'>
                            <p>Dr {therapistinfo.firstName} {therapistinfo.lastName}</p>
                        </div>
                    </div>
                    <div className="HoldAppointmentDate">
                        <p>Pick Convenient Date:</p>
                        <input type="date" value={date} onChange={handleDateChange} />
                    </div>
                    <div className="HoldAppointmentsTime">
                        <p>Pick Convenient Time:</p>
                        <input type="time" value={time} onChange={handleTimeChange} />
                    </div>
                </div>
            </div>
            <div className="Continue">
                <button onClick={bookAppointment}>Continue</button>
            </div>
        </div>
    );
};

export default AvailableSessions;
