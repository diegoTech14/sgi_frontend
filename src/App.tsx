import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/*import '@ionic/react/css/palettes/dark.system.css';*/

/* Theme variables */
import './theme/variables.css';
import LoginView from './views/loginView/loginView';
import RegistIncidents from './views/techIncidentView/registIncident';
import DiagnoseIncident from './views/techIncidentView/diagnoseIncident';
import OneIncidence from './views/techIncidentView/oneIncidence';
import ChargeView from './views/chargeView/charge';
import OneDiagnose from './views/techIncidentView/oneDiagnose';
import SupervisorView from './views/supervisor/supervisor';
import HoursReport from './views/reports/hoursReport';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={LoginView} exact/>
        <Route path="/regist" component={RegistIncidents} exact/>
        <Route path="/diagnose" component={DiagnoseIncident} exact/>
        <Route path="/incidence" component={OneIncidence} exact/>
        <Route path="/charge" component={ChargeView} exact/>
        <Route path="/supervisor" component={SupervisorView} exact/>
        <Route path="/diagnoseDetail" component={OneDiagnose} exact/>
        <Route path="/hoursReport" component={HoursReport} exact/>
        <Redirect exact from="/" to="/login"/>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
