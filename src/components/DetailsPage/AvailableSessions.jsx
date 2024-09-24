import React, { useEffect, useState } from 'react';
import './AvailableSessions.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';

const AvailableSessions = ({total, setBookSession, therapistinfo, therapistId }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const SendTherapistId = therapistId;
    const [proceedtoChoose, setProceedtoChoose] = useState(false)
    const [minDate, setMinDate] = useState("");
    const [minTime, setMinTime] = useState("");
    const navigate = useNavigate();
    const { userDetails } = useSelector((state) => state);
    const userId = userDetails._id;

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };
    const getTime = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
    console.log()
    const minimalTime = getTime >= time
    console.log(minimalTime)

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    
    const [Processing, setProcessing] = useState(false)
    const [done, setDone] = useState(false)
    const {token} = useSelector((state)=> state)
    
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    const callApi =async()=>{
            const url = `https://mind-pal-8a5l.onrender.com/api/v1/appointment/book/${userId}`;
            const data = { therapistId:SendTherapistId, date, time };
        
            axios.post(url, data, {headers})
                .then((res) => {
                    console.log(res)
                    setProcessing(false)
                    setDone(true)
                    Swal.fire({
                        title: 'That is great',
                        text: "You have taken the first step to mental health care! Your session has successfully been booked. Please check your email for your appointment details",
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
                            navigate("/"); 
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                    setBooking(false)
                    toast.error("Error booking session");
                })
                .finally(()=>{
                    setProcessing(false)
                })
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(()=>{
        if(Processing === true){
            callApi()
        }   
    }, [Processing])

    if(done === true){
        scrollToTop()
        navigate("/")
    }

    
    const bookAppointment = () => {
        if (!SendTherapistId || !date || !time || minimalTime === true) {
            toast.error("Please pick a future date and time");
            return; 
        }
        
            function payKorapay() {
                window.Korapay.initialize({
                    key: import.meta.env.VITE_Ecommerce_key,
                    reference: `mindpal${Date.now()}`,
                    amount: total, 
                    currency: "NGN",
                    customer: {
                        name: `${userDetails.firstName} ${userDetails.lastName}`,
                        email: userDetails.email
                    },
                    onSuccess: ()=>{
                        setProcessing(true)
                    }
                });   
                  
                
    
                
            }
            payKorapay();
  
    };

    return (
        <div className='AvailableSessions'>
            <div className="AvailableSide">
                {
                    proceedtoChoose ? 
                    <>
                <div className="AvailableSideHeader">
                    <h2>Available Sessions</h2>
                    <p>Book 1:1 sessions from the options</p>
                </div>
                <div className="AvailableSideMain">
                    {
                        Processing ? <div className="holdProcessing">
                             <h2>Processing...</h2> 
                        </div>:
                        <>
                        <div className="HoldSelectedAppointmentTherapist">
                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Selected Therapist:</p>
                        <div className='TherapistNameAppointment'>
                            <p>Dr {therapistinfo.firstName} {therapistinfo.lastName}</p>
                        </div>
                    </div>
                    <div className="HoldAppointmentDate">
                        <p>Pick Convenient Date:</p>
                        <input type="date" value={date} min={minDate}  onChange={handleDateChange} />
                    </div>
                    <div className="HoldAppointmentsTime">
                        <p>Pick Convenient Time:</p>
                        <input type="time" value={time} min={minimalTime}  onChange={handleTimeChange} />
                    </div>
                        </>
                    }
                </div>
                    </>
                    :
                <>
                <div className="BeforeAvailable">
                    <h2>Booking Procedure</h2>
                </div>
                <div className="AvailableSideMain">
                    <ul style={{padding: "20px "}}>
                        <li>You have picked a therapist you wish to have a session with. To cancel and pick another therapist, please click on close button to go to the therapist page and select another therapist.   </li>
                        <li>If you wish to continue with this therapist, You have to pick a time and date convenient for you.</li>
                        <li>After picking a convenient date and time, secure your session with Payment.</li>
                        <li>When your payment has been made, you will receive a mail with your appointments details.</li>
                    </ul>
                    <div className="AvailableProceed">
                        <h4>To proceed please click on the continue button.</h4>
                    </div>
                </div>
                </>
                }
            </div>
           <>
                {
                    Processing ? null :
                    <div className="Continue">
                    {
                        proceedtoChoose ? 
                        <button onClick={bookAppointment}>Pay</button>
                        :
                    <button onClick={()=> setProceedtoChoose(true)}>Continue</button>
                    }
                </div>
                }
           </>
            <ToastContainer/>
        </div>
    );
};

export default AvailableSessions;