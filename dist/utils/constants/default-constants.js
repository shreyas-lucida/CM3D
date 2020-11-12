"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_CONSTANTS;
(function (DEFAULT_CONSTANTS) {
    // link durations
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["OTP_DURATION_IN_MINUTE"] = 2] = "OTP_DURATION_IN_MINUTE";
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["REMEMBER_ME_DAYS"] = 30] = "REMEMBER_ME_DAYS";
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["UNCHECK_REMEMBER_ME_DAYS"] = 1] = "UNCHECK_REMEMBER_ME_DAYS";
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["RESET_DURATION_IN_MINUTE"] = 10] = "RESET_DURATION_IN_MINUTE";
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["REGISTRATION_DURATION_IN_MINUTE"] = 10] = "REGISTRATION_DURATION_IN_MINUTE";
    DEFAULT_CONSTANTS[DEFAULT_CONSTANTS["INVITE_IN_DAYS"] = 365] = "INVITE_IN_DAYS";
    // default text contents
    DEFAULT_CONSTANTS["PASSWORD_RESET_SUBJECT"] = "Reset Password Invitation from ALG";
    DEFAULT_CONSTANTS["NEW_REGISTRATION_SUBJECT"] = "Invitation from ALG";
    DEFAULT_CONSTANTS["VERIFY_OTP_SUBJECT"] = "OTP from ALG";
})(DEFAULT_CONSTANTS || (DEFAULT_CONSTANTS = {}));
exports.default = DEFAULT_CONSTANTS;
//# sourceMappingURL=default-constants.js.map