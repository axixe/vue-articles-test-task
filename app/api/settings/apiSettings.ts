import axios from 'axios'

export const $http = axios.create({
    baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/',
    headers: {
        'Content-Type': 'application/json',
    },
})