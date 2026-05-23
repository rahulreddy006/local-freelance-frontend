import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <RegisterForm />
    </motion.div>
  );
};

export default RegisterPage;
