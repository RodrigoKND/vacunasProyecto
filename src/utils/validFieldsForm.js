export const validFieldsForm = {
    isEmpty: function isEmpty(value) {
        return value === undefined || value === null || value === "";
    },
    isValidEmail: function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    IsvalidPassword: function isValidPassword(password) {
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return password.length >= 8 && password.length <= 20 && regExp.test(password);
    }

}