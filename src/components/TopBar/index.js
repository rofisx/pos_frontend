import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonCircle, Responsive } from 'upkit/dist';
import StoreLogo from '../StoreLogo';
import {FaUser} from '@meronex/icons/fa';

export default function TopBar() {
  return (
    <Responsive desktop={2} justify="between" items="center">
      <div>
        <StoreLogo />
      </div>
      <div className="mr-5 text-right">
        <Link to='/account'>
          <div className="mr-2 inline-block text-red-600 font-bold">
            
          </div>
          <ButtonCircle icon={<FaUser />}/>
        </Link>
      </div>
    </Responsive>
  )
}
