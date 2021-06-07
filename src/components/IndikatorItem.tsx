import React from 'react';
import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { addIcons } from 'ionicons';
import { barChartSharp, briefcaseSharp, cartSharp, 
  hourglassSharp, peopleSharp, 
  pieChartSharp, shapesSharp, walletSharp 
} from "ionicons/icons";

interface ContainerProps {
    indikatorNama: string
    indikatorUnit: string
    indikatorData: string
    indikatorDataTH: string;
    appIcon: string;
    appRouter: string;
    kediriDomain: string;
    kediriVar: string;
    kediriVervar: string;
    antarDomain: string;
    antarVar: string;
    antarFilter: string;
  }
  
  const IndikatorItem: React.FC<ContainerProps> = ({ 
    indikatorNama, indikatorData, indikatorUnit, indikatorDataTH,
    appIcon, appRouter,
    kediriDomain, kediriVar, kediriVervar,
    antarDomain, antarVar, antarFilter }) => {
    addIcons({
      "people": peopleSharp,
      "cart": cartSharp,
      "barchart": barChartSharp,
      "briefcase": briefcaseSharp,
      "piechart": pieChartSharp,
      "hourglass": hourglassSharp,
      "wallet": walletSharp,
      "shape": shapesSharp
    });

    return (
      <IonItem routerLink={`/tabs/instra/${kediriDomain + kediriVar}`}>
        <IonIcon name={appIcon} slot="start" color="primary" size="large"></IonIcon>        
        <IonLabel color="primary">
          <h4 className="mont-SemiBoldItalic">{indikatorNama}</h4>
          <h1>
            <strong className="mont-ExtraBoldItalic">{indikatorData} </strong>
            <small className="mont-Italic">{indikatorUnit}</small>
          </h1>
          
        </IonLabel>
        
      </IonItem>      
    );
  };
  
  export default IndikatorItem;