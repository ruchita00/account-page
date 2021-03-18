// import React, { Component } from "react";
// import firebase from "../../firebase";

// handleClick = () => {
//   let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
//   let number = "+919834405090";
//   firebase.auth.signInWithPhoneNumber(number, recaptcha).then(function (e) {
//     let code = prompt("enter the otp", "");
//     if (code == null) return;
//     e.confirm(code)
//       .then(function (result) {
//         console.log(result.user, "user");
//         document.querySelector("label").textContent =
//           result.user.phoneNumber + "Number verified";
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   });
// };

// export default class button extends Component {
//   render() {
//     return (
//       <div>
//         <label></label>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }
