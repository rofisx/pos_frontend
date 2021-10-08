import React from 'react'
import { Textarea } from 'upkit';
import { Button, FormControl, InputText, LayoutOne } from 'upkit/dist';
import SelectWilayah from '../../components/SelectWilayah';
import TopBar from '../../components/TopBar';

export default function UserAddressAdd() {
  return (
     <LayoutOne>
       <TopBar/>
       <br />
       <div className="mb-10">
         <form onSubmit={() => {}}>
           <FormControl label="Nama alamat" errorMessage={''} color="black">
             <InputText
               placeholder="Nama alamat"
               fitContainer
             />
           </FormControl>
           <FormControl label="Provinsi" errorMessage={''} color="black">
             <SelectWilayah
                onChange={_ => {}}
                value={'33'}
             />
           </FormControl>
           <FormControl label="Kabupaten/kota" errorMessage={''} color="black">
             <SelectWilayah
               tingkat="kabupaten"
               kodeInduk={33}
               onChange={_ => {}}
               value={3321}
             />
           </FormControl>
           <FormControl label="Kecamatan" errorMessage={''} color="black">
             <SelectWilayah
               tingkat="kecamatan"
               kodeInduk={3321}
               onChange={ _ => {}}
               value={332101}
             />
           </FormControl>
           <FormControl label="Kelurahan" errorMessage={''} color="black" >
             <SelectWilayah
               tingkat="kelurahan"
               kodeInduk={332101}
               onChange={ _ => {}}
               value={3321010}
             />
           </FormControl>
           <FormControl label="Detail alamat" errorMessage={''} color="black">
             <Textarea
               placeholder="Detail alamat"
               fitContainer
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
