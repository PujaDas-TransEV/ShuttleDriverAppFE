// import React, { useState } from 'react';
// import {
//   IonPage,
//   IonContent,
//   IonInput,
//   IonLoading,
//   IonToast,
//   IonButton,
// } from '@ionic/react';
// import { useHistory } from 'react-router-dom';
// import bgImage from '../assets/logi.jpg'; // Background image

// const Login: React.FC = () => {
//   const history = useHistory();

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpForm, setShowOtpForm] = useState(false);
//   const [generatedOTP, setGeneratedOTP] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState('');

//   // Step 1: Send OTP
//   const handleEmailSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.includes('@')) {
//       setToastMsg('Enter a valid email');
//       return;
//     }

//     setLoading(true);
//     const otpGenerated = Math.floor(100000 + Math.random() * 900000);
//     setGeneratedOTP(otpGenerated);
//     setShowOtpForm(true);
//     setLoading(false);
//     setToastMsg(`OTP sent to ${email} (demo: ${otpGenerated})`);
//   };

//   // Step 2: Verify OTP
//   const handleOtpSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (parseInt(otp) === generatedOTP) {
//       setToastMsg('Login successful!');
//       setEmail('');
//       setOtp('');
//       setShowOtpForm(false);

//       setTimeout(() => {
//         history.push('/home'); // Redirect to driver/owner home
//       }, 1000);
//     } else {
//       setToastMsg('Incorrect OTP, try again');
//     }
//   };

//   return (
//     <IonPage>
//       <IonContent fullscreen className="relative">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={bgImage}
//             alt="Background"
//             className="w-full h-full object-cover brightness-75"
//           />
//         </div>

//         {/* Transparent overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Login Card */}
//         <div className="relative z-10 flex justify-center items-center min-h-screen px-4 lg:px-16">
//           <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/20
//                           bg-black/30 backdrop-blur-md text-white">
//             {/* Header */}
//             <h2 className="text-4xl font-bold text-white mb-2 text-center">
//               Login
//             </h2>
//             <p className="text-gray-300 mb-6 text-center">
//               Enter your email to login
//             </p>

//             {/* Form */}
//             <form
//               onSubmit={showOtpForm ? handleOtpSubmit : handleEmailSubmit}
//               className="space-y-5"
//             >
//               {!showOtpForm && (
//                 <div>
//                   <IonInput
//                     type="email"
//                     value={email}
//                     placeholder="Enter your email"
//                     required
//                     onIonChange={(e) => setEmail(e.detail.value!)}
//                     className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
//                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//                   />
//                 </div>
//               )}

//               {showOtpForm && (
//                 <div>
//                   <p className="text-gray-300 mb-2 text-sm">
//                     Enter the OTP sent to your email
//                   </p>
//                   <IonInput
//                     type="text"
//                     maxlength={6}
//                     value={otp}
//                     placeholder="123456"
//                     onIonChange={(e) => setOtp(e.detail.value!)}
//                     className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
//                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//                   />
//                 </div>
//               )}

//               {/* Button */}
//        {/* <IonButton
//   type="submit"
//   expand="block"
//   className="py-3 text-lg font-semibold rounded-2xl 
//              border border-white/30 bg-black hover:bg-gray-800 text-white 
//              transition-all duration-300 shadow-lg"
// >
//   {showOtpForm ? 'Verify OTP' : 'Send OTP'}
// </IonButton> */}
// <div className="flex justify-center mt-6">
//   <button
//     type="submit"
//     className="w-64 h-10 text-white font-semibold rounded-full 
//                bg-linear-to-r from-blue-700 via-blue-900 to-blue-700
//                shadow-lg hover:shadow-xl hover:scale-105 
//                transition-transform duration-300"
//   >
//     {showOtpForm ? 'Verify OTP' : 'Send OTP'}
//   </button>
// </div>
//             </form>

//             {/* Signup Redirect */}
//             <div className="mt-6 text-center">
//               <p className="text-gray-300 text-sm">
//                 Don&apos;t have an account?{' '}
//                 <span
//                   className="text-white font-semibold cursor-pointer hover:underline"
//                   onClick={() => history.push('/signup')}
//                 >
//                   Sign Up
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Loading & Toast */}
//         <IonLoading isOpen={loading} message="Processing..." />
//         <IonToast
//           isOpen={!!toastMsg}
//           message={toastMsg}
//           duration={2500}
//           onDidDismiss={() => setToastMsg('')}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import {
//   IonPage,
//   IonContent,
//   IonInput,
//   IonLoading,
//   IonToast,
// } from '@ionic/react';
// import { useHistory } from 'react-router-dom';
// import bgImage from '../assets/logi.jpg'; // Background image

// const Login: React.FC = () => {
//   const history = useHistory();

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpForm, setShowOtpForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState('');

//   // Step 1: Send OTP via API
//   const handleEmailSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.includes('@')) {
//       setToastMsg('Enter a valid email');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://192.168.0.103:4200/auth/login/send-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });

//       if (!res.ok) throw new Error('Failed to send OTP');

//       setShowOtpForm(true);
//       setToastMsg(`OTP sent to ${email}`);
//     } catch (error: any) {
//       setToastMsg(error.message || 'Error sending OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: Verify OTP via API
//   const handleOtpSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!otp || otp.length !== 6) {
//       setToastMsg('Enter a valid 6-digit OTP');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://192.168.0.103:4200/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });

//       if (!res.ok) throw new Error('Invalid OTP');

//       const data = await res.json();
//       // Optionally save token: localStorage.setItem('token', data.token);
//       setToastMsg('Login successful!');
//       setEmail('');
//       setOtp('');
//       setShowOtpForm(false);

//       setTimeout(() => {
//         history.push('/dashboard'); // Redirect to home/dashboard
//       }, 1000);
//     } catch (error: any) {
//       setToastMsg(error.message || 'Error verifying OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <IonPage>
//       <IonContent fullscreen className="relative">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={bgImage}
//             alt="Background"
//             className="w-full h-full object-cover brightness-75"
//           />
//         </div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Login Card */}
//         <div className="relative z-10 flex justify-center items-center min-h-screen px-4 lg:px-16">
//           <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/20
//                           bg-black/30 backdrop-blur-md text-white">
//             {/* Header */}
//             <h2 className="text-4xl font-bold text-white mb-2 text-center">Login</h2>
//             <p className="text-gray-300 mb-6 text-center">Enter your email to login</p>

//             {/* Form */}
//             <form
//               onSubmit={showOtpForm ? handleOtpSubmit : handleEmailSubmit}
//               className="space-y-5"
//             >
//               {!showOtpForm && (
//                 <IonInput
//                   type="email"
//                   value={email}
//                   placeholder="Enter your email"
//                   required
//                   onIonChange={(e) => setEmail(e.detail.value!)}
//                   className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
//                              focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//                 />
//               )}

//               {showOtpForm && (
//                 <>
//                   <p className="text-gray-300 mb-2 text-sm">Enter the OTP sent to your email</p>
//                   <IonInput
//                     type="text"
//                     maxlength={6}
//                     value={otp}
//                     placeholder="123456"
//                     onIonChange={(e) => setOtp(e.detail.value!)}
//                     className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
//                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//                   />
//                 </>
//               )}

//               {/* Modern Pill Button */}
//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   className="w-64 h-14 text-white font-semibold rounded-full 
//                              bg-linear-to-r from-blue-800 via-gray-900 to-black
//                              shadow-lg hover:shadow-xl hover:scale-105 
//                              transition-transform duration-300"
//                 >
//                   {showOtpForm ? 'Verify OTP' : 'Send OTP'}
//                 </button>
//               </div>
//             </form>

//             {/* Signup Redirect */}
//             <div className="mt-6 text-center">
//               <p className="text-gray-300 text-sm">
//                 Don&apos;t have an account?{' '}
//                 <span
//                   className="text-white font-semibold cursor-pointer hover:underline"
//                   onClick={() => history.push('/signup')}
//                 >
//                   Sign Up
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Loading & Toast */}
//         <IonLoading isOpen={loading} message="Processing..." />
//         <IonToast
//           isOpen={!!toastMsg}
//           message={toastMsg}
//           duration={2500}
//           onDidDismiss={() => setToastMsg('')}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonLoading,
  IonToast,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import bgImage from '../assets/logi.jpg'; // Background image

const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // Step 1: Send OTP via API
  const handleEmailSubmit = async () => {
    if (!email.includes('@')) {
      setToastMsg('Enter a valid email');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://192.168.0.103:4200/auth/login/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to send OTP');

      setShowOtpForm(true);
      setToastMsg(`OTP sent to ${email}`);
    } catch (error: any) {
      setToastMsg(error.message || 'Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP via API
  const handleOtpSubmit = async () => {
    if (!otp || otp.length !== 6) {
      setToastMsg('Enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://192.168.0.103:4200/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      if (!res.ok) throw new Error('Invalid OTP');

      const data = await res.json();
      // Optionally save token: localStorage.setItem('token', data.token);
      setToastMsg('Login successful!');
      setEmail('');
      setOtp('');
      setShowOtpForm(false);

      setTimeout(() => {
        history.push('/dashboard'); // Redirect to dashboard
      }, 1000);
    } catch (error: any) {
      setToastMsg(error.message || 'Error verifying OTP');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submit safely
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showOtpForm) {
      handleOtpSubmit();
    } else {
      handleEmailSubmit();
    }
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
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Login Card */}
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 lg:px-16">
          <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/20
                          bg-black/30 backdrop-blur-md text-white">
            {/* Header */}
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Login</h2>
            <p className="text-gray-300 mb-6 text-center">Enter your email to login</p>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {!showOtpForm && (
                <IonInput
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  required
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
                             focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
              )}

              {showOtpForm && (
                <>
                  <p className="text-gray-300 mb-2 text-sm">
                    Enter the OTP sent to your email
                  </p>
                  <IonInput
                    type="text"
                    maxlength={6}
                    value={otp}
                    placeholder="123456"
                    onIonChange={(e) => setOtp(e.detail.value!)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-300
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </>
              )}

              {/* Modern Pill Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={loading} // Prevent multiple clicks
                  className="w-72 h-14 text-white font-semibold rounded-full
                             bg-gradient-to-r from-blue-700 via-blue-900 to-black
                             shadow-lg hover:shadow-xl hover:scale-105
                             transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {showOtpForm ? 'Verify OTP' : 'Send OTP'}
                </button>
              </div>
            </form>

            {/* Signup Redirect */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Don&apos;t have an account?{' '}
                <span
                  className="text-white font-semibold cursor-pointer hover:underline"
                  onClick={() => history.push('/signup')}
                >
                  Sign Up
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

export default Login;