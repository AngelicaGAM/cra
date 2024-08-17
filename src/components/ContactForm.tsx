import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url('https://your-image-url.com');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const OverlayText = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
  font-size: 1rem;
`;

const Select = styled.select<{ error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
  font-size: 1rem;
`;

const TextArea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
  font-size: 1rem;
  resize: none;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    service: false,
    message: false,
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, service, message } = formValues;
    const newErrors = {
      name: name === '',
      email: !validateEmail(email),
      service: service === '',
      message: message === '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      // Enviar el correo usando EmailJS
      emailjs.send(
        'your_service_id',
        'your_template_id',
        formValues,
        'your_user_id'
      ).then(() => {
        alert('Message sent successfully!');
        setFormValues({
          name: '',
          email: '',
          service: '',
          message: '',
        });
      }).catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message.');
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <ImageSection>
        <OverlayText>
          Your Text Here
        </OverlayText>
      </ImageSection>
      <FormSection>
        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Contact Us</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formValues.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            {errors.name && <ErrorMessage>Name is required.</ErrorMessage>}
            
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formValues.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            {errors.email && <ErrorMessage>Invalid email address.</ErrorMessage>}
            
            <Select
              name="service"
              value={formValues.service}
              onChange={handleChange}
              error={errors.service}
              required
            >
              <option value="">Select a Service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </Select>
            {errors.service && <ErrorMessage>Service is required.</ErrorMessage>}
            
            <TextArea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formValues.message}
              onChange={handleChange}
              error={errors.message}
              required
            />
            {errors.message && <ErrorMessage>Message is required.</ErrorMessage>}
            
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
              Send Message
            </Button>
          </Form>
        </FormContainer>
      </FormSection>
    </Container>
  );
};

export default ContactForm;
