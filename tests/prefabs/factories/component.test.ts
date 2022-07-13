import test from 'tape';
import {
  component,
  partial,
  wrapper,
} from '../../../src/prefabs/factories/component';
import {
  variable,
  showIfTrue,
  toggle,
  reconfigure,
} from '../../../src/prefabs/factories/options';

test('component builds empty component', (t) => {
  const result = component('Text', { options: {} }, []);
  const expected = {
    name: 'Text',
    options: [],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component ignores null options', (t) => {
  const result = component(
    'Text',
    {
      options: {
        shouldNotExist: null,
        shouldExist: toggle('ShouldExist', { value: false }),
      },
    },
    [],
  );
  const expected = {
    name: 'Text',
    options: [
      {
        label: 'ShouldExist',
        key: 'shouldExist',
        type: 'TOGGLE',
        value: false,
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('partial builds empty partial', (t) => {
  const result = partial();
  const expected = {
    type: 'PARTIAL',
    partialId: '',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a wrapper prefab', (t) => {
  const result = wrapper({}, []);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a wrapper prefab with descendants', (t) => {
  const result = wrapper({}, [component('ROW', { options: {} }, [])]);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [
      { name: 'ROW', options: [], descendants: [], type: 'COMPONENT' },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a wrapper prefab with descendants and inner wrapper', (t) => {
  const result = wrapper({}, [
    component('ROW', { options: {} }, [wrapper({}, [])]),
  ]);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [
      {
        name: 'ROW',
        options: [],
        descendants: [{ type: 'WRAPPER', options: [], descendants: [] }],
        type: 'COMPONENT',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component builds an option', (t) => {
  const result = component(
    'Text',
    {
      options: {
        content: variable('Value', {
          configuration: {
            condition: showIfTrue('visibility'),
          },
        }),
      },
    },
    [],
  );

  const expected = {
    name: 'Text',
    options: [
      {
        key: 'content',
        type: 'VARIABLE',
        label: 'Value',
        value: [],
        configuration: {
          condition: {
            type: 'SHOW',
            option: 'visibility',
            comparator: 'EQ',
            value: true,
          },
        },
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component builds a style in an option', (t) => {
  const result = component(
    'Button',
    {
      options: {},
      style: {
        name: 'Pappel',
        overwrite: {
          boxShadow: 'none',
        },
      },
    },
    [],
  );
  const expected = {
    name: 'Button',
    options: [],
    style: {
      name: 'Pappel',
      overwrite: {
        boxShadow: 'none',
      },
    },
    descendants: [],
    type: 'COMPONENT',
  };
  t.deepEqual(result, expected);
  t.end();
});

test('component is a data table with a "reconfigure" option', (t) => {
  const result = component(
    'Data table',
    {
      options: {
        reconfigure: reconfigure('Reconfigure', { value: '' }),
      },
    },
    [],
  );
  const expected = {
    name: 'Data table',
    options: [
      {
        value: '',
        label: 'Reconfigure',
        key: 'reconfigure',
        type: 'RECONFIGURE',
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});
