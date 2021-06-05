import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import './Tab1.css';

const IndikatorDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/instra" />
          </IonButtons>
          <IonTitle>detail Indikator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Indikator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Indikator Detail" />
      </IonContent>
    </IonPage>
  );
};

export default IndikatorDetailPage;
