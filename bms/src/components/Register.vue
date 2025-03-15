
<template>
  <div>
    <!doctype html>
    <html lang="en">


    <!-- auth-register-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 26 Jan 2022 14:02:36 GMT -->

    <head>

      <meta charset="utf-8" />
      <title>Register 2 | NG CDF</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta content="Keep your finances and membership up to date" name="description" />
      <meta content="Kelvin Njuguna Ndungu" name="author" />
      <!-- App favicon -->
      <link rel="shortcut icon" href="/assets/images/favicon.svg">

      <!-- owl.carousel css -->
      <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.carousel.min.css">

      <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css">

      <!-- Bootstrap Css -->
      <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
      <!-- Icons Css -->
      <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <!-- App Css-->
      <link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      <link href="/assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

    </head>

    <body class="auth-body-bg">

    <div>
      <div class="container-fluid p-0">
        <div class="row g-0">

          <div class="col-xl-9">
            <div class="auth-full-bg pt-lg-5 p-4">
              <div class="w-100">
                <div class="bg-overlay"></div>
                <div class="d-flex h-100 flex-column">

                  <div class="p-4 mt-auto">
                    <div class="row justify-content-center">
                      <div class="col-lg-7">
                        <div class="text-center">

                          <h4 class="mb-3"><i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span class="text-primary">5k</span>+ Satisfied clients</h4>

                          <div dir="ltr">
                            <div class="owl-carousel owl-theme auth-review-carousel" id="auth-review-carousel">
                              <div class="item">
                                <div class="py-3">
                                  <p class="font-size-16 mb-4">" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install
                                    git and all the other stuff the documentation talks about. "</p>

                                  <div>
                                    <h4 class="font-size-16 text-primary">Abs1981</h4>
                                    <p class="font-size-14 mb-0">- Skote User</p>
                                  </div>
                                </div>

                              </div>

                              <div class="item">
                                <div class="py-3">
                                  <p class="font-size-16 mb-4">" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "</p>

                                  <div>
                                    <h4 class="font-size-16 text-primary">nezerious</h4>
                                    <p class="font-size-14 mb-0">- Skote User</p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-xl-3">
            <div class="auth-full-page-content p-md-5 p-4">
              <div class="w-100">

                <div class="d-flex flex-column h-100">
                  <div class="mb-4 mb-md-5">
                    <a href="Loginpage.vue" class="d-block auth-logo d-flex justify-content-center">
                      <img src="/assets/images/color-logo.png" alt="" height="18" class="auth-logo-dark">
                      <img src="/assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">
                    </a>
                  </div>
                  <div class="my-auto">

                    <div>
                      <h5 class="text-primary">Register account</h5>
                      <p class="text-muted">Get your free Skote account now.</p>
                    </div>

                    <div class="mt-4">
                      <form class="needs-validation" novalidate @submit="registerUser">

                        <div class="mb-3">
                          <label for="useremail" class="form-label">Email</label>
                          <input type="email" class="form-control" id="useremail" placeholder="Enter email"
                                 v-model="user.email" required>
                          <div class="invalid-feedback">
                            Please Enter Email
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="username" class="form-label">Full Name</label>
                          <input type="text" class="form-control" id="username" placeholder="Enter full name"
                                 v-model="user.names" required>
                          <div class="invalid-feedback">
                            Please Enter Full Name
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="userpassword" class="form-label">Password</label>
                          <input type="password" class="form-control" id="userpassword" placeholder="Enter password"
                                 v-model="user.password" required>
                          <div class="invalid-feedback">
                            Please Enter Password
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="phoneNumber" class="form-label">Phone Number</label>
                          <input type="tel" class="form-control" id="phoneNumber" placeholder="Enter phone number"
                                 v-model="user.phoneNumber" required>
                          <div class="invalid-feedback">
                            Please Enter Phone Number
                          </div>
                        </div>

                        <div class="mt-4 d-grid">
                          <button class="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                        </div>
                      </form>

                        <div class="mt-4 text-center">
                          <h5 class="font-size-14 mb-3">Sign up using</h5>

                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a href="javascript:void(0)" class="social-list-item bg-primary text-white border-primary">
                                <i class="mdi mdi-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="javascript:void(0)" class="social-list-item bg-info text-white border-info">
                                <i class="mdi mdi-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="javascript:void(0)" class="social-list-item bg-danger text-white border-danger">
                                <i class="mdi mdi-google"></i>
                              </a>
                            </li>
                          </ul>

                        </div>

                      <div class="mt-5 text-center">
                        <p>Already have an account ? <a href="Loginpage.vue" class="fw-medium text-primary"> Login</a> </p>
                      </div>

                    </div>
                  </div>

                  <div class="mt-4 mt-md-5 text-center">
                  </div>
                </div>


              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container-fluid -->
    </div>



    </body>

    <!-- auth-register-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 26 Jan 2022 14:02:36 GMT -->

    </html>


  </div>

</template>



<script>
export default {
  data() {
    return {
      user: {
        names: "",
        email: "",
        phoneNumber: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser(event) {
      event.preventDefault();

      // Log the exact data being sent
      console.log("Data being sent:", JSON.stringify(this.user));

      // Check if any fields are empty
      const emptyFields = Object.entries(this.user)
          .filter(([_, value]) => !value)
          .map(([key]) => key);

      if (emptyFields.length > 0) {
        console.warn("Empty fields detected:", emptyFields);
        alert("Please fill in all fields: " + emptyFields.join(", "));
        return;
      }

      try {
        console.log("Sending request to:", "http://localhost:5000/users");
        const response = await axios.post("http://localhost:5000/users", this.user);
        console.log("Response:", response.data);
        alert("Registration successful! Redirecting to login...");
        this.$router.push("/login");
      } catch (error) {
        console.error("Registration error:", error);
        console.error("Response data:", error.response?.data);
        alert("Registration failed: " + (error.response?.data?.message || error.message));
      }
    }
  }

}
import axios from "axios";

// Set default headers
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Configure Axios instance if needed
const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

// Then use api.post instead of axios.post in your method


</script>





