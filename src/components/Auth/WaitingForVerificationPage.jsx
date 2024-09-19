import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #c5c4c4;
`;

const VerificationMessage = styled.h2`
  font-size: 27px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;  /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 16px;  /* Adjust font size for mobile */
    margin-bottom: 15px; /* Adjust margin for mobile */
  }
`;

const LoadingAnimation = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 14px solid #34db93;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const WaitingForVerificationPage = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  useEffect(()=>{
        axios.get(`https://mind-pal-8a5l.onrender.com/api/v1/user/verify/${token}`)
        .then((res)=>{
          console.log(res)
          setLoading(false)
          setMessage("You are now verified and can now access Mindpal")
          toast.success(res.data.message)

          // setTimeout(()=>{
          //   navigate("/login")
          // }, 3000)
        })
        .catch((error)=>{
          setLoading(false)
          console.log(error)
          setMessage("Verification Unsuccessful.")
          toast.error('Verification failed.');
        })
        .finally(()=>{
          setLoading(false)
        })
  },[token, navigate])
  return (
    <Container>
      <VerificationMessage>
       {
        loading ? "Account under verification, please wait..." : <p>{message}</p>
       }
        </VerificationMessage>
      {
        loading ? <LoadingAnimation/> : null
      }
    </Container>
  );
};

export default WaitingForVerificationPage;
