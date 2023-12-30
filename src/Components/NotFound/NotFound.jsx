import React from 'react';
import { Link } from 'react-router-dom';
import Style from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={Style.pro}>
      <Link to="/" className={`btn btn-info ${Style.btn}`}>
        Go back To Home
      </Link>
</section>
  )
}
