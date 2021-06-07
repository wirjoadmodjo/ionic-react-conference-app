import React from 'react';
import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import IndikatorItem from '../components/IndikatorItem';

import axios from 'axios';
//import './Tab1.css';

//const apiUrl = 'http://localhost:8765/skartaji/indikator/strategis'; 
const apiUrl = 'https://webapps.bps.go.id/kedirikota/skartaji/indikator/strategis'; 

const getDataInstra = () => {
  return axios({
    url: apiUrl,
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  }) 
}

const InstraPage: React.FC = () => {
  const [instra, setInstra] = React.useState([]);
  
  React.useEffect(() => {
    getDataInstra().then(data => setInstra(data.data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="mont-ExtraBoldItalic">Indikator Strategis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            instra.map(data => {
              return (
                //<IndikatorItem nama={data['nama_indikator']} nilai={data['data']} satuan={data['unit']} linknav="/indikator/penduduk" ikon={data['app_icon']} /> 
                <IndikatorItem 
                  indikatorNama = {data['nama_indikator']}
                  indikatorData = {data['data']}
                  indikatorUnit = {data['unit']}
                  indikatorDataTH = {data['data_th']}
                  appIcon = {data['app_icon']}
                  appRouter = ""
                  kediriDomain = {data['data_api']['kediri']['domain']}
                  kediriVar = {data['data_api']['kediri']['var']}
                  kediriVervar = {data['data_api']['kediri']['vervar']}
                  antarDomain = {data['data_api']['antar-wilayah']['domain']}
                  antarVar = {data['data_api']['antar-wilayah']['var']}
                  antarFilter = {data['data_api']['antar-wilayah']['filter']}
                />                
              );
            })
          }          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InstraPage;
