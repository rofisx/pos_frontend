import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonCircle, Responsive } from 'upkit/dist';
import StoreLogo from '../StoreLogo';
import {FaUser} from '@meronex/icons/fa';
import { useSelector } from 'react-redux';

export default function TopBar() {

  const auth = useSelector(state => state.auth);

  return (
    <Responsive desktop={2} justify="between" items="center">
      <div>
        <StoreLogo />
      </div>
      <div className="mr-5 text-right">
        <Link to={auth.token ? '/account' : '/login'}>
          <div className="mr-2 inline-block text-red-600 font-bold">
            {auth?.user?.full_name}
          </div>
          <ButtonCircle icon={<FaUser />}/>
        </Link>
      </div>
    </Responsive>
  )
}
