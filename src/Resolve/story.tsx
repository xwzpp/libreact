import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Resolve} from '.';

storiesOf('Resolve', module)
  .add('basic', () => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    return h(Resolve, {promise}, ({pending}) =>
      <div>{pending ? 'PENDING...' : 'RESOLVED'}</div>
    )
  });
