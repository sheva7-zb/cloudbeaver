/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react';
import { useCallback } from 'react';
import styled, { css } from 'reshadow';

import {
  ListItem, ListItemIcon, ListItemName, ListItemDescription, StaticImage
} from '@cloudbeaver/core-blocks';

export interface IDriver {
  id: string;
  icon?: string;
  name?: string;
  description?: string;
}

const styles = css`
  StaticImage {
    box-sizing: border-box;
    width: 24px;
    max-height: 24px;
  }
`;

type DriverProps = {
  driver: IDriver;
  onSelect(driverId: string): void;
}

export const Driver = observer(function Driver({ driver, onSelect }: DriverProps) {
  const select = useCallback(() => onSelect(driver.id), [driver]);

  return styled(styles)(
    <ListItem onClick={select}>
      <ListItemIcon><StaticImage icon={driver.icon}/></ListItemIcon>
      <ListItemName>{driver.name}</ListItemName>
      <ListItemDescription title={driver.description}>{driver.description}</ListItemDescription>
    </ListItem>
  );
});
