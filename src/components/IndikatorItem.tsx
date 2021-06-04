import React from 'react';
import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { addIcons } from 'ionicons';
import { barChartSharp, briefcaseSharp, cartSharp, 
  chevronForwardSharp, hourglassSharp, peopleSharp, 
  pieChartSharp, shapesSharp, walletSharp 
} from "ionicons/icons";

interface ContainerProps {
    nama: string
    nilai: string
    satuan: string
    linknav: string
    ikon: string    
  }
  
  const IndikatorItem: React.FC<ContainerProps> = ({ nama, nilai, satuan="", linknav, ikon="" }) => {
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
      <IonItem routerLink={linknav} detail>
        <IonIcon name={ikon} slot="start" color="primary" size="large"></IonIcon>        
        <IonLabel color="primary">
          <h4 className="mont-SemiBoldItalic">{nama}</h4>
          <h1>
            <strong className="mont-ExtraBoldItalic">{nilai} </strong>
            <small className="mont-Italic">{satuan}</small>
          </h1>
          
        </IonLabel>
        
      </IonItem>      
    );
  };
  
  export default IndikatorItem;