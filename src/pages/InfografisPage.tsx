import React from 'react';
import axios from 'axios';
import { IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';

const apiUrl = 'http://localhost:8765/skartaji/infografis'; 
//const apiUrl = 'https://webapps.bps.go.id/kedirikota/skartaji/indikator/strategis'; 

const getInfografis = () => {
  return axios({
    url: apiUrl,
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  }) 
}

const InfografisPage: React.FC = () => {
  const [ig, setIg] = React.useState([]);
  
  React.useEffect(() => {
    getInfografis().then(data => setIg(data.data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="mont-ExtraBoldItalic">Infografis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>       
          {
            ig.map(data => {
              return (
                <IonCard>
                  <div className ="vertical-center">
                    <IonImg src={data['img']} />               
                  </div>
                  <IonCardHeader>
                    <IonCardSubtitle>{data['title']}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              );
            })
          }          
       
      </IonContent>
    </IonPage>
  );
};

export default InfografisPage;
