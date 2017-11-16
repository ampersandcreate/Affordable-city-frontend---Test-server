export const TOKEN = {
    KEY: 'token'
};

export const REFRESH_TOKEN = {
    KEY: 'refresh_token'
};
export const API_RESPONSE = {
    EXCEPTION: 500,
    SUCCESS: 1,
    EXIST_BUT_NOT_ACTIVE: 1,
    ALREADY_EXIST: 0,
    NOT_EXIST: 0,
    OK: 200,
    CREATED: 201
};
export const DEFAULT_NOTIFICATION_OPTIONS = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 100
};
const POST_DASHBOARD = './dashboard/landlord';
const NON_AUTHORIZED_ROUTE = 'home';
export const ROUTES = {
    POST_DASHBOARD,
    NON_AUTHORIZED_ROUTE

};
