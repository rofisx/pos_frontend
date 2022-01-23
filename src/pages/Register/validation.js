const rules = {
    full_name: {
        required: {value: true, message: 'Nama harus diisi'},
        maxlength: {value: 500, message: 'Panjang nama tidak boleh lebih 500 karakter'}
    },

    email: {
        required: {value: true, message: 'Email harus diisi'},
        maxlength: {value: 255, message: 'Email maksimal 255 karakter'},
        pattern: {value: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, message: 'Email tidak valid'}
    }, 

    password: {
        required: {value: true, message: 'Password harus diisi'},
        maxlength: {value: 255, message: 'Maksimal password 255 karakter'}
    },

    password_confirmation: {
        required: {value: true, message: 'Konfirmasi password harus diisi'}
    }

}

export {rules}