<template>
  <div class="full-width">
    <!-- page bg -->
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div id="video-container">
            <video autoplay="" loop="" muted="">
                <source src="https://prod-streaming-video-msn-com.akamaized.net/1b2c3d49-8071-43f1-ac4e-6b19e8b17c6c/93a75d20-e9e2-4d41-a3ba-3e3fc124fae4.mp4" type="video/mp4" />
            </video>
        </div>

        <div class="bg-overlay"></div>
    </div>

    <!-- page content -->
    <div class="auth-page-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card mt-5 login-bg">
                        <div class="card-body p-4">
                            <div class="text-center">
                                <div class="d-inline-block auth-logo">
                                    <img src="https://seeklogo.com/images/G/government-of-jharkhand-logo-D9985104A5-seeklogo.com.png" alt="JSLPS image" height="80" />
                                </div>
                                <h3 class="text-dark mt-3">Login to Your Account</h3>
                            </div>

                            <div class="p-2 mt-3">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input name="txtusername" type="text" id="txtusername" class="form-control" placeholder="Enter username" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="password-input">Password</label>
                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                        <input name="txtpassword" type="password" id="txtpassword" class="form-control pe-5 password-input" placeholder="Enter password" />
                                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                    </div>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                    <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                    <a href="#" class="text-muted float-end">Forgot password?</a>
                                </div>

                                <div class="mt-4">
                                    <input type="submit" name="btnlogin" value="Login" id="btnlogin" class="btn btn-primary w-100" />
                                </div>
                            </div>
                        </div>
                        <!-- card body -->
                    </div>
                    <!-- card -->
                </div>
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </div>
    <!-- end page content -->
</div>

</template>


<style scope>

</style>
