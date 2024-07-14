const conf = {
    mongoRegisterUrl: String(import.meta.env.VITE_REGISTRATION_URL),
    mongoLoginUrl: String(import.meta.env.VITE_LOGIN_URL),
    mongoForgotpasswordUrl: String(import.meta.env.VITE_FORGOTPASSWORD_URL),
    mongoOtpUrl: String(import.meta.env.VITE_OTP_URL),
    mongoVerifyOtpUrl: String(import.meta.env.VITE_OTPVERIFICATION_URL),
    mongoResetpasswordUrl: String(import.meta.env.VITE_RESETPASSWORD_URL),
    mongoGetCurrentUserUrl: String(import.meta.env.VITE_CURRENTUSER_URL),
    mongoUpdateProfile: String(import.meta.env.VITE_UPDATEPROFILE_URL),
}
export default conf

