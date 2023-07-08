import React from 'react';
import { Link } from 'react-router-dom';
import './AccountButton.css';
import account from '../../images/account.svg';

function AccountButton() {
  return (
    <Link to="/profile" className="account-button ">
      <img src={account} alt='аккаунт' />
      {/* <p className='account-button__text'>Аккаунт</p> */}
    </Link>

  );
}

export default AccountButton;