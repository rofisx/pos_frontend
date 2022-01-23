const rules = {
    nama_alamat: {
        required: { value: true, message: 'Nama alamat tidak boleh kosong' },
        maxlength: { value: 500, message: 'Panjang nama maksimal 500 karakter'},
        minlength: { value: 5, message: 'Panjang nama minimal 5 karakter'}
    },

    provinsi: {
        required: { value: true, message: 'Provinsi harus dipilih'}
    },

    kabupaten: {
        required: { value: true, message: 'Kabupaten harus dipilih'}
    },

    kecamatan: {
        required: { value: true, message: 'Kecamatan harus dipilih' }
    },

    kelurahan: {
        required: {value: true, message: 'Kelurahan harus dipilih' }
    },

    detail_alamat: {
        required: { value: true, message: 'Detail alamat harus diisi'},
        maxlength: { value: 1000, message: 'Panjang detail alamat maksimal 1000 karakter'}
    }
}

export { rules };