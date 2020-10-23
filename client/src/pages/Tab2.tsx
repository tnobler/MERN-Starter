import React, { useMemo } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonButton,
  IonFabButton,
  IonIcon
} from '@ionic/react';
import AppContext from '../context';
import { add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  console.log('Tab2 render');
  const { sharedValue, setSharedValue } = React.useContext(AppContext);

  const renderContents = useMemo(() => {
    console.log('Tab2 renderContents ' + new Date());
    return (
      <>
        <div>{JSON.stringify(sharedValue)}</div>
        <IonButton
          onClick={() =>
            setSharedValue({ value: new Date().getTime(), changedBy: 'Tab2' })
          }
        >
          Update Value
        </IonButton>
        <IonButton
          onClick={() => setSharedValue({ value: null, changedBy: 'Tab2' })}
        >
          Reset Value
        </IonButton>
      </>
    );
  }, [sharedValue, setSharedValue]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Properties</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>TAB TWO</h2>
        {renderContents}

        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Tab 2 page' />
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
