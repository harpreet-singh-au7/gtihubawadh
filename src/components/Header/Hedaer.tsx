import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";
import "./header.css";

function Topheader() {
  return (
    <div className="topheader">
      <IonGrid className="tohHeader_grid">
        <IonRow className="row_logo">
          <IonCol size="2" className="logo_top_col">
            <img
              className="logo1"
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619888263/logo_wheat_nobg-05_q1gixi.png"
              alt="logo1"
            />
          </IonCol>
        </IonRow>
        <IonRow className="sidebar_top_row ">
          <IonCol size="5" className="sidebar_top_col">
            <IonText className="menu_item ftn_style">About Course</IonText>
            <IonText className="menu_item ftn_style">Schedule</IonText>
            <IonText className="menu_item ftn_style">Eligibility</IonText>
            <IonText className="menu_item ftn_style">Fees</IonText>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxY5REakP6VHTlX8sMy4oztgJfAITYXAyGOUK0gMqTqcpsFQ/viewform">
              <button className="btn_apply ftn_style">Apply Now</button>{" "}
            </a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default Topheader;
