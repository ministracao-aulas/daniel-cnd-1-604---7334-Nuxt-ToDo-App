import Toastify from 'toastify-js';

export const toast = {
    error(message: string) {
        return this.run({
            text: message,
            style: {
                background: '#eb3838',
            },
        });
    },
    success(message: string) {
        return this.run({
            text: message,
            style: {
                background: '#00b09b',
            },
        });
    },
    info(message: string) {
        return this.run({
            text: message,
            style: {
                background: 'lighblue',
            },
        });
    },
    toast(message: string) {
        return this.run({
            text: message,
            style: {
                background: 'lighblue',
            },
        });
    },
    run(obj: any) {
        if (!obj || typeof obj !== 'object') {
            return;
        }

        if (typeof obj.text !== 'string' || !obj.text.trim().length) {
            return;
        }

        return Toastify({
            duration: 5000,
            close: true,
            gravity: 'bottom', // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: '#00b09b',
            },
            ...obj,
        }).showToast();
    },
};

export default toast;
