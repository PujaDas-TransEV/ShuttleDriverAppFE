
// import React from 'react';
// import { IonPage, IonContent } from '@ionic/react';
// import NavbarSidebar from '../../users/pages/Navbar';
// import {
//   UserCircleIcon,
//   TruckIcon,
//   IdentificationIcon,
//   CurrencyRupeeIcon,
//   MapIcon,
//   UsersIcon,
//   ClockIcon,
//   ExclamationTriangleIcon
// } from '@heroicons/react/24/outline';

// const Dashboard: React.FC = () => {
//   const profileCompleted = false;

//   return (
//     <IonPage>
//       {/* Navbar */}
//       <NavbarSidebar />

//       {/* Dashboard Content */}
//       <IonContent className="bg-gray-900 text-white min-h-screen pt-16">
//         {/* pt-16 = height of navbar so content starts below it */}

//         <div className="p-6">

//           {/* HEADER */}
//           <div className="mb-6">
//             <h1 className="text-3xl md:text-4xl font-bold mb-1">Dashboard</h1>
//             <p className="text-gray-400">Manage your bus business efficiently</p>
//           </div>

//           {/* ALERT */}
//           {!profileCompleted && (
//             <div className="bg-yellow-600/20 border-l-4 border-yellow-400 p-4 rounded-lg flex items-center mb-6 shadow">
//               <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-yellow-400" />
//               <span className="font-medium text-yellow-100">
//                 Complete Profile, Vehicle & KYC to start trips
//               </span>
//             </div>
//           )}

//           {/* SETUP CARDS */}
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-gray-800 shadow-lg p-5 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform">
//               <UserCircleIcon className="w-10 h-10 mb-3 text-blue-400" />
//               <h2 className="font-semibold mb-2">Profile Setup</h2>
//               <p className="text-gray-400 mb-3 text-sm">Fill your personal info</p>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
//                 Complete Profile
//               </button>
//             </div>

//             <div className="bg-gray-800 shadow-lg p-5 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform">
//               <TruckIcon className="w-10 h-10 mb-3 text-green-400" />
//               <h2 className="font-semibold mb-2">Vehicle Registration</h2>
//               <p className="text-gray-400 mb-3 text-sm">Register your buses</p>
//               <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition">
//                 Add Bus
//               </button>
//             </div>

//             <div className="bg-gray-800 shadow-lg p-5 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform">
//               <IdentificationIcon className="w-10 h-10 mb-3 text-purple-400" />
//               <h2 className="font-semibold mb-2">KYC Verification</h2>
//               <p className="text-gray-400 mb-3 text-sm">Verify identity & documents</p>
//               <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition">
//                 Start KYC
//               </button>
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="grid md:grid-cols-4 gap-6 mb-8">
//             <div className="bg-gray-800 shadow-md p-5 rounded-2xl text-center hover:shadow-xl transition">
//               <MapIcon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
//               <h3 className="text-gray-400">Trips</h3>
//               <p className="text-2xl font-bold">5</p>
//             </div>

//             <div className="bg-gray-800 shadow-md p-5 rounded-2xl text-center hover:shadow-xl transition">
//               <CurrencyRupeeIcon className="w-6 h-6 mx-auto mb-2 text-green-400" />
//               <h3 className="text-gray-400">Earnings</h3>
//               <p className="text-2xl font-bold">₹12,500</p>
//             </div>

//             <div className="bg-gray-800 shadow-md p-5 rounded-2xl text-center hover:shadow-xl transition">
//               <UsersIcon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
//               <h3 className="text-gray-400">Passengers</h3>
//               <p className="text-2xl font-bold">48</p>
//             </div>

//             <div className="bg-gray-800 shadow-md p-5 rounded-2xl text-center hover:shadow-xl transition">
//               <ClockIcon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
//               <h3 className="text-gray-400">Active Trips</h3>
//               <p className="text-2xl font-bold">3</p>
//             </div>
//           </div>

//           {/* DRIVER MAP */}
//           <div className="bg-gray-800 shadow-lg rounded-2xl p-5 mb-8">
//             <h2 className="text-xl font-semibold mb-3">Driver Map & Route</h2>
//             <p className="text-gray-400 mb-3">Track your bus location and passenger stops in real-time</p>
//             <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
//               [ Map Placeholder – Replace with Google Maps / Leaflet ]
//             </div>
//           </div>

//           {/* QUICK ACTIONS */}
//           <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white p-5 rounded-2xl shadow-md flex items-center justify-center font-medium transition">
//               🚍 Start Trip
//             </button>
//             <button className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl shadow-md flex items-center justify-center font-medium transition">
//               📍 Setup Route
//             </button>
//             <button className="bg-purple-500 hover:bg-purple-600 text-white p-5 rounded-2xl shadow-md flex items-center justify-center font-medium transition">
//               👥 Passenger List
//             </button>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl shadow-md flex items-center justify-center font-medium transition">
//               💰 Earnings Report
//             </button>
//           </div>

//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import { IonPage, IonContent } from '@ionic/react';
// import NavbarSidebar from '../../users/pages/Navbar';
// import {
//   UserCircleIcon,
//   TruckIcon,
//   IdentificationIcon,
//   CurrencyRupeeIcon,
//   MapIcon,
//   UsersIcon,
//   ClockIcon,
//   ExclamationTriangleIcon
// } from '@heroicons/react/24/outline';

// const Dashboard: React.FC = () => {
//   const profileCompleted = false;

//   return (
//     <IonPage>
//       {/* Navbar */}
//       <NavbarSidebar />

//       {/* Dashboard Content */}
//       <IonContent className="bg-gray-950 text-white min-h-screen pt-16">
//         {/* pt-16 = height of navbar so content starts below it */}
//         <div className="p-6">

//           {/* HEADER */}
//           <div className="mb-6">
//             <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white">Dashboard</h1>
//             <p className="text-gray-400">Manage your bus business efficiently</p>
//           </div>

//           {/* ALERT */}
//           {!profileCompleted && (
//             <div className="bg-yellow-800/30 border-l-4 border-yellow-400 p-4 rounded-lg flex items-center mb-6 shadow-lg">
//               <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-yellow-400" />
//               <span className="font-medium text-white">
//                 Complete Profile, Vehicle & KYC to start trips
//               </span>
//             </div>
//           )}

//           {/* SETUP CARDS */}
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             {[
//               {
//                 icon: <UserCircleIcon className="w-10 h-10 mb-3 text-blue-400" />,
//                 title: 'Profile Setup',
//                 description: 'Fill your personal info',
//                 btn: 'Complete Profile',
//                 btnColor: 'bg-blue-600 hover:bg-blue-700'
//               },
//               {
//                 icon: <TruckIcon className="w-10 h-10 mb-3 text-green-400" />,
//                 title: 'Vehicle Registration',
//                 description: 'Register your buses',
//                 btn: 'Add Bus',
//                 btnColor: 'bg-green-600 hover:bg-green-700'
//               },
//               {
//                 icon: <IdentificationIcon className="w-10 h-10 mb-3 text-purple-400" />,
//                 title: 'KYC Verification',
//                 description: 'Verify identity & documents',
//                 btn: 'Start KYC',
//                 btnColor: 'bg-purple-600 hover:bg-purple-700'
//               }
//             ].map((card, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-900 shadow-xl p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform"
//               >
//                 {card.icon}
//                 <h2 className="font-semibold mb-2 text-white">{card.title}</h2>
//                 <p className="text-gray-400 mb-4 text-sm">{card.description}</p>
              
//  <button
//       className={`${card.btnColor} w-48 h-12 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300`}
//     >
//       {card.btn}
//     </button>
//               </div>
//             ))}
//           </div>

//           {/* STATS */}
//           <div className="grid md:grid-cols-4 gap-6 mb-8">
//             {[
//               { icon: <MapIcon className="w-6 h-6 mx-auto mb-2 text-blue-400" />, label: 'Trips', value: '5' },
//               { icon: <CurrencyRupeeIcon className="w-6 h-6 mx-auto mb-2 text-green-400" />, label: 'Earnings', value: '₹12,500' },
//               { icon: <UsersIcon className="w-6 h-6 mx-auto mb-2 text-purple-400" />, label: 'Passengers', value: '48' },
//               { icon: <ClockIcon className="w-6 h-6 mx-auto mb-2 text-orange-400" />, label: 'Active Trips', value: '3' },
//             ].map((stat, idx) => (
//               <div key={idx} className="bg-gray-900 shadow-md p-5 rounded-2xl text-center hover:shadow-2xl transition">
//                 {stat.icon}
//                 <h3 className="text-gray-400">{stat.label}</h3>
//                 <p className="text-2xl font-bold text-white">{stat.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* DRIVER MAP */}
//           <div className="bg-gray-900 shadow-xl rounded-2xl p-5 mb-8">
//             <h2 className="text-xl font-semibold mb-3 text-white">Driver Map & Route</h2>
//             <p className="text-gray-400 mb-3">Track your bus location and passenger stops in real-time</p>
//             <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
//               [ Map Placeholder – Replace with Google Maps / Leaflet ]
//             </div>
//           </div>

//           {/* QUICK ACTIONS */}
//          <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
// <div className="grid md:grid-cols-2 gap-6">
//   {[
//     { label: '🚍 Start Trip', color: 'bg-blue-600 hover:bg-blue-700', path: '/start-trip' },
//     { label: '📍 Setup Route', color: 'bg-green-600 hover:bg-green-700', path: '/setup-route' },
//     { label: '👥 Passenger List', color: 'bg-purple-600 hover:bg-purple-700', path: '/passenger-list' },
//     { label: '💰 Earnings Report', color: 'bg-orange-600 hover:bg-orange-700', path: '/earnings-report' },
//   ].map((action, idx) => (
//     <button
//       key={idx}
//       onClick={() => window.location.href = action.path} // redirect to page
//       className={`
//         ${action.color} 
//         text-white 
//         w-full 
//         h-20 
//         rounded-2xl 
//         shadow-lg 
//         flex 
//         items-center 
//         justify-center 
//         font-medium 
//         text-lg
//         transition 
//         transform 
//         hover:scale-105 
//         hover:shadow-2xl
//       `}
//     >
//       {action.label}
//     </button>
//   ))}
// </div>

//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Dashboard;



import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import NavbarSidebar from '../../users/pages/Navbar';
import {
  UserCircleIcon,
  TruckIcon,
  IdentificationIcon,
  CurrencyRupeeIcon,
  MapIcon,
  UsersIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const profileCompleted = false;
  const history = useHistory();

  const setupCards = [
    {
      icon: <UserCircleIcon className="w-10 h-10 mb-3 text-blue-400" />,
      title: 'Profile Setup',
      description: 'Fill your personal info',
      btn: 'Complete Profile',
      path: '/profile-setup',
         btnColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <TruckIcon className="w-10 h-10 mb-3 text-green-400" />,
      title: 'Vehicle Registration',
      description: 'Register your buses',
      btn: 'Add Bus',
      path: '/vehicle-registration',
         btnColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: <IdentificationIcon className="w-10 h-10 mb-3 text-purple-400" />,
      title: 'KYC Verification',
      description: 'Verify identity & documents',
      btn: 'Start KYC',
      path: '/kyc-verification',
         btnColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const stats = [
    { icon: <MapIcon className="w-6 h-6 mx-auto mb-2 text-blue-400" />, label: 'Trips', value: '5' },
    { icon: <CurrencyRupeeIcon className="w-6 h-6 mx-auto mb-2 text-green-400" />, label: 'Earnings', value: '₹12,500' },
    { icon: <UsersIcon className="w-6 h-6 mx-auto mb-2 text-purple-400" />, label: 'Passengers', value: '48' },
    { icon: <ClockIcon className="w-6 h-6 mx-auto mb-2 text-orange-400" />, label: 'Active Trips', value: '3' },
  ];

  const quickActions = [
    { label: '🚍 Start Trip', color: 'bg-blue-600 hover:bg-blue-700', path: '/start-trip' },
    { label: '📍 Setup Route', color: 'bg-green-600 hover:bg-green-700', path: '/setup-route' },
    { label: '👥 Passenger List', color: 'bg-purple-600 hover:bg-purple-700', path: '/passenger-list' },
    { label: '💰 Earnings Report', color: 'bg-orange-600 hover:bg-orange-700', path: '/earnings-report' },
  ];

  return (
    <IonPage>
      {/* Navbar */}
      <NavbarSidebar />

      {/* Dashboard Content */}
      <IonContent className="bg-gray-950 text-white min-h-screen pt-16">
        <div className="p-6">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white">Dashboard</h1>
            <p className="text-gray-400">Manage your bus business efficiently</p>
          </div>

          {/* ALERT */}
          {!profileCompleted && (
            <div className="bg-yellow-800/30 border-l-4 border-yellow-400 p-4 rounded-lg flex items-center mb-6 shadow-lg">
              <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-medium text-white">
                Complete Profile, Vehicle & KYC to start trips
              </span>
            </div>
          )}

          {/* SETUP CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {setupCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-900 shadow-xl p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
                onClick={() => history.push(card.path)}
              >
                {card.icon}
                <h2 className="font-semibold mb-2 text-white">{card.title}</h2>
                <p className="text-gray-400 mb-4 text-sm">{card.description}</p>
                {/* <button
                  className="bg-gray-800 hover:bg-gray-700 w-48 h-12 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  {card.btn}
                </button> */}
                <button
      className={`${card.btnColor} w-48 h-12 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300`}
    >
      {card.btn}
    </button>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-900 shadow-md p-5 rounded-2xl text-center hover:shadow-2xl transition">
                {stat.icon}
                <h3 className="text-gray-400">{stat.label}</h3>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* DRIVER MAP */}
          <div className="bg-gray-900 shadow-xl rounded-2xl p-5 mb-8">
            <h2 className="text-xl font-semibold mb-3 text-white">Driver Map & Route</h2>
            <p className="text-gray-400 mb-3">Track your bus location and passenger stops in real-time</p>
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              [ Map Placeholder – Replace with Google Maps / Leaflet ]
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => history.push(action.path)}
                className={`
                  ${action.color}
                  text-white
                  w-full
                  h-20
                  rounded-2xl
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  font-medium
                  text-lg
                  transition
                  transform
                  hover:scale-105
                  hover:shadow-2xl
                `}
              >
                {action.label}
              </button>
            ))}
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;