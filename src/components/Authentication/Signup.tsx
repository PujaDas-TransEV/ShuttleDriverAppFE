
import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonLabel,
  IonToast,
  IonLoading
} from '@ionic/react';
import bgImage from '../assets/sign.jpg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const history = useHistory();
  const role = 'driver'; // always driver

  // Send OTP API call
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setToastMsg('Enter a valid email');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://192.168.0.103:4200/auth/signup/send-otp', {
        email,
        role
      });
      if (response.status === 200) {
        setToastMsg('OTP sent! Check your email.');
        setShowOtpForm(true);
      } else {
        setToastMsg('Failed to send OTP');
      }
    } catch (error: any) {
      console.error(error);
      setToastMsg(error.response?.data?.message || 'Server error');
    }
    setLoading(false);
  };

  // Verify OTP API call
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setToastMsg('Enter OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://192.168.0.103:4200/auth/signup', {
        email,
        otp,
        role
      });
      if (response.status === 200) {
        setToastMsg('Signup successful!');
        setEmail('');
        setOtp('');
        setShowOtpForm(false);
        // Redirect to dashboard after successful signup
        history.push('/login');
      } else {
        setToastMsg('OTP verification failed');
      }
    } catch (error: any) {
      console.error(error);
      setToastMsg(error.response?.data?.message || 'Server error');
    }
    setLoading(false);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Signup Card */}
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/20
                          bg-black/40 backdrop-blur-md text-white">
            {/* Header */}
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Sign Up</h2>
            <p className="text-gray-300 mb-6 text-center">Create your driver account</p>

            {/* Form */}
            <form
              onSubmit={showOtpForm ? handleOtpSubmit : handleEmailSubmit}
              className="space-y-5"
            >
              {!showOtpForm && (
                <div>
                  <IonLabel className="block text-white mb-1 font-semibold">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    required
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
              )}

              {showOtpForm && (
                <div>
                  <p className="text-gray-300 mb-2 text-sm">Enter the OTP sent to your email</p>
                  <IonInput
                    type="text"
                    maxlength={6}
                    value={otp}
                    placeholder="123456"
                    onIonChange={(e) => setOtp(e.detail.value!)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
              )}

            
             
              {/* Styled Pill Button */}
{/* Centered, wider, dark/blue gradient pill button */}
<div className="flex justify-center mt-6">
  <button
    type="submit"
    className="w-64 h-10 text-white font-semibold rounded-full 
               bg-linear-to-r from-blue-700 via-blue-900 to-blue-700
               shadow-lg hover:shadow-xl hover:scale-105 
               transition-transform duration-300"
  >
    {showOtpForm ? 'Verify OTP' : 'Send OTP'}
  </button>
</div>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Already have an account?{' '}
                <span
                  className="text-white font-semibold cursor-pointer hover:underline"
                  onClick={() => history.push('/login')}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Loading & Toast */}
        <IonLoading isOpen={loading} message="Processing..." />
        <IonToast
          isOpen={!!toastMsg}
          message={toastMsg}
          duration={2500}
          onDidDismiss={() => setToastMsg('')}
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;