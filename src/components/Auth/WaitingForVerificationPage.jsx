import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import gif from '../../assets/verifying.gif'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #E4E4E4;
`;

const VerificationMessage = styled.h2`
  font-size: 36px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #26ac72;
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
const HoldHold = styled.div`
  height: 110px;
  width: 110px;
`
const HoldGif = styled.img`
  height: 100%;
  width: 100%;
`


const WaitingForVerificationPage = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(()=>{
        axios.get(`https://mind-pal-8a5l.onrender.com/api/v1/user/verify/${token}`)
        .then((res)=>{
          console.log(res)
          if(res.status === 200){
            Swal.fire({
              title: 'Hi there! 😊👋',
              text: `${res.data.message}`,
              icon: 'success',
              customClass: {
                popup: 'my-popup-class',          // Custom class for the popup
                title: 'my-title-class',          // Custom class for the title
                content: 'my-content-class',      // Custom class for the content
                confirmButton: 'my-confirm-class', // Custom class for the confirm button
                cancelButton: 'my-cancel-class'   // Custom class for the cancel button
              },
            }).then((result) => {
              if (result.isConfirmed) {
                nav(`/login`);
              }
            });
          }
        })
        .catch((error)=>{
          setLoading(false)
          console.log(error)
        })
        .finally(()=>{
          setLoading(false)
        })
  },[token, navigate])
  return (
    <Container>
      <VerificationMessage>
        Verifying
        </VerificationMessage>
        <HoldHold>
          
        <HoldGif src={gif} alt=""/>
        </HoldHold>
    </Container>
  );
};

export default WaitingForVerificationPage;
