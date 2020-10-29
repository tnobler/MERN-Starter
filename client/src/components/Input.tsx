import React, { FC } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { Controller, Control } from 'react-hook-form';

export interface InputProps {
  name: string;
  control?: Control;
  label?: string;
  component?: JSX.Element;
}

const Input: FC<InputProps> = ({ name, control, component, label }) => {
  return (
    <>
      <IonItem>
        {label && <IonLabel position='floating'>{label}</IonLabel>}
        <Controller
          as={component ?? <IonInput />}
          name={name}
          control={control}
          onChangeName='onIonChange'
        />
      </IonItem>
    </>
  );
};

export default Input;
