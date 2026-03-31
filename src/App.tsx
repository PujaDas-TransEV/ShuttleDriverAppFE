
// import { Route, Redirect, Switch } from 'react-router-dom';
// import {
//   IonApp,
//   IonRouterOutlet,
//   setupIonicReact
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';

// /* Pages */

// import Signup from './components/Authentication/Signup';


// /* Core CSS */
// import '@ionic/react/css/core.css';
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';
// import '@ionic/react/css/palettes/dark.system.css';
// import './theme/variables.css';

// setupIonicReact();



// const isLoggedIn = true; // <-- TEMPORARY: always allow access for now


// const App: React.FC = () => {
//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonRouterOutlet>
//           <Switch>

//             {/* Landing Page (Always Visible) */}
           
                     
          


//             {/* Home Page (Temporarily Always Allowed) */}
//             <Route
//               exact
//               path="/home"
//               render={() =>
//                 isLoggedIn ? <Home /> : <Redirect to="/" />
//               }
//             />

//             {/* Catch All */}
//             <Route path="*">
//               <Redirect to="/" />
//             </Route>

//           </Switch>
//         </IonRouterOutlet>
//       </IonReactRouter>
//     </IonApp>
//   );
// };

// export default App;
import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

/* Pages */
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import Dashboard from './components/users/pages/Dashboard';
/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            {/* Always show Signup/Login */}
            <Route exact path="/">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            {/* Catch All */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;