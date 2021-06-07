import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const InfografisPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle className="mont-ExtraBoldItalic">Infografis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Konten</IonTitle>
          </IonToolbar>
        </IonHeader>        
      </IonContent>
    </IonPage>
  );
};

export default InfografisPage;
