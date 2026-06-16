'use strict';

const CONSTANTS = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/,
};

exports.CONSTANTS = CONSTANTS;
