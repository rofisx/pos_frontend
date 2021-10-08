import * as React from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios';
import { Select } from 'upkit';

export default function SelectWilayah({tingkat, kodeInduk, onChange, value}){
  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get(`http://regions-indoneisa.herokuapp.com/api/${tingkat}?kode_induk=${kodeInduk}`)
      .then(({data}) => setData(data))
      .finally(_ => setIsFetching(false));
  }, [kodeInduk, tingkat]);

  return <Select 
      options={data.map(wilayah => ({label: wilayah.nama, value: wilayah.kode}))}
      onChange={onChange}
      value={value}
      isLoading={isFetching}
      isDisabled={isFetching || !data.length}
    />
}

SelectWilayah.propTypes = {
  tingkat: PropTypes.oneOf(['provinsi', 'kabupaten', 'kecamatan', 'kelurahan']),
  kodeInduk: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

SelectWilayah.defaultProps = {
  tingkat: 'provinsi'
}