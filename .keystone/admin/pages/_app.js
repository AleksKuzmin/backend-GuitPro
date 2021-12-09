import React from 'react';

import { KeystoneProvider } from '@keystone-next/admin-ui/context';
import { ErrorBoundary } from '@keystone-next/admin-ui/components';
import { Core } from '@keystone-ui/core';

<<<<<<< HEAD
import * as view51292fb2 from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as view55089499 from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as viewab9be542 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as view7359be60 from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as view8e152096 from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as view44d84dd7 from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as view2406f2e3 from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as view11207b31 from '../../../node_modules/@keystone-next/cloudinary/views';
=======
import * as view86388f13 from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as viewc7645c72 from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as viewa8ea3689 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as viewc536d531 from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as viewbc3a2516 from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as viewb844fd47 from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as view66ff6221 from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as viewea483828 from '../../../node_modules/@keystone-next/cloudinary/views';
>>>>>>> parent of 35b02f6 (more seed data)

const adminConfig = {};

const fieldViews = {
<<<<<<< HEAD
  view51292fb2,
  view55089499,
  viewab9be542,
  view7359be60,
  view8e152096,
  view44d84dd7,
  view2406f2e3,
  view11207b31,
=======
  view86388f13,
  viewc7645c72,
  viewa8ea3689,
  viewc536d531,
  viewbc3a2516,
  viewb844fd47,
  view66ff6221,
  viewea483828,
>>>>>>> parent of 35b02f6 (more seed data)
};

const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keystone',
              loc: { start: 22, end: 30 },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'adminMeta',
                    loc: { start: 39, end: 48 },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lists',
                          loc: { start: 59, end: 64 },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'key',
                                loc: { start: 77, end: 80 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 77, end: 80 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isHidden',
                                loc: { start: 91, end: 99 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 91, end: 99 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fields',
                                loc: { start: 110, end: 116 },
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'path',
                                      loc: { start: 131, end: 135 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: { start: 131, end: 135 },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'createView',
                                      loc: { start: 148, end: 158 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'fieldMode',
                                            loc: { start: 175, end: 184 },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: { start: 175, end: 184 },
                                        },
                                      ],
                                      loc: { start: 159, end: 198 },
                                    },
                                    loc: { start: 148, end: 198 },
                                  },
                                ],
                                loc: { start: 117, end: 210 },
                              },
                              loc: { start: 110, end: 210 },
                            },
                          ],
                          loc: { start: 65, end: 220 },
                        },
                        loc: { start: 59, end: 220 },
                      },
                    ],
                    loc: { start: 49, end: 228 },
                  },
                  loc: { start: 39, end: 228 },
                },
              ],
              loc: { start: 31, end: 234 },
            },
            loc: { start: 22, end: 234 },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticatedItem' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'User' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <Core>
      <KeystoneProvider
        adminConfig={adminConfig}
<<<<<<< HEAD
        adminMetaHash="10xswim"
=======
        adminMetaHash="1vl4t4g"
>>>>>>> parent of 35b02f6 (more seed data)
        fieldViews={fieldViews}
        lazyMetadataQuery={lazyMetadataQuery}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </KeystoneProvider>
    </Core>
  );
}
