/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { type Node } from 'react';
import classNames from 'classnames';
import styles from './ActivityList.css';

export type Props = {
  id?: string,
  className?: string,
  children: Node,
  onClick?: (event: SyntheticMouseEvent<>) => mixed
};

function ActivityListItem(props: Props) {
  const className = classNames(styles.item, {
    [styles.clickable]: props.onClick
  }, props.className);

  return (
    <div className={className} onClick={props.onClick} id={props.id}>
      {props.children}
    </div>
  );
}


export default ActivityListItem;
