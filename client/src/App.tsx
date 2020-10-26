import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { home, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Alert from './components/Alert';
import NavMenu from './components/NavMenu';
import PrivateRoute from './components/PrivateRoute';
import AddProperty from './pages/AddProperty';
import Dashboard from './pages/Dashboard';

// Context
// import AuthContext from './context';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

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

/* Theme variables */
import './theme/variables.css';

/* Custom CSS */
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <IonApp>
      <Provider store={store}>
        <Alert />
        <IonReactRouter>
          <IonSplitPane contentId='main'>
            <NavMenu />
            <IonTabs>
              <IonRouterOutlet id='main'>
                <Route path='/landing' component={Landing} exact={true} />
                <Route path='/tab1' component={Tab1} exact={true} />
                <Route path='/tab2' component={Tab2} exact={true} />
                <Route path='/tab3' component={Tab3} />
                <Route path='/signup' component={Signup} exact={true} />
                <Route path='/login' component={Login} exact={true} />
                <PrivateRoute
                  path='/dashboard'
                  component={Dashboard}
                  exact={true}
                />
                <PrivateRoute
                  path='/addproperty'
                  component={AddProperty}
                  exact={true}
                />
                <Route
                  path='/'
                  render={() => <Redirect to='/landing' />}
                  exact={true}
                />
              </IonRouterOutlet>

              <IonTabBar slot='bottom'>
                <IonTabButton tab='tab1' href='/tab1'>
                  <IonIcon icon={triangle} />
                  <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab='tab2' href='/tab2'>
                  <IonIcon icon={home} />
                  <IonLabel>Properties</IonLabel>
                </IonTabButton>
                <IonTabButton tab='tab3' href='/tab3'>
                  <IonIcon icon={square} />
                  <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonSplitPane>
        </IonReactRouter>
      </Provider>
    </IonApp>
  );
};

export default App;
