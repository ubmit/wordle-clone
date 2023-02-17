import React from 'react';
import { cx } from '../../utils';

function Banner({ children, status }) {
  return <div className={cx('banner', status)}>{children}</div>;
}

export default Banner;
