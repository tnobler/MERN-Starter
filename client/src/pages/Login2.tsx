import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/auth';

let initialValues = {
  email: '',
  password: ''
};

interface ILogin2Props {
  login: any;
  isAuthenticated: boolean;
}

const Login2: React.FC<ILogin2Props> = ({ login, isAuthenticated }) => {
  const { control, handleSubmit, formState, errors } = useForm({
    defaultValues: { ...initialValues },
    mode: 'onChange'
  });

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // /**
  //  *
  //  * @param =fieldName
  //  */
  // const showError = (__fileName: string) => {
  //   let error = (errors as any)[__fileName];
  //   return error ? (
  //     <div style={{ color: 'red', fontWeight: 'bold' }}>
  //       {error.message || 'Field Is Required'}
  //     </div>
  //   ) : null;
  // };

  // /**
  //  *
  //  * @param data
  //  */
  const onSubmit = async (data: any, e: any) => {
    console.log(data, e);
    e.preventDefault();

    login(data);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Login2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 18 }}>
          {/* <IonItem>
            <IonLabel>Email</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                return selected.detail.value;
              }}
              name='email'
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address'
                }
              }}
            />
          </IonItem> */}
          <IonItem>
            <IonLabel>Email</IonLabel>
            <Controller
              render={({ onChange }) => <IonInput onIonChange={onChange} />}
              control={control}
              name='email'
              rules={{
                required: 'This is a required field',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address'
                }
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <Controller
              render={({ onChange }) => <IonInput onIonChange={onChange} />}
              control={control}
              name='password'
              rules={{
                required: 'This is a required field',
                minLength: {
                  value: 6,
                  message: 'min length is 6'
                }
              }}
            />
          </IonItem>
          <div>
            <IonButton type='submit'>submit</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login2);
