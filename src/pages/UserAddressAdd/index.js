import React, { useEffect } from 'react'
import { Textarea } from 'upkit';
import { Button, FormControl, InputText, LayoutOne } from 'upkit/dist';
import SelectWilayah from '../../components/SelectWilayah';
import TopBar from '../../components/TopBar';
import { useForm } from 'react-hook-form';
import { rules }  from './validation';
import { useHistory } from 'react-router-dom';
import { createAddress } from '../../app/api/address';

export default function UserAddressAdd() {
  const {register, handleSubmit, formState: {errors}, watch, setValue, getValues} = useForm();
  const history = useHistory();
  const allFields = watch();
  const updateValue = (field, value) => setValue(field, value, {shouldValidate: true, shouldDirty: true});
  const onSubmit = async formData => {
    let payload = {
      nama: formData.nama_alamat,
      detail: formData.detail_alamat,
      provinsi: formData.provinsi.label,
      kabupaten: formData.kabupaten.label,
      kecamatan: formData.kecamatan.label,
      kelurahan: formData.kelurahan.label
      }
    const { data } = await createAddress(payload);
    // console.log(data)
    if(data.error) return;
    // alert(JSON.stringify(payload))
    history.push('/alamat-pengiriman')
  }

  useEffect(() => {
    setValue('kabupaten', null);
    setValue('kecamatan', null);
    setValue('kelurahan', null);
  }, [allFields.provinsi, setValue]) 

  useEffect(() => {
    setValue('kecamatan', null);
    setValue('kelurahan', null);
  }, [allFields.kabupaten, setValue])

  useEffect(() => {
    setValue('kelurahan', null);
  }, [allFields.kecamatan, setValue])

  return (
     <LayoutOne>
       <TopBar/>
       <br />
       <div className="mb-10">
         <form onSubmit={handleSubmit(onSubmit)}>
           <FormControl label="Nama alamat" errorMessage={errors.nama_alamat?.message} color="black">
             <InputText
               placeholder="Nama alamat"
               fitContainer
               {...register('nama_alamat', rules.nama_alamat)}
             />
           </FormControl>
           <FormControl label="Provinsi" errorMessage={errors.provinsi?.message} color="black">
             <SelectWilayah
                onChange={option => updateValue('provinsi', option)}
                value={getValues().provinsi}
                // {...register('provinsi', rules.provinsi)}
             />
           </FormControl>
           <FormControl label="Kabupaten/kota" errorMessage={errors.kabupaten?.message} color="black">
             <SelectWilayah
               tingkat="kabupaten"
               kodeInduk={getValues().provinsi?.value}
               onChange={option => updateValue('kabupaten', option)}
               value={getValues().kabupaten}
              //  {...register('kabupaten', rules.kabupaten)}
             />
           </FormControl>
           <FormControl label="Kecamatan" errorMessage={errors.kecamatan?.message} color="black">
             <SelectWilayah
               tingkat="kecamatan"
               kodeInduk={getValues().kabupaten?.value}
               onChange={option => updateValue('kecamatan', option)}
               value={getValues().kecamatan}
              //  {...register('kecamatan', rules.kecamatan)}
             />
           </FormControl>
           <FormControl label="Kelurahan" errorMessage={errors.kelurahan?.message} color="black" >
             <SelectWilayah
               tingkat="kelurahan"
               kodeInduk={getValues().kecamatan?.value}
               onChange={option => updateValue('kelurahan', option)}
               value={getValues().kelurahan}
              //  {...register('kelurahan', rules.kelurahan)}
             />
           </FormControl>
           <FormControl label="Detail alamat" errorMessage={errors.detail_alamat?.message} color="black">
             <Textarea
               placeholder="Detail alamat"
               fitContainer
               {...register('detail_alamat', rules.detail_alamat)}
             />
           </FormControl>

           <Button fitContainer size="large">
             Simpan
           </Button>
         </form>
       </div>
     </LayoutOne>
   )
}
