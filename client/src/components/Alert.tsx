import React, { useState } from 'react';
import { IonToast } from '@ionic/react';
import { connect } from 'react-redux';
// import { closeOutline } from 'ionicons/icons';

interface IAlertProps {
  alerts: any;
}

const Alert: React.FC<IAlertProps> = ({ alerts }) => {
  const [showToast, setShowToast] = useState(true);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(
      (alert: {
        id: string | number | null | undefined;
        alertType: any;
        msg: React.ReactNode;
      }) => (
        <IonToast
          key={JSON.stringify(alert.id)}
          isOpen={showToast}
          message={JSON.stringify(alert.msg)}
          // position='top'
          color={alert.alertType}
          duration={5000}
        />
      )
    )
  );
};

const mapStateToProps = (state: { alert: any }) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
