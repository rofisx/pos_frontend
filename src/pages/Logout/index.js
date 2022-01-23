import * as React from 'react'; 
import { LayoutOne } from 'upkit';
import BounceLoader from 'react-spinners/BounceLoader';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../app/api/auth';
import { userLogout } from '../../app/features/Auth/actions';

export default function Logout(){

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    logoutUser()
    .then(_ => dispatch(userLogout()))
    .then(_ => history.push('/'));
  },[dispatch, history])

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