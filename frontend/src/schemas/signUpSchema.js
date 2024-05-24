// import * as yup from "yup";

// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

// const errorMessage = "User lowercase, uppercase and digits";

// const signUpSchema = yup.object({
//   name: yup.string().max(30).required("name is required"),
//   username: yup.string().min(5).max(30).required("Username is required"),
//   email: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(8)
//     .max(25)
//     .matches(passwordPattern, { message: errorMessage })
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "password must match")
//     .required("Password is required"),
// });


// export default signUpSchema;




import * as yup from "yup";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const erroMessage = "use lowercase, uppercase and digits";

const signupSchema = yup.object().shape({
  name: yup.string().max(30).required("name is required"),
  username: yup.string().min(5).max(30).required("username is required"),
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .min(8)
    .max(25)
    .matches(passwordPattern, { message: erroMessage })
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("password is required"),
});

export default signupSchema;
