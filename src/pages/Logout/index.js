import * as React from 'react'; 
import { LayoutOne } from 'upkit';
import BounceLoader from 'react-spinners/BounceLoader';

export default function Logout(){

  return (
    <LayoutOne size="small">
      <div className="text-center flex flex-col justify-center items-center">
        <BounceLoader color="red"/>
        <br/>
        Logging out ...
      </div>
    </LayoutOne>
  )
}