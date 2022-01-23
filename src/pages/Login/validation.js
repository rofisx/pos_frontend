const rules = {
    email: {
        required: { value: true, message: 'Email harus diisi' },
        maxlength: { value: 255, message: 'Panjang email maksimal 255 karakter' },
        pattern: { value: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, message: 'Email tidak valid' }
    },

    password: {
        required: { value: true, message: 'Password harus diisi' },
        maxlength: { value: 255, message: 'Panjang password maksimal 255 karakter' }
    }
}

export {rules}