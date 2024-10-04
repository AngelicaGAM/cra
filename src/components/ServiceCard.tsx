import React from 'react';
import styled from 'styled-components';

interface ServiceCardProps {
  image: string;
  text: string;
}

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
     border-radius: 10px !important; 
    transform: scale(1.1);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover div {
    opacity: 1;
    border-radius: 10px !important; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${Card}:hover & {
  
    transform: scale(1.1);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  border-radius: 10px !important; /* Mantiene el border-radius */
  
  font-size: 24px; /* Texto más grande */
  font-weight: bold; /* Texto en negrita */
`;

const ServiceCard: React.FC<ServiceCardProps> = ({ image, text }) => {
  return (
    <Card>
      <Image src={image} alt="Service" />
      <TextOverlay>{text}</TextOverlay>
    </Card>
  );
};

export default ServiceCard;
