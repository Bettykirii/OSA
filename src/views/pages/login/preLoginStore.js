// import { observable, runInAction } from 'mobx';
// import { BASE_URL, BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } from '../../../configs';
// import { notify } from 'react-notify-toast';
// import history from '../../../helpers/routeUtils';
// import axios from 'axios';
// import { getCubaREST } from '@cuba-platform/react-core';


// export default observable({
//   isCorrelationIdLoading: false,
//   isGetTokenLoading: false,
//   isGetUserInfoLoading: false,

//   async getCorrelationId(username, password) {
//     try {
//       this.isCorrelationIdLoading = true;
//       const correlationIdResponse = await axios
//         .post(
//           `${BASE_URL}/app/rest/v2/oauth/send-token`,
//           {
//             username: username,
//             password: password
//           },
//           {
//             auth: {
//               username: BASIC_AUTH_USERNAME,
//               password: BASIC_AUTH_PASSWORD
//             }
//           }
//         );
//       localStorage.setItem('correlationId', correlationIdResponse.data.correlationId);
//       notify.show('Login Success, Enter Otp', 'success', 2500);
//       history.push('/verify');

//     } catch (error) {
//       console.error(error);
//       notify.show('Error, unable to login, check username and password', 'error');
//     }
//     runInAction(() => {
//       this.isCorrelationIdLoading = false;
//     });
//   },

//   async getBearerToken(otp) {
//     let getTokenresponse;
//     try {
//       this.isGetTokenLoading = true;
//       getTokenresponse = await axios
//         .post(
//           `${BASE_URL}/app/rest/v2/oauth/verify-token`,
//           {
//             correlationId: localStorage.getItem('correlationId'),
//             otpCode: otp
//           },
//           {
//             auth: {
//               username: BASIC_AUTH_USERNAME,
//               password: BASIC_AUTH_PASSWORD
//             }
//           }
//         );
//       localStorage.setItem('access_token', getTokenresponse.data.access_token);
//       console.log("token data>>>>>>>", getTokenresponse.data);
//       localStorage.setItem('expiryDate', getTokenresponse.data.expires_in);
//       notify.show('Successful, Welcome', 'success', 2000);
//       getCubaREST().restApiToken = getTokenresponse.data.access_token
//       history.push('/new-task');
//     } catch (error) {
//       notify.show('Otp Error, try again', 'error');
//       runInAction(() => {
//         this.isGetTokenLoading = false;
//       });
//       return;
//     }

//     // Begin get user info
//     this.isGetUserInfoLoading = true;
//     const getUserInfoResponse = await axios
//       .post(
//         `${BASE_URL}/app/rest/v2/services/miliki_UserParentService/getUserInfo`,
//         {
//           type: 'supplier'
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${getTokenresponse.data.access_token}`
//           }
//         }
//       );
//     try {
//       localStorage.setItem('supplier-id', getUserInfoResponse.data.supplier.id);
//       localStorage.setItem('supplier-email', getUserInfoResponse.data.email);
//     } catch (error) {
//       console.log('Error getting user info:', error);
//     }
//     runInAction(() => {
//       this.isGetUserInfoLoading = false;
//     });
//   }
// });
