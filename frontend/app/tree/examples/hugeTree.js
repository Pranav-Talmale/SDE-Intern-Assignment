module.exports = [
  {
    type: "directory",
    name: ".",
    children: [
      {
        type: "file",
        name: "AUTHORS",
      },
      {
        type: "file",
        name: "CHANGELOG.md",
      },
      {
        type: "file",
        name: "CODE_OF_CONDUCT.md",
      },
      {
        type: "file",
        name: "CONTRIBUTING.md",
      },
      {
        type: "file",
        name: "LICENSE",
      },
      {
        type: "file",
        name: "README.md.com",
      },
      {
        type: "file",
        name: "circle.yml",
      },
      {
        type: "directory",
        name: "fixtures",
        children: [
          {
            type: "directory",
            name: "art",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "VectorWidget.js",
              },
              {
                type: "file",
                name: "app.js",
              },
              {
                type: "file",
                name: "index.html",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "webpack.config.js",
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "attribute-behavior",
            children: [
              {
                type: "file",
                name: "AttributeTableSnapshot.md",
              },
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "public",
                children: [
                  {
                    type: "file",
                    name: "favicon.ico",
                  },
                  {
                    type: "file",
                    name: "index.html",
                  },
                  {
                    type: "file",
                    name: "manifest.json",
                  },
                ],
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "App.css",
                  },
                  {
                    type: "file",
                    name: "App.js",
                  },
                  {
                    type: "file",
                    name: "App.test.js",
                  },
                  {
                    type: "file",
                    name: "attributes.js",
                  },
                  {
                    type: "file",
                    name: "index.css",
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "dom",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "public",
                children: [
                  {
                    type: "file",
                    name: "favicon.ico",
                  },
                  {
                    type: "file",
                    name: "index.html",
                  },
                  {
                    type: "file",
                    name: "react-logo.svg",
                  },
                ],
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "directory",
                    name: "components",
                    children: [
                      {
                        type: "file",
                        name: "App.js",
                      },
                      {
                        type: "file",
                        name: "Fixture.js",
                      },
                      {
                        type: "file",
                        name: "FixtureSet.js",
                      },
                      {
                        type: "file",
                        name: "Header.js",
                      },
                      {
                        type: "file",
                        name: "IssueList.js",
                      },
                      {
                        type: "file",
                        name: "TestCase.js",
                      },
                      {
                        type: "directory",
                        name: "fixtures",
                        children: [
                          {
                            type: "directory",
                            name: "buttons",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "custom-elements",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "date-inputs",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                              {
                                type: "file",
                                name: "switch-date-test-case.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "error-handling",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "event-pooling",
                            children: [
                              {
                                type: "file",
                                name: "hit-box.js",
                              },
                              {
                                type: "file",
                                name: "index.js",
                              },
                              {
                                type: "file",
                                name: "mouse-move.js",
                              },
                              {
                                type: "file",
                                name: "persistence.js",
                              },
                            ],
                          },
                          {
                            type: "file",
                            name: "index.js",
                          },
                          {
                            type: "directory",
                            name: "input-change-events",
                            children: [
                              {
                                type: "file",
                                name: "InputPlaceholderFixture.js",
                              },
                              {
                                type: "file",
                                name: "RadioClickFixture.js",
                              },
                              {
                                type: "file",
                                name: "RadioGroupFixture.js",
                              },
                              {
                                type: "file",
                                name: "RadioNameChangeFixture.js",
                              },
                              {
                                type: "file",
                                name: "RangeKeyboardFixture.js",
                              },
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "number-inputs",
                            children: [
                              {
                                type: "file",
                                name: "NumberInputDecimal.js",
                              },
                              {
                                type: "file",
                                name: "NumberInputExtraZeroes.js",
                              },
                              {
                                type: "file",
                                name: "NumberTestCase.js",
                              },
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "password-inputs",
                            children: [
                              {
                                type: "file",
                                name: "PasswordTestCase.js",
                              },
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "range-inputs",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "selects",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "text-inputs",
                            children: [
                              {
                                type: "file",
                                name: "InputTestCase.js",
                              },
                              {
                                type: "file",
                                name: "README.md",
                              },
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                          {
                            type: "directory",
                            name: "textareas",
                            children: [
                              {
                                type: "file",
                                name: "index.js",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "propTypes.js",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                  {
                    type: "file",
                    name: "polyfills.js",
                  },
                  {
                    type: "file",
                    name: "react-loader.js",
                  },
                  {
                    type: "file",
                    name: "style.css",
                  },
                  {
                    type: "file",
                    name: "tags.js",
                  },
                ],
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "expiration",
            children: [
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "public",
                children: [
                  {
                    type: "file",
                    name: "index.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "fiber-debugger",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "public",
                children: [
                  {
                    type: "file",
                    name: "favicon.ico",
                  },
                  {
                    type: "file",
                    name: "index.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "App.js",
                  },
                  {
                    type: "file",
                    name: "Editor.js",
                  },
                  {
                    type: "file",
                    name: "Fibers.js",
                  },
                  {
                    type: "file",
                    name: "describeFibers.js",
                  },
                  {
                    type: "file",
                    name: "index.css",
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "fiber-triangle",
            children: [
              {
                type: "file",
                name: "index.html",
              },
            ],
          },
          {
            type: "directory",
            name: "packaging",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "directory",
                name: "babel-standalone",
                children: [
                  {
                    type: "file",
                    name: "dev.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "browserify",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
              {
                type: "directory",
                name: "brunch",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "directory",
                        name: "app",
                        children: [
                          {
                            type: "file",
                            name: "initialize.js",
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "directory",
                        name: "app",
                        children: [
                          {
                            type: "file",
                            name: "initialize.js",
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
              {
                type: "file",
                name: "build-all.js",
              },
              {
                type: "directory",
                name: "globals",
                children: [
                  {
                    type: "file",
                    name: "dev.html",
                  },
                  {
                    type: "file",
                    name: "prod.html",
                  },
                ],
              },
              {
                type: "file",
                name: "index.html",
              },
              {
                type: "directory",
                name: "requirejs",
                children: [
                  {
                    type: "file",
                    name: "dev.html",
                  },
                  {
                    type: "file",
                    name: "prod.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "rjs",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
              {
                type: "directory",
                name: "systemjs",
                children: [
                  {
                    type: "file",
                    name: "dev.html",
                  },
                  {
                    type: "file",
                    name: "prod.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "systemjs-builder",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
              {
                type: "directory",
                name: "webpack",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
              {
                type: "directory",
                name: "webpack-alias",
                children: [
                  {
                    type: "directory",
                    name: "dev",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "prod",
                    children: [
                      {
                        type: "file",
                        name: "config.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "input.js",
                      },
                      {
                        type: "file",
                        name: "package.json",
                      },
                      {
                        type: "file",
                        name: "yarn.lock",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "reconciler",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "ssr",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "public",
                children: [
                  {
                    type: "file",
                    name: "favicon.ico",
                  },
                  {
                    type: "file",
                    name: "index.html",
                  },
                ],
              },
              {
                type: "directory",
                name: "server",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                  {
                    type: "file",
                    name: "render.js",
                  },
                ],
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "directory",
                    name: "components",
                    children: [
                      {
                        type: "file",
                        name: "App.js",
                      },
                      {
                        type: "file",
                        name: "Chrome.css",
                      },
                      {
                        type: "file",
                        name: "Chrome.js",
                      },
                      {
                        type: "file",
                        name: "Page.css",
                      },
                      {
                        type: "file",
                        name: "Page.js",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
        ],
      },
      {
        type: "file",
        name: "package.json",
      },
      {
        type: "directory",
        name: "packages",
        children: [
          {
            type: "directory",
            name: "events",
            children: [
              {
                type: "file",
                name: "EventPluginHub.js",
              },
              {
                type: "file",
                name: "EventPluginRegistry.js",
              },
              {
                type: "file",
                name: "EventPluginUtils.js",
              },
              {
                type: "file",
                name: "EventPropagators.js",
              },
              {
                type: "file",
                name: "PluginModuleType.js",
              },
              {
                type: "file",
                name: "ReactControlledComponent.js",
              },
              {
                type: "file",
                name: "ReactEventEmitterMixin.js",
              },
              {
                type: "file",
                name: "ReactGenericBatching.js",
              },
              {
                type: "file",
                name: "ReactSyntheticEventType.js",
              },
              {
                type: "file",
                name: "ResponderEventPlugin.js",
              },
              {
                type: "file",
                name: "ResponderSyntheticEvent.js",
              },
              {
                type: "file",
                name: "ResponderTouchHistoryStore.js",
              },
              {
                type: "file",
                name: "SyntheticEvent.js",
              },
              {
                type: "file",
                name: "TouchHistoryMath.js",
              },
              {
                type: "directory",
                name: "__tests__",
                children: [
                  {
                    type: "file",
                    name: "EventPluginRegistry-test.js",
                  },
                  {
                    type: "file",
                    name: "ResponderEventPlugin-test.js",
                  },
                  {
                    type: "file",
                    name: "accumulateInto-test.js",
                  },
                ],
              },
              {
                type: "file",
                name: "accumulate.js",
              },
              {
                type: "file",
                name: "accumulateInto.js",
              },
              {
                type: "file",
                name: "forEachAccumulated.js",
              },
              {
                type: "file",
                name: "package.json",
              },
            ],
          },
          {
            type: "directory",
            name: "react",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "React.js",
                  },
                  {
                    type: "file",
                    name: "ReactBaseClasses.js",
                  },
                  {
                    type: "file",
                    name: "ReactChildren.js",
                  },
                  {
                    type: "file",
                    name: "ReactCurrentOwner.js",
                  },
                  {
                    type: "file",
                    name: "ReactDebugCurrentFrame.js",
                  },
                  {
                    type: "file",
                    name: "ReactElement.js",
                  },
                  {
                    type: "file",
                    name: "ReactElementValidator.js",
                  },
                  {
                    type: "file",
                    name: "ReactNoopUpdateQueue.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactAsyncClassComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactChildren-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactClassEquivalence-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactCoffeeScriptClass-test.coffee",
                      },
                      {
                        type: "file",
                        name: "ReactContextValidator-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactES6Class-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactElement-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactElementClone-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactElementValidator-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactJSXElement-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactJSXElementValidator-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactPureComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTypeScriptClass-test.ts",
                      },
                      {
                        type: "file",
                        name: "createReactClassIntegration-test.js",
                      },
                      {
                        type: "file",
                        name: "onlyChild-test.js",
                      },
                      {
                        type: "directory",
                        name: "testDefinitions",
                        children: [
                          {
                            type: "file",
                            name: "PropTypes.d.ts",
                          },
                          {
                            type: "file",
                            name: "React.d.ts",
                          },
                          {
                            type: "file",
                            name: "ReactDOM.d.ts",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-art",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "Circle.js",
                  },
                  {
                    type: "file",
                    name: "Rectangle.js",
                  },
                  {
                    type: "file",
                    name: "Wedge.js",
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactART.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactART-test.js",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-call-return",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactCallReturn.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactCallReturn-test.js",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-cs-renderer",
            children: [
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactNativeCS.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeCSFeatureFlags.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeCSTypes.js",
                  },
                  {
                    type: "directory",
                    name: "__mocks__",
                    children: [
                      {
                        type: "file",
                        name: "CSStatefulComponent.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactNativeCS-test.js",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-dom",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.fb.js",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                  {
                    type: "file",
                    name: "server.browser.js",
                  },
                  {
                    type: "file",
                    name: "server.js",
                  },
                  {
                    type: "file",
                    name: "server.node.js",
                  },
                  {
                    type: "file",
                    name: "test-utils.js",
                  },
                  {
                    type: "file",
                    name: "unstable-native-dependencies.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "server.browser.js",
              },
              {
                type: "file",
                name: "server.js",
              },
              {
                type: "file",
                name: "server.node.js",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "CSSPropertyOperations-test.js",
                      },
                      {
                        type: "file",
                        name: "DOMPropertyOperations-test.js",
                      },
                      {
                        type: "file",
                        name: "EventPluginHub-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactBrowserEventEmitter-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactChildReconciler-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactComponentLifeCycle-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactCompositeComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactCompositeComponentDOMMinimalism-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactCompositeComponentNestedState-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactCompositeComponentState-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOM-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMAttribute-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMComponentTree-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMEventListener-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiber-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberAsync-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMIframe-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMInput-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMInvalidARIAHook-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMOption-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMProduction-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMRoot-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMSVG-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMSelect-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMSelection-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMServerIntegration-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMTextComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMTextarea-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactEmptyComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactErrorBoundaries-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactEventIndependence-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIdentity-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMockedComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMount-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMountDestruction-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMultiChild-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMultiChildReconcile-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactMultiChildText-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactRenderDocument-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactServerRendering-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactServerRenderingBrowser-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactStatelessComponent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTestUtils-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTreeTraversal-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactUpdates-test.js",
                      },
                      {
                        type: "file",
                        name: "escapeTextContentForBrowser-test.js",
                      },
                      {
                        type: "file",
                        name: "findDOMNode-test.js",
                      },
                      {
                        type: "file",
                        name: "inputValueTracking-test.js",
                      },
                      {
                        type: "file",
                        name: "multiple-copies-of-react-test.js",
                      },
                      {
                        type: "file",
                        name: "quoteAttributeValueForBrowser-test.js",
                      },
                      {
                        type: "file",
                        name: "refs-destruction-test.js",
                      },
                      {
                        type: "file",
                        name: "refs-test.js",
                      },
                      {
                        type: "file",
                        name: "renderSubtreeIntoContainer-test.js",
                      },
                      {
                        type: "file",
                        name: "validateDOMNesting-test.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "client",
                    children: [
                      {
                        type: "file",
                        name: "DOMPropertyOperations.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOM.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMClientInjection.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMComponentTree.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFB.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberComponent.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberInput.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberOption.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberSelect.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMFiberTextarea.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMSelection.js",
                      },
                      {
                        type: "file",
                        name: "ReactInputSelection.js",
                      },
                      {
                        type: "directory",
                        name: "__tests__",
                        children: [
                          {
                            type: "file",
                            name: "dangerouslySetInnerHTML-test.js",
                          },
                          {
                            type: "file",
                            name: "getNodeForCharacterOffset-test.js",
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "getNodeForCharacterOffset.js",
                      },
                      {
                        type: "file",
                        name: "getTextContentAccessor.js",
                      },
                      {
                        type: "file",
                        name: "inputValueTracking.js",
                      },
                      {
                        type: "file",
                        name: "setInnerHTML.js",
                      },
                      {
                        type: "file",
                        name: "setTextContent.js",
                      },
                      {
                        type: "file",
                        name: "validateDOMNesting.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "events",
                    children: [
                      {
                        type: "file",
                        name: "BeforeInputEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "BrowserEventConstants.js",
                      },
                      {
                        type: "file",
                        name: "ChangeEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "DOMEventPluginOrder.js",
                      },
                      {
                        type: "file",
                        name: "EnterLeaveEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "FallbackCompositionState.js",
                      },
                      {
                        type: "file",
                        name: "ReactBrowserEventEmitter.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMEventListener.js",
                      },
                      {
                        type: "file",
                        name: "SelectEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "SimpleEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticAnimationEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticClipboardEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticCompositionEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticDragEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticFocusEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticInputEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticKeyboardEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticMouseEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticTouchEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticTransitionEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticUIEvent.js",
                      },
                      {
                        type: "file",
                        name: "SyntheticWheelEvent.js",
                      },
                      {
                        type: "file",
                        name: "TapEventPlugin.js",
                        children: [
                          {
                            name: "flare",
                            children: [
                              {
                                name: "analytics",
                                children: [
                                  {
                                    name: "cluster",
                                    children: [
                                      {
                                        name: "AgglomerativeCluster",
                                        value: 3938,
                                      },
                                      {
                                        name: "CommunityStructure",
                                        value: 3812,
                                      },
                                      {
                                        name: "HierarchicalCluster",
                                        value: 6714,
                                      },
                                      { name: "MergeEdge", value: 743 },
                                    ],
                                  },
                                  {
                                    name: "graph",
                                    children: [
                                      {
                                        name: "BetweennessCentrality",
                                        value: 3534,
                                      },
                                      { name: "LinkDistance", value: 5731 },
                                      { name: "MaxFlowMinCut", value: 7840 },
                                      { name: "ShortestPaths", value: 5914 },
                                      { name: "SpanningTree", value: 3416 },
                                    ],
                                  },
                                  {
                                    name: "optimization",
                                    children: [
                                      {
                                        name: "AspectRatioBanker",
                                        value: 7074,
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "animate",
                                children: [
                                  { name: "Easing", value: 17010 },
                                  { name: "FunctionSequence", value: 5842 },
                                  {
                                    name: "interpolate",
                                    children: [
                                      {
                                        name: "ArrayInterpolator",
                                        value: 1983,
                                      },
                                      {
                                        name: "ColorInterpolator",
                                        value: 2047,
                                      },
                                      { name: "DateInterpolator", value: 1375 },
                                      { name: "Interpolator", value: 8746 },
                                      {
                                        name: "MatrixInterpolator",
                                        value: 2202,
                                      },
                                      {
                                        name: "NumberInterpolator",
                                        value: 1382,
                                      },
                                      {
                                        name: "ObjectInterpolator",
                                        value: 1629,
                                      },
                                      {
                                        name: "PointInterpolator",
                                        value: 1675,
                                      },
                                      {
                                        name: "RectangleInterpolator",
                                        value: 2042,
                                      },
                                    ],
                                  },
                                  { name: "ISchedulable", value: 1041 },
                                  { name: "Parallel", value: 5176 },
                                  { name: "Pause", value: 449 },
                                  { name: "Scheduler", value: 5593 },
                                  { name: "Sequence", value: 5534 },
                                  { name: "Transition", value: 9201 },
                                  { name: "Transitioner", value: 19975 },
                                  { name: "TransitionEvent", value: 1116 },
                                  { name: "Tween", value: 6006 },
                                ],
                              },
                              {
                                name: "data",
                                children: [
                                  {
                                    name: "converters",
                                    children: [
                                      { name: "Converters", value: 721 },
                                      {
                                        name: "DelimitedTextConverter",
                                        value: 4294,
                                      },
                                      { name: "GraphMLConverter", value: 9800 },
                                      { name: "IDataConverter", value: 1314 },
                                      { name: "JSONConverter", value: 2220 },
                                    ],
                                  },
                                  { name: "DataField", value: 1759 },
                                  { name: "DataSchema", value: 2165 },
                                  { name: "DataSet", value: 586 },
                                  { name: "DataSource", value: 3331 },
                                  { name: "DataTable", value: 772 },
                                  { name: "DataUtil", value: 3322 },
                                ],
                              },
                              {
                                name: "display",
                                children: [
                                  { name: "DirtySprite", value: 8833 },
                                  { name: "LineSprite", value: 1732 },
                                  { name: "RectSprite", value: 3623 },
                                  { name: "TextSprite", value: 10066 },
                                ],
                              },
                              {
                                name: "flex",
                                children: [{ name: "FlareVis", value: 4116 }],
                              },
                              {
                                name: "physics",
                                children: [
                                  { name: "DragForce", value: 1082 },
                                  { name: "GravityForce", value: 1336 },
                                  { name: "IForce", value: 319 },
                                  { name: "NBodyForce", value: 10498 },
                                  { name: "Particle", value: 2822 },
                                  { name: "Simulation", value: 9983 },
                                  { name: "Spring", value: 2213 },
                                  { name: "SpringForce", value: 1681 },
                                ],
                              },
                              {
                                name: "query",
                                children: [
                                  { name: "AggregateExpression", value: 1616 },
                                  { name: "And", value: 1027 },
                                  { name: "Arithmetic", value: 3891 },
                                  { name: "Average", value: 891 },
                                  { name: "BinaryExpression", value: 2893 },
                                  { name: "Comparison", value: 5103 },
                                  { name: "CompositeExpression", value: 3677 },
                                  { name: "Count", value: 781 },
                                  { name: "DateUtil", value: 4141 },
                                  { name: "Distinct", value: 933 },
                                  { name: "Expression", value: 5130 },
                                  { name: "ExpressionIterator", value: 3617 },
                                  { name: "Fn", value: 3240 },
                                  { name: "If", value: 2732 },
                                  { name: "IsA", value: 2039 },
                                  { name: "Literal", value: 1214 },
                                  { name: "Match", value: 3748 },
                                  { name: "Maximum", value: 843 },
                                  {
                                    name: "methods",
                                    children: [
                                      { name: "add", value: 593 },
                                      { name: "and", value: 330 },
                                      { name: "average", value: 287 },
                                      { name: "count", value: 277 },
                                      { name: "distinct", value: 292 },
                                      { name: "div", value: 595 },
                                      { name: "eq", value: 594 },
                                      { name: "fn", value: 460 },
                                      { name: "gt", value: 603 },
                                      { name: "gte", value: 625 },
                                      { name: "iff", value: 748 },
                                      { name: "isa", value: 461 },
                                      { name: "lt", value: 597 },
                                      { name: "lte", value: 619 },
                                      { name: "max", value: 283 },
                                      { name: "min", value: 283 },
                                      { name: "mod", value: 591 },
                                      { name: "mul", value: 603 },
                                      { name: "neq", value: 599 },
                                      { name: "not", value: 386 },
                                      { name: "or", value: 323 },
                                      { name: "orderby", value: 307 },
                                      { name: "range", value: 772 },
                                      { name: "select", value: 296 },
                                      { name: "stddev", value: 363 },
                                      { name: "sub", value: 600 },
                                      { name: "sum", value: 280 },
                                      { name: "update", value: 307 },
                                      { name: "variance", value: 335 },
                                      { name: "where", value: 299 },
                                      { name: "xor", value: 354 },
                                      { name: "_", value: 264 },
                                    ],
                                  },
                                  { name: "Minimum", value: 843 },
                                  { name: "Not", value: 1554 },
                                  { name: "Or", value: 970 },
                                  { name: "Query", value: 13896 },
                                  { name: "Range", value: 1594 },
                                  { name: "StringUtil", value: 4130 },
                                  { name: "Sum", value: 791 },
                                  { name: "Variable", value: 1124 },
                                  { name: "Variance", value: 1876 },
                                  { name: "Xor", value: 1101 },
                                ],
                              },
                              {
                                name: "scale",
                                children: [
                                  { name: "IScaleMap", value: 2105 },
                                  { name: "LinearScale", value: 1316 },
                                  { name: "LogScale", value: 3151 },
                                  { name: "OrdinalScale", value: 3770 },
                                  { name: "QuantileScale", value: 2435 },
                                  { name: "QuantitativeScale", value: 4839 },
                                  { name: "RootScale", value: 1756 },
                                  { name: "Scale", value: 4268 },
                                  { name: "ScaleType", value: 1821 },
                                  { name: "TimeScale", value: 5833 },
                                ],
                              },
                              {
                                name: "util",
                                children: [
                                  { name: "Arrays", value: 8258 },
                                  { name: "Colors", value: 10001 },
                                  { name: "Dates", value: 8217 },
                                  { name: "Displays", value: 12555 },
                                  { name: "Filter", value: 2324 },
                                  { name: "Geometry", value: 10993 },
                                  {
                                    name: "heap",
                                    children: [
                                      { name: "FibonacciHeap", value: 9354 },
                                      { name: "HeapNode", value: 1233 },
                                    ],
                                  },
                                  { name: "IEvaluable", value: 335 },
                                  { name: "IPredicate", value: 383 },
                                  { name: "IValueProxy", value: 874 },
                                  {
                                    name: "math",
                                    children: [
                                      { name: "DenseMatrix", value: 3165 },
                                      { name: "IMatrix", value: 2815 },
                                      { name: "SparseMatrix", value: 3366 },
                                    ],
                                  },
                                  { name: "Maths", value: 17705 },
                                  { name: "Orientation", value: 1486 },
                                  {
                                    name: "palette",
                                    children: [
                                      { name: "ColorPalette", value: 6367 },
                                      { name: "Palette", value: 1229 },
                                      { name: "ShapePalette", value: 2059 },
                                      { name: "SizePalette", value: 2291 },
                                    ],
                                  },
                                  { name: "Property", value: 5559 },
                                  { name: "Shapes", value: 19118 },
                                  { name: "Sort", value: 6887 },
                                  { name: "Stats", value: 6557 },
                                  { name: "Strings", value: 22026 },
                                ],
                              },
                              {
                                name: "vis",
                                children: [
                                  {
                                    name: "axis",
                                    children: [
                                      { name: "Axes", value: 1302 },
                                      { name: "Axis", value: 24593 },
                                      { name: "AxisGridLine", value: 652 },
                                      { name: "AxisLabel", value: 636 },
                                      { name: "CartesianAxes", value: 6703 },
                                    ],
                                  },
                                  {
                                    name: "controls",
                                    children: [
                                      { name: "AnchorControl", value: 2138 },
                                      { name: "ClickControl", value: 3824 },
                                      { name: "Control", value: 1353 },
                                      { name: "ControlList", value: 4665 },
                                      { name: "DragControl", value: 2649 },
                                      { name: "ExpandControl", value: 2832 },
                                      { name: "HoverControl", value: 4896 },
                                      { name: "IControl", value: 763 },
                                      { name: "PanZoomControl", value: 5222 },
                                      { name: "SelectionControl", value: 7862 },
                                      {
                                        name: "TooltipControl",
                                        value: 8435,
                                        children: [
                                          {
                                            name: "flare",
                                            children: [
                                              {
                                                name: "analytics",
                                                children: [
                                                  {
                                                    name: "cluster",
                                                    children: [
                                                      {
                                                        name: "AgglomerativeCluster",
                                                        value: 3938,
                                                      },
                                                      {
                                                        name: "CommunityStructure",
                                                        value: 3812,
                                                      },
                                                      {
                                                        name: "HierarchicalCluster",
                                                        value: 6714,
                                                      },
                                                      {
                                                        name: "MergeEdge",
                                                        value: 743,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "graph",
                                                    children: [
                                                      {
                                                        name: "BetweennessCentrality",
                                                        value: 3534,
                                                      },
                                                      {
                                                        name: "LinkDistance",
                                                        value: 5731,
                                                      },
                                                      {
                                                        name: "MaxFlowMinCut",
                                                        value: 7840,
                                                      },
                                                      {
                                                        name: "ShortestPaths",
                                                        value: 5914,
                                                      },
                                                      {
                                                        name: "SpanningTree",
                                                        value: 3416,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "optimization",
                                                    children: [
                                                      {
                                                        name: "AspectRatioBanker",
                                                        value: 7074,
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                name: "animate",
                                                children: [
                                                  {
                                                    name: "Easing",
                                                    value: 17010,
                                                  },
                                                  {
                                                    name: "FunctionSequence",
                                                    value: 5842,
                                                  },
                                                  {
                                                    name: "interpolate",
                                                    children: [
                                                      {
                                                        name: "ArrayInterpolator",
                                                        value: 1983,
                                                      },
                                                      {
                                                        name: "ColorInterpolator",
                                                        value: 2047,
                                                      },
                                                      {
                                                        name: "DateInterpolator",
                                                        value: 1375,
                                                      },
                                                      {
                                                        name: "Interpolator",
                                                        value: 8746,
                                                      },
                                                      {
                                                        name: "MatrixInterpolator",
                                                        value: 2202,
                                                      },
                                                      {
                                                        name: "NumberInterpolator",
                                                        value: 1382,
                                                      },
                                                      {
                                                        name: "ObjectInterpolator",
                                                        value: 1629,
                                                      },
                                                      {
                                                        name: "PointInterpolator",
                                                        value: 1675,
                                                      },
                                                      {
                                                        name: "RectangleInterpolator",
                                                        value: 2042,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "ISchedulable",
                                                    value: 1041,
                                                  },
                                                  {
                                                    name: "Parallel",
                                                    value: 5176,
                                                  },
                                                  { name: "Pause", value: 449 },
                                                  {
                                                    name: "Scheduler",
                                                    value: 5593,
                                                  },
                                                  {
                                                    name: "Sequence",
                                                    value: 5534,
                                                  },
                                                  {
                                                    name: "Transition",
                                                    value: 9201,
                                                  },
                                                  {
                                                    name: "Transitioner",
                                                    value: 19975,
                                                  },
                                                  {
                                                    name: "TransitionEvent",
                                                    value: 1116,
                                                  },
                                                  {
                                                    name: "Tween",
                                                    value: 6006,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "data",
                                                children: [
                                                  {
                                                    name: "converters",
                                                    children: [
                                                      {
                                                        name: "Converters",
                                                        value: 721,
                                                      },
                                                      {
                                                        name: "DelimitedTextConverter",
                                                        value: 4294,
                                                      },
                                                      {
                                                        name: "GraphMLConverter",
                                                        value: 9800,
                                                      },
                                                      {
                                                        name: "IDataConverter",
                                                        value: 1314,
                                                      },
                                                      {
                                                        name: "JSONConverter",
                                                        value: 2220,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "DataField",
                                                    value: 1759,
                                                  },
                                                  {
                                                    name: "DataSchema",
                                                    value: 2165,
                                                  },
                                                  {
                                                    name: "DataSet",
                                                    value: 586,
                                                  },
                                                  {
                                                    name: "DataSource",
                                                    value: 3331,
                                                  },
                                                  {
                                                    name: "DataTable",
                                                    value: 772,
                                                  },
                                                  {
                                                    name: "DataUtil",
                                                    value: 3322,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "display",
                                                children: [
                                                  {
                                                    name: "DirtySprite",
                                                    value: 8833,
                                                  },
                                                  {
                                                    name: "LineSprite",
                                                    value: 1732,
                                                  },
                                                  {
                                                    name: "RectSprite",
                                                    value: 3623,
                                                  },
                                                  {
                                                    name: "TextSprite",
                                                    value: 10066,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "flex",
                                                children: [
                                                  {
                                                    name: "FlareVis",
                                                    value: 4116,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "physics",
                                                children: [
                                                  {
                                                    name: "DragForce",
                                                    value: 1082,
                                                  },
                                                  {
                                                    name: "GravityForce",
                                                    value: 1336,
                                                  },
                                                  {
                                                    name: "IForce",
                                                    value: 319,
                                                  },
                                                  {
                                                    name: "NBodyForce",
                                                    value: 10498,
                                                  },
                                                  {
                                                    name: "Particle",
                                                    value: 2822,
                                                  },
                                                  {
                                                    name: "Simulation",
                                                    value: 9983,
                                                  },
                                                  {
                                                    name: "Spring",
                                                    value: 2213,
                                                  },
                                                  {
                                                    name: "SpringForce",
                                                    value: 1681,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "query",
                                                children: [
                                                  {
                                                    name: "AggregateExpression",
                                                    value: 1616,
                                                  },
                                                  { name: "And", value: 1027 },
                                                  {
                                                    name: "Arithmetic",
                                                    value: 3891,
                                                  },
                                                  {
                                                    name: "Average",
                                                    value: 891,
                                                  },
                                                  {
                                                    name: "BinaryExpression",
                                                    value: 2893,
                                                  },
                                                  {
                                                    name: "Comparison",
                                                    value: 5103,
                                                  },
                                                  {
                                                    name: "CompositeExpression",
                                                    value: 3677,
                                                  },
                                                  { name: "Count", value: 781 },
                                                  {
                                                    name: "DateUtil",
                                                    value: 4141,
                                                  },
                                                  {
                                                    name: "Distinct",
                                                    value: 933,
                                                  },
                                                  {
                                                    name: "Expression",
                                                    value: 5130,
                                                  },
                                                  {
                                                    name: "ExpressionIterator",
                                                    value: 3617,
                                                  },
                                                  { name: "Fn", value: 3240 },
                                                  { name: "If", value: 2732 },
                                                  { name: "IsA", value: 2039 },
                                                  {
                                                    name: "Literal",
                                                    value: 1214,
                                                  },
                                                  {
                                                    name: "Match",
                                                    value: 3748,
                                                  },
                                                  {
                                                    name: "Maximum",
                                                    value: 843,
                                                  },
                                                  {
                                                    name: "methods",
                                                    children: [
                                                      {
                                                        name: "add",
                                                        value: 593,
                                                      },
                                                      {
                                                        name: "and",
                                                        value: 330,
                                                      },
                                                      {
                                                        name: "average",
                                                        value: 287,
                                                      },
                                                      {
                                                        name: "count",
                                                        value: 277,
                                                      },
                                                      {
                                                        name: "distinct",
                                                        value: 292,
                                                      },
                                                      {
                                                        name: "div",
                                                        value: 595,
                                                      },
                                                      {
                                                        name: "eq",
                                                        value: 594,
                                                      },
                                                      {
                                                        name: "fn",
                                                        value: 460,
                                                      },
                                                      {
                                                        name: "gt",
                                                        value: 603,
                                                      },
                                                      {
                                                        name: "gte",
                                                        value: 625,
                                                      },
                                                      {
                                                        name: "iff",
                                                        value: 748,
                                                      },
                                                      {
                                                        name: "isa",
                                                        value: 461,
                                                      },
                                                      {
                                                        name: "lt",
                                                        value: 597,
                                                      },
                                                      {
                                                        name: "lte",
                                                        value: 619,
                                                      },
                                                      {
                                                        name: "max",
                                                        value: 283,
                                                      },
                                                      {
                                                        name: "min",
                                                        value: 283,
                                                      },
                                                      {
                                                        name: "mod",
                                                        value: 591,
                                                      },
                                                      {
                                                        name: "mul",
                                                        value: 603,
                                                      },
                                                      {
                                                        name: "neq",
                                                        value: 599,
                                                      },
                                                      {
                                                        name: "not",
                                                        value: 386,
                                                      },
                                                      {
                                                        name: "or",
                                                        value: 323,
                                                      },
                                                      {
                                                        name: "orderby",
                                                        value: 307,
                                                      },
                                                      {
                                                        name: "range",
                                                        value: 772,
                                                      },
                                                      {
                                                        name: "select",
                                                        value: 296,
                                                      },
                                                      {
                                                        name: "stddev",
                                                        value: 363,
                                                      },
                                                      {
                                                        name: "sub",
                                                        value: 600,
                                                      },
                                                      {
                                                        name: "sum",
                                                        value: 280,
                                                      },
                                                      {
                                                        name: "update",
                                                        value: 307,
                                                      },
                                                      {
                                                        name: "variance",
                                                        value: 335,
                                                      },
                                                      {
                                                        name: "where",
                                                        value: 299,
                                                      },
                                                      {
                                                        name: "xor",
                                                        value: 354,
                                                      },
                                                      { name: "_", value: 264 },
                                                    ],
                                                  },
                                                  {
                                                    name: "Minimum",
                                                    value: 843,
                                                  },
                                                  { name: "Not", value: 1554 },
                                                  { name: "Or", value: 970 },
                                                  {
                                                    name: "Query",
                                                    value: 13896,
                                                  },
                                                  {
                                                    name: "Range",
                                                    value: 1594,
                                                  },
                                                  {
                                                    name: "StringUtil",
                                                    value: 4130,
                                                  },
                                                  { name: "Sum", value: 791 },
                                                  {
                                                    name: "Variable",
                                                    value: 1124,
                                                  },
                                                  {
                                                    name: "Variance",
                                                    value: 1876,
                                                  },
                                                  { name: "Xor", value: 1101 },
                                                ],
                                              },
                                              {
                                                name: "scale",
                                                children: [
                                                  {
                                                    name: "IScaleMap",
                                                    value: 2105,
                                                  },
                                                  {
                                                    name: "LinearScale",
                                                    value: 1316,
                                                  },
                                                  {
                                                    name: "LogScale",
                                                    value: 3151,
                                                  },
                                                  {
                                                    name: "OrdinalScale",
                                                    value: 3770,
                                                  },
                                                  {
                                                    name: "QuantileScale",
                                                    value: 2435,
                                                  },
                                                  {
                                                    name: "QuantitativeScale",
                                                    value: 4839,
                                                  },
                                                  {
                                                    name: "RootScale",
                                                    value: 1756,
                                                  },
                                                  {
                                                    name: "Scale",
                                                    value: 4268,
                                                  },
                                                  {
                                                    name: "ScaleType",
                                                    value: 1821,
                                                  },
                                                  {
                                                    name: "TimeScale",
                                                    value: 5833,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "util",
                                                children: [
                                                  {
                                                    name: "Arrays",
                                                    value: 8258,
                                                  },
                                                  {
                                                    name: "Colors",
                                                    value: 10001,
                                                  },
                                                  {
                                                    name: "Dates",
                                                    value: 8217,
                                                  },
                                                  {
                                                    name: "Displays",
                                                    value: 12555,
                                                  },
                                                  {
                                                    name: "Filter",
                                                    value: 2324,
                                                  },
                                                  {
                                                    name: "Geometry",
                                                    value: 10993,
                                                  },
                                                  {
                                                    name: "heap",
                                                    children: [
                                                      {
                                                        name: "FibonacciHeap",
                                                        value: 9354,
                                                      },
                                                      {
                                                        name: "HeapNode",
                                                        value: 1233,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "IEvaluable",
                                                    value: 335,
                                                  },
                                                  {
                                                    name: "IPredicate",
                                                    value: 383,
                                                  },
                                                  {
                                                    name: "IValueProxy",
                                                    value: 874,
                                                  },
                                                  {
                                                    name: "math",
                                                    children: [
                                                      {
                                                        name: "DenseMatrix",
                                                        value: 3165,
                                                      },
                                                      {
                                                        name: "IMatrix",
                                                        value: 2815,
                                                      },
                                                      {
                                                        name: "SparseMatrix",
                                                        value: 3366,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "Maths",
                                                    value: 17705,
                                                  },
                                                  {
                                                    name: "Orientation",
                                                    value: 1486,
                                                  },
                                                  {
                                                    name: "palette",
                                                    children: [
                                                      {
                                                        name: "ColorPalette",
                                                        value: 6367,
                                                      },
                                                      {
                                                        name: "Palette",
                                                        value: 1229,
                                                      },
                                                      {
                                                        name: "ShapePalette",
                                                        value: 2059,
                                                      },
                                                      {
                                                        name: "SizePalette",
                                                        value: 2291,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "Property",
                                                    value: 5559,
                                                  },
                                                  {
                                                    name: "Shapes",
                                                    value: 19118,
                                                  },
                                                  { name: "Sort", value: 6887 },
                                                  {
                                                    name: "Stats",
                                                    value: 6557,
                                                  },
                                                  {
                                                    name: "Strings",
                                                    value: 22026,
                                                  },
                                                ],
                                              },
                                              {
                                                name: "vis",
                                                children: [
                                                  {
                                                    name: "axis",
                                                    children: [
                                                      {
                                                        name: "Axes",
                                                        value: 1302,
                                                      },
                                                      {
                                                        name: "Axis",
                                                        value: 24593,
                                                      },
                                                      {
                                                        name: "AxisGridLine",
                                                        value: 652,
                                                      },
                                                      {
                                                        name: "AxisLabel",
                                                        value: 636,
                                                      },
                                                      {
                                                        name: "CartesianAxes",
                                                        value: 6703,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "controls",
                                                    children: [
                                                      {
                                                        name: "AnchorControl",
                                                        value: 2138,
                                                      },
                                                      {
                                                        name: "ClickControl",
                                                        value: 3824,
                                                      },
                                                      {
                                                        name: "Control",
                                                        value: 1353,
                                                      },
                                                      {
                                                        name: "ControlList",
                                                        value: 4665,
                                                      },
                                                      {
                                                        name: "DragControl",
                                                        value: 2649,
                                                      },
                                                      {
                                                        name: "ExpandControl",
                                                        value: 2832,
                                                      },
                                                      {
                                                        name: "HoverControl",
                                                        value: 4896,
                                                      },
                                                      {
                                                        name: "IControl",
                                                        value: 763,
                                                      },
                                                      {
                                                        name: "PanZoomControl",
                                                        value: 5222,
                                                      },
                                                      {
                                                        name: "SelectionControl",
                                                        value: 7862,
                                                      },
                                                      {
                                                        name: "TooltipControl",
                                                        value: 8435,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "data",
                                                    children: [
                                                      {
                                                        name: "Data",
                                                        value: 20544,
                                                      },
                                                      {
                                                        name: "DataList",
                                                        value: 19788,
                                                      },
                                                      {
                                                        name: "DataSprite",
                                                        value: 10349,
                                                      },
                                                      {
                                                        name: "EdgeSprite",
                                                        value: 3301,
                                                      },
                                                      {
                                                        name: "NodeSprite",
                                                        value: 19382,
                                                      },
                                                      {
                                                        name: "render",
                                                        children: [
                                                          {
                                                            name: "ArrowType",
                                                            value: 698,
                                                          },
                                                          {
                                                            name: "EdgeRenderer",
                                                            value: 5569,
                                                          },
                                                          {
                                                            name: "IRenderer",
                                                            value: 353,
                                                          },
                                                          {
                                                            name: "ShapeRenderer",
                                                            value: 2247,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "ScaleBinding",
                                                        value: 11275,
                                                      },
                                                      {
                                                        name: "Tree",
                                                        value: 7147,
                                                      },
                                                      {
                                                        name: "TreeBuilder",
                                                        value: 9930,
                                                        children: [
                                                          {
                                                            name: "flare",
                                                            children: [
                                                              {
                                                                name: "analytics",
                                                                children: [
                                                                  {
                                                                    name: "cluster",
                                                                    children: [
                                                                      {
                                                                        name: "AgglomerativeCluster",
                                                                        value: 3938,
                                                                      },
                                                                      {
                                                                        name: "CommunityStructure",
                                                                        value: 3812,
                                                                      },
                                                                      {
                                                                        name: "HierarchicalCluster",
                                                                        value: 6714,
                                                                      },
                                                                      {
                                                                        name: "MergeEdge",
                                                                        value: 743,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "graph",
                                                                    children: [
                                                                      {
                                                                        name: "BetweennessCentrality",
                                                                        value: 3534,
                                                                      },
                                                                      {
                                                                        name: "LinkDistance",
                                                                        value: 5731,
                                                                      },
                                                                      {
                                                                        name: "MaxFlowMinCut",
                                                                        value: 7840,
                                                                      },
                                                                      {
                                                                        name: "ShortestPaths",
                                                                        value: 5914,
                                                                      },
                                                                      {
                                                                        name: "SpanningTree",
                                                                        value: 3416,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "optimization",
                                                                    children: [
                                                                      {
                                                                        name: "AspectRatioBanker",
                                                                        value: 7074,
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "animate",
                                                                children: [
                                                                  {
                                                                    name: "Easing",
                                                                    value: 17010,
                                                                  },
                                                                  {
                                                                    name: "FunctionSequence",
                                                                    value: 5842,
                                                                  },
                                                                  {
                                                                    name: "interpolate",
                                                                    children: [
                                                                      {
                                                                        name: "ArrayInterpolator",
                                                                        value: 1983,
                                                                      },
                                                                      {
                                                                        name: "ColorInterpolator",
                                                                        value: 2047,
                                                                      },
                                                                      {
                                                                        name: "DateInterpolator",
                                                                        value: 1375,
                                                                      },
                                                                      {
                                                                        name: "Interpolator",
                                                                        value: 8746,
                                                                      },
                                                                      {
                                                                        name: "MatrixInterpolator",
                                                                        value: 2202,
                                                                      },
                                                                      {
                                                                        name: "NumberInterpolator",
                                                                        value: 1382,
                                                                      },
                                                                      {
                                                                        name: "ObjectInterpolator",
                                                                        value: 1629,
                                                                      },
                                                                      {
                                                                        name: "PointInterpolator",
                                                                        value: 1675,
                                                                      },
                                                                      {
                                                                        name: "RectangleInterpolator",
                                                                        value: 2042,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "ISchedulable",
                                                                    value: 1041,
                                                                  },
                                                                  {
                                                                    name: "Parallel",
                                                                    value: 5176,
                                                                  },
                                                                  {
                                                                    name: "Pause",
                                                                    value: 449,
                                                                  },
                                                                  {
                                                                    name: "Scheduler",
                                                                    value: 5593,
                                                                  },
                                                                  {
                                                                    name: "Sequence",
                                                                    value: 5534,
                                                                  },
                                                                  {
                                                                    name: "Transition",
                                                                    value: 9201,
                                                                  },
                                                                  {
                                                                    name: "Transitioner",
                                                                    value: 19975,
                                                                  },
                                                                  {
                                                                    name: "TransitionEvent",
                                                                    value: 1116,
                                                                  },
                                                                  {
                                                                    name: "Tween",
                                                                    value: 6006,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "data",
                                                                children: [
                                                                  {
                                                                    name: "converters",
                                                                    children: [
                                                                      {
                                                                        name: "Converters",
                                                                        value: 721,
                                                                      },
                                                                      {
                                                                        name: "DelimitedTextConverter",
                                                                        value: 4294,
                                                                      },
                                                                      {
                                                                        name: "GraphMLConverter",
                                                                        value: 9800,
                                                                      },
                                                                      {
                                                                        name: "IDataConverter",
                                                                        value: 1314,
                                                                      },
                                                                      {
                                                                        name: "JSONConverter",
                                                                        value: 2220,
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "flare",
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    name: "analytics",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "cluster",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "AgglomerativeCluster",
                                                                                                value: 3938,
                                                                                              },
                                                                                              {
                                                                                                name: "CommunityStructure",
                                                                                                value: 3812,
                                                                                              },
                                                                                              {
                                                                                                name: "HierarchicalCluster",
                                                                                                value: 6714,
                                                                                              },
                                                                                              {
                                                                                                name: "MergeEdge",
                                                                                                value: 743,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "graph",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "BetweennessCentrality",
                                                                                                value: 3534,
                                                                                              },
                                                                                              {
                                                                                                name: "LinkDistance",
                                                                                                value: 5731,
                                                                                              },
                                                                                              {
                                                                                                name: "MaxFlowMinCut",
                                                                                                value: 7840,
                                                                                              },
                                                                                              {
                                                                                                name: "ShortestPaths",
                                                                                                value: 5914,
                                                                                              },
                                                                                              {
                                                                                                name: "SpanningTree",
                                                                                                value: 3416,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "optimization",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "AspectRatioBanker",
                                                                                                value: 7074,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "animate",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "Easing",
                                                                                          value: 17010,
                                                                                        },
                                                                                        {
                                                                                          name: "FunctionSequence",
                                                                                          value: 5842,
                                                                                        },
                                                                                        {
                                                                                          name: "interpolate",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "ArrayInterpolator",
                                                                                                value: 1983,
                                                                                              },
                                                                                              {
                                                                                                name: "ColorInterpolator",
                                                                                                value: 2047,
                                                                                              },
                                                                                              {
                                                                                                name: "DateInterpolator",
                                                                                                value: 1375,
                                                                                              },
                                                                                              {
                                                                                                name: "Interpolator",
                                                                                                value: 8746,
                                                                                              },
                                                                                              {
                                                                                                name: "MatrixInterpolator",
                                                                                                value: 2202,
                                                                                              },
                                                                                              {
                                                                                                name: "NumberInterpolator",
                                                                                                value: 1382,
                                                                                              },
                                                                                              {
                                                                                                name: "ObjectInterpolator",
                                                                                                value: 1629,
                                                                                              },
                                                                                              {
                                                                                                name: "PointInterpolator",
                                                                                                value: 1675,
                                                                                              },
                                                                                              {
                                                                                                name: "RectangleInterpolator",
                                                                                                value: 2042,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "ISchedulable",
                                                                                          value: 1041,
                                                                                        },
                                                                                        {
                                                                                          name: "Parallel",
                                                                                          value: 5176,
                                                                                        },
                                                                                        {
                                                                                          name: "Pause",
                                                                                          value: 449,
                                                                                        },
                                                                                        {
                                                                                          name: "Scheduler",
                                                                                          value: 5593,
                                                                                        },
                                                                                        {
                                                                                          name: "Sequence",
                                                                                          value: 5534,
                                                                                        },
                                                                                        {
                                                                                          name: "Transition",
                                                                                          value: 9201,
                                                                                        },
                                                                                        {
                                                                                          name: "Transitioner",
                                                                                          value: 19975,
                                                                                        },
                                                                                        {
                                                                                          name: "TransitionEvent",
                                                                                          value: 1116,
                                                                                        },
                                                                                        {
                                                                                          name: "Tween",
                                                                                          value: 6006,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "data",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "converters",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "Converters",
                                                                                                value: 721,
                                                                                              },
                                                                                              {
                                                                                                name: "DelimitedTextConverter",
                                                                                                value: 4294,
                                                                                              },
                                                                                              {
                                                                                                name: "GraphMLConverter",
                                                                                                value: 9800,
                                                                                              },
                                                                                              {
                                                                                                name: "IDataConverter",
                                                                                                value: 1314,
                                                                                              },
                                                                                              {
                                                                                                name: "JSONConverter",
                                                                                                value: 2220,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "DataField",
                                                                                          value: 1759,
                                                                                        },
                                                                                        {
                                                                                          name: "DataSchema",
                                                                                          value: 2165,
                                                                                        },
                                                                                        {
                                                                                          name: "DataSet",
                                                                                          value: 586,
                                                                                        },
                                                                                        {
                                                                                          name: "DataSource",
                                                                                          value: 3331,
                                                                                        },
                                                                                        {
                                                                                          name: "DataTable",
                                                                                          value: 772,
                                                                                        },
                                                                                        {
                                                                                          name: "DataUtil",
                                                                                          value: 3322,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "display",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "DirtySprite",
                                                                                          value: 8833,
                                                                                        },
                                                                                        {
                                                                                          name: "LineSprite",
                                                                                          value: 1732,
                                                                                        },
                                                                                        {
                                                                                          name: "RectSprite",
                                                                                          value: 3623,
                                                                                        },
                                                                                        {
                                                                                          name: "TextSprite",
                                                                                          value: 10066,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "flex",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "FlareVis",
                                                                                          value: 4116,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "physics",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "DragForce",
                                                                                          value: 1082,
                                                                                        },
                                                                                        {
                                                                                          name: "GravityForce",
                                                                                          value: 1336,
                                                                                        },
                                                                                        {
                                                                                          name: "IForce",
                                                                                          value: 319,
                                                                                        },
                                                                                        {
                                                                                          name: "NBodyForce",
                                                                                          value: 10498,
                                                                                        },
                                                                                        {
                                                                                          name: "Particle",
                                                                                          value: 2822,
                                                                                        },
                                                                                        {
                                                                                          name: "Simulation",
                                                                                          value: 9983,
                                                                                        },
                                                                                        {
                                                                                          name: "Spring",
                                                                                          value: 2213,
                                                                                        },
                                                                                        {
                                                                                          name: "SpringForce",
                                                                                          value: 1681,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "query",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "AggregateExpression",
                                                                                          value: 1616,
                                                                                        },
                                                                                        {
                                                                                          name: "And",
                                                                                          value: 1027,
                                                                                        },
                                                                                        {
                                                                                          name: "Arithmetic",
                                                                                          value: 3891,
                                                                                        },
                                                                                        {
                                                                                          name: "Average",
                                                                                          value: 891,
                                                                                        },
                                                                                        {
                                                                                          name: "BinaryExpression",
                                                                                          value: 2893,
                                                                                        },
                                                                                        {
                                                                                          name: "Comparison",
                                                                                          value: 5103,
                                                                                        },
                                                                                        {
                                                                                          name: "CompositeExpression",
                                                                                          value: 3677,
                                                                                        },
                                                                                        {
                                                                                          name: "Count",
                                                                                          value: 781,
                                                                                        },
                                                                                        {
                                                                                          name: "DateUtil",
                                                                                          value: 4141,
                                                                                        },
                                                                                        {
                                                                                          name: "Distinct",
                                                                                          value: 933,
                                                                                        },
                                                                                        {
                                                                                          name: "Expression",
                                                                                          value: 5130,
                                                                                        },
                                                                                        {
                                                                                          name: "ExpressionIterator",
                                                                                          value: 3617,
                                                                                        },
                                                                                        {
                                                                                          name: "Fn",
                                                                                          value: 3240,
                                                                                        },
                                                                                        {
                                                                                          name: "If",
                                                                                          value: 2732,
                                                                                        },
                                                                                        {
                                                                                          name: "IsA",
                                                                                          value: 2039,
                                                                                        },
                                                                                        {
                                                                                          name: "Literal",
                                                                                          value: 1214,
                                                                                        },
                                                                                        {
                                                                                          name: "Match",
                                                                                          value: 3748,
                                                                                        },
                                                                                        {
                                                                                          name: "Maximum",
                                                                                          value: 843,
                                                                                        },
                                                                                        {
                                                                                          name: "methods",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "add",
                                                                                                value: 593,
                                                                                              },
                                                                                              {
                                                                                                name: "and",
                                                                                                value: 330,
                                                                                              },
                                                                                              {
                                                                                                name: "average",
                                                                                                value: 287,
                                                                                              },
                                                                                              {
                                                                                                name: "count",
                                                                                                value: 277,
                                                                                              },
                                                                                              {
                                                                                                name: "distinct",
                                                                                                value: 292,
                                                                                              },
                                                                                              {
                                                                                                name: "div",
                                                                                                value: 595,
                                                                                              },
                                                                                              {
                                                                                                name: "eq",
                                                                                                value: 594,
                                                                                              },
                                                                                              {
                                                                                                name: "fn",
                                                                                                value: 460,
                                                                                              },
                                                                                              {
                                                                                                name: "gt",
                                                                                                value: 603,
                                                                                              },
                                                                                              {
                                                                                                name: "gte",
                                                                                                value: 625,
                                                                                              },
                                                                                              {
                                                                                                name: "iff",
                                                                                                value: 748,
                                                                                              },
                                                                                              {
                                                                                                name: "isa",
                                                                                                value: 461,
                                                                                              },
                                                                                              {
                                                                                                name: "lt",
                                                                                                value: 597,
                                                                                              },
                                                                                              {
                                                                                                name: "lte",
                                                                                                value: 619,
                                                                                              },
                                                                                              {
                                                                                                name: "max",
                                                                                                value: 283,
                                                                                              },
                                                                                              {
                                                                                                name: "min",
                                                                                                value: 283,
                                                                                              },
                                                                                              {
                                                                                                name: "mod",
                                                                                                value: 591,
                                                                                              },
                                                                                              {
                                                                                                name: "mul",
                                                                                                value: 603,
                                                                                              },
                                                                                              {
                                                                                                name: "neq",
                                                                                                value: 599,
                                                                                              },
                                                                                              {
                                                                                                name: "not",
                                                                                                value: 386,
                                                                                              },
                                                                                              {
                                                                                                name: "or",
                                                                                                value: 323,
                                                                                              },
                                                                                              {
                                                                                                name: "orderby",
                                                                                                value: 307,
                                                                                              },
                                                                                              {
                                                                                                name: "range",
                                                                                                value: 772,
                                                                                              },
                                                                                              {
                                                                                                name: "select",
                                                                                                value: 296,
                                                                                              },
                                                                                              {
                                                                                                name: "stddev",
                                                                                                value: 363,
                                                                                              },
                                                                                              {
                                                                                                name: "sub",
                                                                                                value: 600,
                                                                                              },
                                                                                              {
                                                                                                name: "sum",
                                                                                                value: 280,
                                                                                              },
                                                                                              {
                                                                                                name: "update",
                                                                                                value: 307,
                                                                                              },
                                                                                              {
                                                                                                name: "variance",
                                                                                                value: 335,
                                                                                              },
                                                                                              {
                                                                                                name: "where",
                                                                                                value: 299,
                                                                                              },
                                                                                              {
                                                                                                name: "xor",
                                                                                                value: 354,
                                                                                              },
                                                                                              {
                                                                                                name: "_",
                                                                                                value: 264,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "Minimum",
                                                                                          value: 843,
                                                                                        },
                                                                                        {
                                                                                          name: "Not",
                                                                                          value: 1554,
                                                                                        },
                                                                                        {
                                                                                          name: "Or",
                                                                                          value: 970,
                                                                                        },
                                                                                        {
                                                                                          name: "Query",
                                                                                          value: 13896,
                                                                                        },
                                                                                        {
                                                                                          name: "Range",
                                                                                          value: 1594,
                                                                                        },
                                                                                        {
                                                                                          name: "StringUtil",
                                                                                          value: 4130,
                                                                                        },
                                                                                        {
                                                                                          name: "Sum",
                                                                                          value: 791,
                                                                                        },
                                                                                        {
                                                                                          name: "Variable",
                                                                                          value: 1124,
                                                                                        },
                                                                                        {
                                                                                          name: "Variance",
                                                                                          value: 1876,
                                                                                        },
                                                                                        {
                                                                                          name: "Xor",
                                                                                          value: 1101,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "scale",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "IScaleMap",
                                                                                          value: 2105,
                                                                                        },
                                                                                        {
                                                                                          name: "LinearScale",
                                                                                          value: 1316,
                                                                                        },
                                                                                        {
                                                                                          name: "LogScale",
                                                                                          value: 3151,
                                                                                        },
                                                                                        {
                                                                                          name: "OrdinalScale",
                                                                                          value: 3770,
                                                                                        },
                                                                                        {
                                                                                          name: "QuantileScale",
                                                                                          value: 2435,
                                                                                        },
                                                                                        {
                                                                                          name: "QuantitativeScale",
                                                                                          value: 4839,
                                                                                        },
                                                                                        {
                                                                                          name: "RootScale",
                                                                                          value: 1756,
                                                                                        },
                                                                                        {
                                                                                          name: "Scale",
                                                                                          value: 4268,
                                                                                        },
                                                                                        {
                                                                                          name: "ScaleType",
                                                                                          value: 1821,
                                                                                        },
                                                                                        {
                                                                                          name: "TimeScale",
                                                                                          value: 5833,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "util",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "Arrays",
                                                                                          value: 8258,
                                                                                        },
                                                                                        {
                                                                                          name: "Colors",
                                                                                          value: 10001,
                                                                                        },
                                                                                        {
                                                                                          name: "Dates",
                                                                                          value: 8217,
                                                                                        },
                                                                                        {
                                                                                          name: "Displays",
                                                                                          value: 12555,
                                                                                        },
                                                                                        {
                                                                                          name: "Filter",
                                                                                          value: 2324,
                                                                                        },
                                                                                        {
                                                                                          name: "Geometry",
                                                                                          value: 10993,
                                                                                        },
                                                                                        {
                                                                                          name: "heap",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "FibonacciHeap",
                                                                                                value: 9354,
                                                                                              },
                                                                                              {
                                                                                                name: "HeapNode",
                                                                                                value: 1233,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "IEvaluable",
                                                                                          value: 335,
                                                                                        },
                                                                                        {
                                                                                          name: "IPredicate",
                                                                                          value: 383,
                                                                                        },
                                                                                        {
                                                                                          name: "IValueProxy",
                                                                                          value: 874,
                                                                                        },
                                                                                        {
                                                                                          name: "math",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "DenseMatrix",
                                                                                                value: 3165,
                                                                                              },
                                                                                              {
                                                                                                name: "IMatrix",
                                                                                                value: 2815,
                                                                                              },
                                                                                              {
                                                                                                name: "SparseMatrix",
                                                                                                value: 3366,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "Maths",
                                                                                          value: 17705,
                                                                                        },
                                                                                        {
                                                                                          name: "Orientation",
                                                                                          value: 1486,
                                                                                        },
                                                                                        {
                                                                                          name: "palette",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "ColorPalette",
                                                                                                value: 6367,
                                                                                              },
                                                                                              {
                                                                                                name: "Palette",
                                                                                                value: 1229,
                                                                                              },
                                                                                              {
                                                                                                name: "ShapePalette",
                                                                                                value: 2059,
                                                                                              },
                                                                                              {
                                                                                                name: "SizePalette",
                                                                                                value: 2291,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "Property",
                                                                                          value: 5559,
                                                                                        },
                                                                                        {
                                                                                          name: "Shapes",
                                                                                          value: 19118,
                                                                                        },
                                                                                        {
                                                                                          name: "Sort",
                                                                                          value: 6887,
                                                                                        },
                                                                                        {
                                                                                          name: "Stats",
                                                                                          value: 6557,
                                                                                        },
                                                                                        {
                                                                                          name: "Strings",
                                                                                          value: 22026,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                  {
                                                                                    name: "vis",
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          name: "axis",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "Axes",
                                                                                                value: 1302,
                                                                                              },
                                                                                              {
                                                                                                name: "Axis",
                                                                                                value: 24593,
                                                                                              },
                                                                                              {
                                                                                                name: "AxisGridLine",
                                                                                                value: 652,
                                                                                              },
                                                                                              {
                                                                                                name: "AxisLabel",
                                                                                                value: 636,
                                                                                              },
                                                                                              {
                                                                                                name: "CartesianAxes",
                                                                                                value: 6703,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "controls",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "AnchorControl",
                                                                                                value: 2138,
                                                                                              },
                                                                                              {
                                                                                                name: "ClickControl",
                                                                                                value: 3824,
                                                                                              },
                                                                                              {
                                                                                                name: "Control",
                                                                                                value: 1353,
                                                                                              },
                                                                                              {
                                                                                                name: "ControlList",
                                                                                                value: 4665,
                                                                                              },
                                                                                              {
                                                                                                name: "DragControl",
                                                                                                value: 2649,
                                                                                              },
                                                                                              {
                                                                                                name: "ExpandControl",
                                                                                                value: 2832,
                                                                                              },
                                                                                              {
                                                                                                name: "HoverControl",
                                                                                                value: 4896,
                                                                                              },
                                                                                              {
                                                                                                name: "IControl",
                                                                                                value: 763,
                                                                                              },
                                                                                              {
                                                                                                name: "PanZoomControl",
                                                                                                value: 5222,
                                                                                              },
                                                                                              {
                                                                                                name: "SelectionControl",
                                                                                                value: 7862,
                                                                                              },
                                                                                              {
                                                                                                name: "TooltipControl",
                                                                                                value: 8435,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "data",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "Data",
                                                                                                value: 20544,
                                                                                              },
                                                                                              {
                                                                                                name: "DataList",
                                                                                                value: 19788,
                                                                                              },
                                                                                              {
                                                                                                name: "DataSprite",
                                                                                                value: 10349,
                                                                                              },
                                                                                              {
                                                                                                name: "EdgeSprite",
                                                                                                value: 3301,
                                                                                              },
                                                                                              {
                                                                                                name: "NodeSprite",
                                                                                                value: 19382,
                                                                                              },
                                                                                              {
                                                                                                name: "render",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "ArrowType",
                                                                                                      value: 698,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "EdgeRenderer",
                                                                                                      value: 5569,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "IRenderer",
                                                                                                      value: 353,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "ShapeRenderer",
                                                                                                      value: 2247,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "ScaleBinding",
                                                                                                value: 11275,
                                                                                              },
                                                                                              {
                                                                                                name: "Tree",
                                                                                                value: 7147,
                                                                                              },
                                                                                              {
                                                                                                name: "TreeBuilder",
                                                                                                value: 9930,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "events",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "DataEvent",
                                                                                                value: 2313,
                                                                                              },
                                                                                              {
                                                                                                name: "SelectionEvent",
                                                                                                value: 1880,
                                                                                              },
                                                                                              {
                                                                                                name: "TooltipEvent",
                                                                                                value: 1701,
                                                                                              },
                                                                                              {
                                                                                                name: "VisualizationEvent",
                                                                                                value: 1117,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "legend",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "Legend",
                                                                                                value: 20859,
                                                                                              },
                                                                                              {
                                                                                                name: "LegendItem",
                                                                                                value: 4614,
                                                                                              },
                                                                                              {
                                                                                                name: "LegendRange",
                                                                                                value: 10530,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "operator",
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                name: "distortion",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "BifocalDistortion",
                                                                                                      value: 4461,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "Distortion",
                                                                                                      value: 6314,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "FisheyeDistortion",
                                                                                                      value: 3444,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "encoder",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "ColorEncoder",
                                                                                                      value: 3179,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "Encoder",
                                                                                                      value: 4060,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "PropertyEncoder",
                                                                                                      value: 4138,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "ShapeEncoder",
                                                                                                      value: 1690,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "SizeEncoder",
                                                                                                      value: 1830,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "filter",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "FisheyeTreeFilter",
                                                                                                      value: 5219,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "GraphDistanceFilter",
                                                                                                      value: 3165,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "VisibilityFilter",
                                                                                                      value: 3509,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "IOperator",
                                                                                                value: 1286,
                                                                                              },
                                                                                              {
                                                                                                name: "label",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "Labeler",
                                                                                                      value: 9956,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "RadialLabeler",
                                                                                                      value: 3899,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "StackedAreaLabeler",
                                                                                                      value: 3202,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "layout",
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      name: "AxisLayout",
                                                                                                      value: 6725,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "BundledEdgeRouter",
                                                                                                      value: 3727,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "CircleLayout",
                                                                                                      value: 9317,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "CirclePackingLayout",
                                                                                                      value: 12003,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "DendrogramLayout",
                                                                                                      value: 4853,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "ForceDirectedLayout",
                                                                                                      value: 8411,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "IcicleTreeLayout",
                                                                                                      value: 4864,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "IndentedTreeLayout",
                                                                                                      value: 3174,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "Layout",
                                                                                                      value: 7881,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "NodeLinkTreeLayout",
                                                                                                      value: 12870,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "PieLayout",
                                                                                                      value: 2728,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "RadialTreeLayout",
                                                                                                      value: 12348,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "RandomLayout",
                                                                                                      value: 870,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "StackedAreaLayout",
                                                                                                      value: 9121,
                                                                                                    },
                                                                                                    {
                                                                                                      name: "TreeMapLayout",
                                                                                                      value: 9191,
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                name: "Operator",
                                                                                                value: 2490,
                                                                                              },
                                                                                              {
                                                                                                name: "OperatorList",
                                                                                                value: 5248,
                                                                                              },
                                                                                              {
                                                                                                name: "OperatorSequence",
                                                                                                value: 4190,
                                                                                              },
                                                                                              {
                                                                                                name: "OperatorSwitch",
                                                                                                value: 2581,
                                                                                              },
                                                                                              {
                                                                                                name: "SortOperator",
                                                                                                value: 2023,
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                          name: "Visualization",
                                                                                          value: 16540,
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                ],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "DataField",
                                                                    value: 1759,
                                                                  },
                                                                  {
                                                                    name: "DataSchema",
                                                                    value: 2165,
                                                                  },
                                                                  {
                                                                    name: "DataSet",
                                                                    value: 586,
                                                                  },
                                                                  {
                                                                    name: "DataSource",
                                                                    value: 3331,
                                                                  },
                                                                  {
                                                                    name: "DataTable",
                                                                    value: 772,
                                                                  },
                                                                  {
                                                                    name: "DataUtil",
                                                                    value: 3322,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "display",
                                                                children: [
                                                                  {
                                                                    name: "DirtySprite",
                                                                    value: 8833,
                                                                  },
                                                                  {
                                                                    name: "LineSprite",
                                                                    value: 1732,
                                                                  },
                                                                  {
                                                                    name: "RectSprite",
                                                                    value: 3623,
                                                                  },
                                                                  {
                                                                    name: "TextSprite",
                                                                    value: 10066,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "flex",
                                                                children: [
                                                                  {
                                                                    name: "FlareVis",
                                                                    value: 4116,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "physics",
                                                                children: [
                                                                  {
                                                                    name: "DragForce",
                                                                    value: 1082,
                                                                  },
                                                                  {
                                                                    name: "GravityForce",
                                                                    value: 1336,
                                                                  },
                                                                  {
                                                                    name: "IForce",
                                                                    value: 319,
                                                                  },
                                                                  {
                                                                    name: "NBodyForce",
                                                                    value: 10498,
                                                                  },
                                                                  {
                                                                    name: "Particle",
                                                                    value: 2822,
                                                                  },
                                                                  {
                                                                    name: "Simulation",
                                                                    value: 9983,
                                                                  },
                                                                  {
                                                                    name: "Spring",
                                                                    value: 2213,
                                                                  },
                                                                  {
                                                                    name: "SpringForce",
                                                                    value: 1681,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "query",
                                                                children: [
                                                                  {
                                                                    name: "AggregateExpression",
                                                                    value: 1616,
                                                                  },
                                                                  {
                                                                    name: "And",
                                                                    value: 1027,
                                                                  },
                                                                  {
                                                                    name: "Arithmetic",
                                                                    value: 3891,
                                                                  },
                                                                  {
                                                                    name: "Average",
                                                                    value: 891,
                                                                  },
                                                                  {
                                                                    name: "BinaryExpression",
                                                                    value: 2893,
                                                                  },
                                                                  {
                                                                    name: "Comparison",
                                                                    value: 5103,
                                                                  },
                                                                  {
                                                                    name: "CompositeExpression",
                                                                    value: 3677,
                                                                  },
                                                                  {
                                                                    name: "Count",
                                                                    value: 781,
                                                                  },
                                                                  {
                                                                    name: "DateUtil",
                                                                    value: 4141,
                                                                  },
                                                                  {
                                                                    name: "Distinct",
                                                                    value: 933,
                                                                  },
                                                                  {
                                                                    name: "Expression",
                                                                    value: 5130,
                                                                  },
                                                                  {
                                                                    name: "ExpressionIterator",
                                                                    value: 3617,
                                                                  },
                                                                  {
                                                                    name: "Fn",
                                                                    value: 3240,
                                                                  },
                                                                  {
                                                                    name: "If",
                                                                    value: 2732,
                                                                  },
                                                                  {
                                                                    name: "IsA",
                                                                    value: 2039,
                                                                  },
                                                                  {
                                                                    name: "Literal",
                                                                    value: 1214,
                                                                  },
                                                                  {
                                                                    name: "Match",
                                                                    value: 3748,
                                                                  },
                                                                  {
                                                                    name: "Maximum",
                                                                    value: 843,
                                                                  },
                                                                  {
                                                                    name: "methods",
                                                                    children: [
                                                                      {
                                                                        name: "add",
                                                                        value: 593,
                                                                      },
                                                                      {
                                                                        name: "and",
                                                                        value: 330,
                                                                      },
                                                                      {
                                                                        name: "average",
                                                                        value: 287,
                                                                      },
                                                                      {
                                                                        name: "count",
                                                                        value: 277,
                                                                      },
                                                                      {
                                                                        name: "distinct",
                                                                        value: 292,
                                                                      },
                                                                      {
                                                                        name: "div",
                                                                        value: 595,
                                                                      },
                                                                      {
                                                                        name: "eq",
                                                                        value: 594,
                                                                      },
                                                                      {
                                                                        name: "fn",
                                                                        value: 460,
                                                                      },
                                                                      {
                                                                        name: "gt",
                                                                        value: 603,
                                                                      },
                                                                      {
                                                                        name: "gte",
                                                                        value: 625,
                                                                      },
                                                                      {
                                                                        name: "iff",
                                                                        value: 748,
                                                                      },
                                                                      {
                                                                        name: "isa",
                                                                        value: 461,
                                                                      },
                                                                      {
                                                                        name: "lt",
                                                                        value: 597,
                                                                      },
                                                                      {
                                                                        name: "lte",
                                                                        value: 619,
                                                                      },
                                                                      {
                                                                        name: "max",
                                                                        value: 283,
                                                                      },
                                                                      {
                                                                        name: "min",
                                                                        value: 283,
                                                                      },
                                                                      {
                                                                        name: "mod",
                                                                        value: 591,
                                                                      },
                                                                      {
                                                                        name: "mul",
                                                                        value: 603,
                                                                      },
                                                                      {
                                                                        name: "neq",
                                                                        value: 599,
                                                                      },
                                                                      {
                                                                        name: "not",
                                                                        value: 386,
                                                                      },
                                                                      {
                                                                        name: "or",
                                                                        value: 323,
                                                                      },
                                                                      {
                                                                        name: "orderby",
                                                                        value: 307,
                                                                      },
                                                                      {
                                                                        name: "range",
                                                                        value: 772,
                                                                      },
                                                                      {
                                                                        name: "select",
                                                                        value: 296,
                                                                      },
                                                                      {
                                                                        name: "stddev",
                                                                        value: 363,
                                                                      },
                                                                      {
                                                                        name: "sub",
                                                                        value: 600,
                                                                      },
                                                                      {
                                                                        name: "sum",
                                                                        value: 280,
                                                                      },
                                                                      {
                                                                        name: "update",
                                                                        value: 307,
                                                                      },
                                                                      {
                                                                        name: "variance",
                                                                        value: 335,
                                                                      },
                                                                      {
                                                                        name: "where",
                                                                        value: 299,
                                                                      },
                                                                      {
                                                                        name: "xor",
                                                                        value: 354,
                                                                      },
                                                                      {
                                                                        name: "_",
                                                                        value: 264,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "Minimum",
                                                                    value: 843,
                                                                  },
                                                                  {
                                                                    name: "Not",
                                                                    value: 1554,
                                                                  },
                                                                  {
                                                                    name: "Or",
                                                                    value: 970,
                                                                  },
                                                                  {
                                                                    name: "Query",
                                                                    value: 13896,
                                                                  },
                                                                  {
                                                                    name: "Range",
                                                                    value: 1594,
                                                                  },
                                                                  {
                                                                    name: "StringUtil",
                                                                    value: 4130,
                                                                  },
                                                                  {
                                                                    name: "Sum",
                                                                    value: 791,
                                                                  },
                                                                  {
                                                                    name: "Variable",
                                                                    value: 1124,
                                                                  },
                                                                  {
                                                                    name: "Variance",
                                                                    value: 1876,
                                                                  },
                                                                  {
                                                                    name: "Xor",
                                                                    value: 1101,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "scale",
                                                                children: [
                                                                  {
                                                                    name: "IScaleMap",
                                                                    value: 2105,
                                                                  },
                                                                  {
                                                                    name: "LinearScale",
                                                                    value: 1316,
                                                                  },
                                                                  {
                                                                    name: "LogScale",
                                                                    value: 3151,
                                                                  },
                                                                  {
                                                                    name: "OrdinalScale",
                                                                    value: 3770,
                                                                  },
                                                                  {
                                                                    name: "QuantileScale",
                                                                    value: 2435,
                                                                  },
                                                                  {
                                                                    name: "QuantitativeScale",
                                                                    value: 4839,
                                                                  },
                                                                  {
                                                                    name: "RootScale",
                                                                    value: 1756,
                                                                  },
                                                                  {
                                                                    name: "Scale",
                                                                    value: 4268,
                                                                  },
                                                                  {
                                                                    name: "ScaleType",
                                                                    value: 1821,
                                                                  },
                                                                  {
                                                                    name: "TimeScale",
                                                                    value: 5833,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "util",
                                                                children: [
                                                                  {
                                                                    name: "Arrays",
                                                                    value: 8258,
                                                                  },
                                                                  {
                                                                    name: "Colors",
                                                                    value: 10001,
                                                                  },
                                                                  {
                                                                    name: "Dates",
                                                                    value: 8217,
                                                                  },
                                                                  {
                                                                    name: "Displays",
                                                                    value: 12555,
                                                                  },
                                                                  {
                                                                    name: "Filter",
                                                                    value: 2324,
                                                                  },
                                                                  {
                                                                    name: "Geometry",
                                                                    value: 10993,
                                                                  },
                                                                  {
                                                                    name: "heap",
                                                                    children: [
                                                                      {
                                                                        name: "FibonacciHeap",
                                                                        value: 9354,
                                                                      },
                                                                      {
                                                                        name: "HeapNode",
                                                                        value: 1233,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "IEvaluable",
                                                                    value: 335,
                                                                  },
                                                                  {
                                                                    name: "IPredicate",
                                                                    value: 383,
                                                                  },
                                                                  {
                                                                    name: "IValueProxy",
                                                                    value: 874,
                                                                  },
                                                                  {
                                                                    name: "math",
                                                                    children: [
                                                                      {
                                                                        name: "DenseMatrix",
                                                                        value: 3165,
                                                                      },
                                                                      {
                                                                        name: "IMatrix",
                                                                        value: 2815,
                                                                      },
                                                                      {
                                                                        name: "SparseMatrix",
                                                                        value: 3366,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "Maths",
                                                                    value: 17705,
                                                                  },
                                                                  {
                                                                    name: "Orientation",
                                                                    value: 1486,
                                                                  },
                                                                  {
                                                                    name: "palette",
                                                                    children: [
                                                                      {
                                                                        name: "ColorPalette",
                                                                        value: 6367,
                                                                      },
                                                                      {
                                                                        name: "Palette",
                                                                        value: 1229,
                                                                      },
                                                                      {
                                                                        name: "ShapePalette",
                                                                        value: 2059,
                                                                      },
                                                                      {
                                                                        name: "SizePalette",
                                                                        value: 2291,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "Property",
                                                                    value: 5559,
                                                                  },
                                                                  {
                                                                    name: "Shapes",
                                                                    value: 19118,
                                                                  },
                                                                  {
                                                                    name: "Sort",
                                                                    value: 6887,
                                                                  },
                                                                  {
                                                                    name: "Stats",
                                                                    value: 6557,
                                                                  },
                                                                  {
                                                                    name: "Strings",
                                                                    value: 22026,
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                name: "vis",
                                                                children: [
                                                                  {
                                                                    name: "axis",
                                                                    children: [
                                                                      {
                                                                        name: "Axes",
                                                                        value: 1302,
                                                                      },
                                                                      {
                                                                        name: "Axis",
                                                                        value: 24593,
                                                                      },
                                                                      {
                                                                        name: "AxisGridLine",
                                                                        value: 652,
                                                                      },
                                                                      {
                                                                        name: "AxisLabel",
                                                                        value: 636,
                                                                      },
                                                                      {
                                                                        name: "CartesianAxes",
                                                                        value: 6703,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "controls",
                                                                    children: [
                                                                      {
                                                                        name: "AnchorControl",
                                                                        value: 2138,
                                                                      },
                                                                      {
                                                                        name: "ClickControl",
                                                                        value: 3824,
                                                                      },
                                                                      {
                                                                        name: "Control",
                                                                        value: 1353,
                                                                      },
                                                                      {
                                                                        name: "ControlList",
                                                                        value: 4665,
                                                                      },
                                                                      {
                                                                        name: "DragControl",
                                                                        value: 2649,
                                                                      },
                                                                      {
                                                                        name: "ExpandControl",
                                                                        value: 2832,
                                                                      },
                                                                      {
                                                                        name: "HoverControl",
                                                                        value: 4896,
                                                                      },
                                                                      {
                                                                        name: "IControl",
                                                                        value: 763,
                                                                      },
                                                                      {
                                                                        name: "PanZoomControl",
                                                                        value: 5222,
                                                                      },
                                                                      {
                                                                        name: "SelectionControl",
                                                                        value: 7862,
                                                                      },
                                                                      {
                                                                        name: "TooltipControl",
                                                                        value: 8435,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "data",
                                                                    children: [
                                                                      {
                                                                        name: "Data",
                                                                        value: 20544,
                                                                      },
                                                                      {
                                                                        name: "DataList",
                                                                        value: 19788,
                                                                      },
                                                                      {
                                                                        name: "DataSprite",
                                                                        value: 10349,
                                                                      },
                                                                      {
                                                                        name: "EdgeSprite",
                                                                        value: 3301,
                                                                      },
                                                                      {
                                                                        name: "NodeSprite",
                                                                        value: 19382,
                                                                      },
                                                                      {
                                                                        name: "render",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "ArrowType",
                                                                              value: 698,
                                                                            },
                                                                            {
                                                                              name: "EdgeRenderer",
                                                                              value: 5569,
                                                                            },
                                                                            {
                                                                              name: "IRenderer",
                                                                              value: 353,
                                                                            },
                                                                            {
                                                                              name: "ShapeRenderer",
                                                                              value: 2247,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "ScaleBinding",
                                                                        value: 11275,
                                                                      },
                                                                      {
                                                                        name: "Tree",
                                                                        value: 7147,
                                                                      },
                                                                      {
                                                                        name: "TreeBuilder",
                                                                        value: 9930,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "events",
                                                                    children: [
                                                                      {
                                                                        name: "DataEvent",
                                                                        value: 2313,
                                                                      },
                                                                      {
                                                                        name: "SelectionEvent",
                                                                        value: 1880,
                                                                      },
                                                                      {
                                                                        name: "TooltipEvent",
                                                                        value: 1701,
                                                                      },
                                                                      {
                                                                        name: "VisualizationEvent",
                                                                        value: 1117,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "legend",
                                                                    children: [
                                                                      {
                                                                        name: "Legend",
                                                                        value: 20859,
                                                                      },
                                                                      {
                                                                        name: "LegendItem",
                                                                        value: 4614,
                                                                      },
                                                                      {
                                                                        name: "LegendRange",
                                                                        value: 10530,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "operator",
                                                                    children: [
                                                                      {
                                                                        name: "distortion",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "BifocalDistortion",
                                                                              value: 4461,
                                                                            },
                                                                            {
                                                                              name: "Distortion",
                                                                              value: 6314,
                                                                            },
                                                                            {
                                                                              name: "FisheyeDistortion",
                                                                              value: 3444,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "encoder",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "ColorEncoder",
                                                                              value: 3179,
                                                                            },
                                                                            {
                                                                              name: "Encoder",
                                                                              value: 4060,
                                                                            },
                                                                            {
                                                                              name: "PropertyEncoder",
                                                                              value: 4138,
                                                                            },
                                                                            {
                                                                              name: "ShapeEncoder",
                                                                              value: 1690,
                                                                            },
                                                                            {
                                                                              name: "SizeEncoder",
                                                                              value: 1830,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "filter",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "FisheyeTreeFilter",
                                                                              value: 5219,
                                                                            },
                                                                            {
                                                                              name: "GraphDistanceFilter",
                                                                              value: 3165,
                                                                            },
                                                                            {
                                                                              name: "VisibilityFilter",
                                                                              value: 3509,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "IOperator",
                                                                        value: 1286,
                                                                      },
                                                                      {
                                                                        name: "label",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "Labeler",
                                                                              value: 9956,
                                                                            },
                                                                            {
                                                                              name: "RadialLabeler",
                                                                              value: 3899,
                                                                            },
                                                                            {
                                                                              name: "StackedAreaLabeler",
                                                                              value: 3202,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "layout",
                                                                        children:
                                                                          [
                                                                            {
                                                                              name: "AxisLayout",
                                                                              value: 6725,
                                                                            },
                                                                            {
                                                                              name: "BundledEdgeRouter",
                                                                              value: 3727,
                                                                            },
                                                                            {
                                                                              name: "CircleLayout",
                                                                              value: 9317,
                                                                            },
                                                                            {
                                                                              name: "CirclePackingLayout",
                                                                              value: 12003,
                                                                            },
                                                                            {
                                                                              name: "DendrogramLayout",
                                                                              value: 4853,
                                                                            },
                                                                            {
                                                                              name: "ForceDirectedLayout",
                                                                              value: 8411,
                                                                            },
                                                                            {
                                                                              name: "IcicleTreeLayout",
                                                                              value: 4864,
                                                                            },
                                                                            {
                                                                              name: "IndentedTreeLayout",
                                                                              value: 3174,
                                                                            },
                                                                            {
                                                                              name: "Layout",
                                                                              value: 7881,
                                                                            },
                                                                            {
                                                                              name: "NodeLinkTreeLayout",
                                                                              value: 12870,
                                                                            },
                                                                            {
                                                                              name: "PieLayout",
                                                                              value: 2728,
                                                                            },
                                                                            {
                                                                              name: "RadialTreeLayout",
                                                                              value: 12348,
                                                                            },
                                                                            {
                                                                              name: "RandomLayout",
                                                                              value: 870,
                                                                            },
                                                                            {
                                                                              name: "StackedAreaLayout",
                                                                              value: 9121,
                                                                            },
                                                                            {
                                                                              name: "TreeMapLayout",
                                                                              value: 9191,
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        name: "Operator",
                                                                        value: 2490,
                                                                      },
                                                                      {
                                                                        name: "OperatorList",
                                                                        value: 5248,
                                                                      },
                                                                      {
                                                                        name: "OperatorSequence",
                                                                        value: 4190,
                                                                      },
                                                                      {
                                                                        name: "OperatorSwitch",
                                                                        value: 2581,
                                                                      },
                                                                      {
                                                                        name: "SortOperator",
                                                                        value: 2023,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    name: "Visualization",
                                                                    value: 16540,
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "events",
                                                    children: [
                                                      {
                                                        name: "DataEvent",
                                                        value: 2313,
                                                      },
                                                      {
                                                        name: "SelectionEvent",
                                                        value: 1880,
                                                      },
                                                      {
                                                        name: "TooltipEvent",
                                                        value: 1701,
                                                      },
                                                      {
                                                        name: "VisualizationEvent",
                                                        value: 1117,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "legend",
                                                    children: [
                                                      {
                                                        name: "Legend",
                                                        value: 20859,
                                                      },
                                                      {
                                                        name: "LegendItem",
                                                        value: 4614,
                                                      },
                                                      {
                                                        name: "LegendRange",
                                                        value: 10530,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "operator",
                                                    children: [
                                                      {
                                                        name: "distortion",
                                                        children: [
                                                          {
                                                            name: "BifocalDistortion",
                                                            value: 4461,
                                                          },
                                                          {
                                                            name: "Distortion",
                                                            value: 6314,
                                                          },
                                                          {
                                                            name: "FisheyeDistortion",
                                                            value: 3444,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "encoder",
                                                        children: [
                                                          {
                                                            name: "ColorEncoder",
                                                            value: 3179,
                                                          },
                                                          {
                                                            name: "Encoder",
                                                            value: 4060,
                                                          },
                                                          {
                                                            name: "PropertyEncoder",
                                                            value: 4138,
                                                          },
                                                          {
                                                            name: "ShapeEncoder",
                                                            value: 1690,
                                                          },
                                                          {
                                                            name: "SizeEncoder",
                                                            value: 1830,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "filter",
                                                        children: [
                                                          {
                                                            name: "FisheyeTreeFilter",
                                                            value: 5219,
                                                          },
                                                          {
                                                            name: "GraphDistanceFilter",
                                                            value: 3165,
                                                          },
                                                          {
                                                            name: "VisibilityFilter",
                                                            value: 3509,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "IOperator",
                                                        value: 1286,
                                                      },
                                                      {
                                                        name: "label",
                                                        children: [
                                                          {
                                                            name: "Labeler",
                                                            value: 9956,
                                                          },
                                                          {
                                                            name: "RadialLabeler",
                                                            value: 3899,
                                                          },
                                                          {
                                                            name: "StackedAreaLabeler",
                                                            value: 3202,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "layout",
                                                        children: [
                                                          {
                                                            name: "AxisLayout",
                                                            value: 6725,
                                                          },
                                                          {
                                                            name: "BundledEdgeRouter",
                                                            value: 3727,
                                                          },
                                                          {
                                                            name: "CircleLayout",
                                                            value: 9317,
                                                          },
                                                          {
                                                            name: "CirclePackingLayout",
                                                            value: 12003,
                                                          },
                                                          {
                                                            name: "DendrogramLayout",
                                                            value: 4853,
                                                          },
                                                          {
                                                            name: "ForceDirectedLayout",
                                                            value: 8411,
                                                          },
                                                          {
                                                            name: "IcicleTreeLayout",
                                                            value: 4864,
                                                          },
                                                          {
                                                            name: "IndentedTreeLayout",
                                                            value: 3174,
                                                          },
                                                          {
                                                            name: "Layout",
                                                            value: 7881,
                                                          },
                                                          {
                                                            name: "NodeLinkTreeLayout",
                                                            value: 12870,
                                                          },
                                                          {
                                                            name: "PieLayout",
                                                            value: 2728,
                                                          },
                                                          {
                                                            name: "RadialTreeLayout",
                                                            value: 12348,
                                                          },
                                                          {
                                                            name: "RandomLayout",
                                                            value: 870,
                                                          },
                                                          {
                                                            name: "StackedAreaLayout",
                                                            value: 9121,
                                                          },
                                                          {
                                                            name: "TreeMapLayout",
                                                            value: 9191,
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        name: "Operator",
                                                        value: 2490,
                                                      },
                                                      {
                                                        name: "OperatorList",
                                                        value: 5248,
                                                      },
                                                      {
                                                        name: "OperatorSequence",
                                                        value: 4190,
                                                      },
                                                      {
                                                        name: "OperatorSwitch",
                                                        value: 2581,
                                                      },
                                                      {
                                                        name: "SortOperator",
                                                        value: 2023,
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    name: "Visualization",
                                                    value: 16540,
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "data",
                                    children: [
                                      { name: "Data", value: 20544 },
                                      { name: "DataList", value: 19788 },
                                      { name: "DataSprite", value: 10349 },
                                      { name: "EdgeSprite", value: 3301 },
                                      { name: "NodeSprite", value: 19382 },
                                      {
                                        name: "render",
                                        children: [
                                          { name: "ArrowType", value: 698 },
                                          { name: "EdgeRenderer", value: 5569 },
                                          { name: "IRenderer", value: 353 },
                                          {
                                            name: "ShapeRenderer",
                                            value: 2247,
                                          },
                                        ],
                                      },
                                      { name: "ScaleBinding", value: 11275 },
                                      { name: "Tree", value: 7147 },
                                      { name: "TreeBuilder", value: 9930 },
                                    ],
                                  },
                                  {
                                    name: "events",
                                    children: [
                                      { name: "DataEvent", value: 2313 },
                                      { name: "SelectionEvent", value: 1880 },
                                      { name: "TooltipEvent", value: 1701 },
                                      {
                                        name: "VisualizationEvent",
                                        value: 1117,
                                      },
                                    ],
                                  },
                                  {
                                    name: "legend",
                                    children: [
                                      { name: "Legend", value: 20859 },
                                      { name: "LegendItem", value: 4614 },
                                      { name: "LegendRange", value: 10530 },
                                    ],
                                  },
                                  {
                                    name: "operator",
                                    children: [
                                      {
                                        name: "distortion",
                                        children: [
                                          {
                                            name: "BifocalDistortion",
                                            value: 4461,
                                          },
                                          { name: "Distortion", value: 6314 },
                                          {
                                            name: "FisheyeDistortion",
                                            value: 3444,
                                          },
                                        ],
                                      },
                                      {
                                        name: "encoder",
                                        children: [
                                          { name: "ColorEncoder", value: 3179 },
                                          { name: "Encoder", value: 4060 },
                                          {
                                            name: "PropertyEncoder",
                                            value: 4138,
                                          },
                                          { name: "ShapeEncoder", value: 1690 },
                                          { name: "SizeEncoder", value: 1830 },
                                        ],
                                      },
                                      {
                                        name: "filter",
                                        children: [
                                          {
                                            name: "FisheyeTreeFilter",
                                            value: 5219,
                                          },
                                          {
                                            name: "GraphDistanceFilter",
                                            value: 3165,
                                          },
                                          {
                                            name: "VisibilityFilter",
                                            value: 3509,
                                          },
                                        ],
                                      },
                                      { name: "IOperator", value: 1286 },
                                      {
                                        name: "label",
                                        children: [
                                          { name: "Labeler", value: 9956 },
                                          {
                                            name: "RadialLabeler",
                                            value: 3899,
                                          },
                                          {
                                            name: "StackedAreaLabeler",
                                            value: 3202,
                                          },
                                        ],
                                      },
                                      {
                                        name: "layout",
                                        children: [
                                          { name: "AxisLayout", value: 6725 },
                                          {
                                            name: "BundledEdgeRouter",
                                            value: 3727,
                                          },
                                          { name: "CircleLayout", value: 9317 },
                                          {
                                            name: "CirclePackingLayout",
                                            value: 12003,
                                          },
                                          {
                                            name: "DendrogramLayout",
                                            value: 4853,
                                          },
                                          {
                                            name: "ForceDirectedLayout",
                                            value: 8411,
                                          },
                                          {
                                            name: "IcicleTreeLayout",
                                            value: 4864,
                                          },
                                          {
                                            name: "IndentedTreeLayout",
                                            value: 3174,
                                          },
                                          { name: "Layout", value: 7881 },
                                          {
                                            name: "NodeLinkTreeLayout",
                                            value: 12870,
                                          },
                                          { name: "PieLayout", value: 2728 },
                                          {
                                            name: "RadialTreeLayout",
                                            value: 12348,
                                          },
                                          { name: "RandomLayout", value: 870 },
                                          {
                                            name: "StackedAreaLayout",
                                            value: 9121,
                                          },
                                          {
                                            name: "TreeMapLayout",
                                            value: 9191,
                                          },
                                        ],
                                      },
                                      { name: "Operator", value: 2490 },
                                      { name: "OperatorList", value: 5248 },
                                      { name: "OperatorSequence", value: 4190 },
                                      { name: "OperatorSwitch", value: 2581 },
                                      { name: "SortOperator", value: 2023 },
                                    ],
                                  },
                                  { name: "Visualization", value: 16540 },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "directory",
                        name: "__tests__",
                        children: [
                          {
                            type: "file",
                            name: "BeforeInputEventPlugin-test.js",
                          },
                          {
                            type: "file",
                            name: "ChangeEventPlugin-test.js",
                          },
                          {
                            type: "file",
                            name: "EnterLeaveEventPlugin-test.js",
                          },
                          {
                            type: "file",
                            name: "FallbackCompositionState-test.js",
                          },
                          {
                            type: "file",
                            name: "SelectEventPlugin-test.js",
                          },
                          {
                            type: "file",
                            name: "SimpleEventPlugin-test.js",
                          },
                          {
                            type: "file",
                            name: "SyntheticClipboardEvent-test.js",
                          },
                          {
                            type: "file",
                            name: "SyntheticEvent-test.js",
                          },
                          {
                            type: "file",
                            name: "SyntheticKeyboardEvent-test.js",
                          },
                          {
                            type: "file",
                            name: "SyntheticWheelEvent-test.js",
                          },
                          {
                            type: "file",
                            name: "getEventCharCode-test.js",
                          },
                          {
                            type: "file",
                            name: "getEventKey-test.js",
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "getEventCharCode.js",
                      },
                      {
                        type: "file",
                        name: "getEventKey.js",
                      },
                      {
                        type: "file",
                        name: "getEventModifierState.js",
                      },
                      {
                        type: "file",
                        name: "getEventTarget.js",
                      },
                      {
                        type: "file",
                        name: "getVendorPrefixedEventName.js",
                      },
                      {
                        type: "file",
                        name: "isEventSupported.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "server",
                    children: [
                      {
                        type: "file",
                        name: "DOMMarkupOperations.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMNodeStreamRenderer.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMServerBrowser.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMServerNode.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMStringRenderer.js",
                      },
                      {
                        type: "file",
                        name: "ReactPartialRenderer.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "shared",
                    children: [
                      {
                        type: "file",
                        name: "CSSProperty.js",
                      },
                      {
                        type: "file",
                        name: "CSSPropertyOperations.js",
                      },
                      {
                        type: "file",
                        name: "DOMNamespaces.js",
                      },
                      {
                        type: "file",
                        name: "DOMProperty.js",
                      },
                      {
                        type: "file",
                        name: "HTMLDOMPropertyConfig.js",
                      },
                      {
                        type: "file",
                        name: "HTMLNodeType.js",
                      },
                      {
                        type: "file",
                        name: "ReactControlledValuePropTypes.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMInjection.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMInvalidARIAHook.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMNullInputValuePropHook.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMUnknownPropertyHook.js",
                      },
                      {
                        type: "file",
                        name: "SVGDOMPropertyConfig.js",
                      },
                      {
                        type: "file",
                        name: "assertValidProps.js",
                      },
                      {
                        type: "file",
                        name: "checkReact.js",
                      },
                      {
                        type: "file",
                        name: "createMicrosoftUnsafeLocalFunction.js",
                      },
                      {
                        type: "file",
                        name: "dangerousStyleValue.js",
                      },
                      {
                        type: "file",
                        name: "escapeTextContentForBrowser.js",
                      },
                      {
                        type: "file",
                        name: "isCustomComponent.js",
                      },
                      {
                        type: "file",
                        name: "omittedCloseTags.js",
                      },
                      {
                        type: "file",
                        name: "possibleStandardNames.js",
                      },
                      {
                        type: "file",
                        name: "quoteAttributeValueForBrowser.js",
                      },
                      {
                        type: "file",
                        name: "validAriaProperties.js",
                      },
                      {
                        type: "file",
                        name: "voidElementTags.js",
                      },
                      {
                        type: "file",
                        name: "warnValidStyle.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "test-utils",
                    children: [
                      {
                        type: "file",
                        name: "ReactTestUtils.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "unstable-native-dependencies",
                    children: [
                      {
                        type: "file",
                        name: "ReactDOMUnstableNativeDependencies.js",
                      },
                    ],
                  },
                ],
              },
              {
                type: "file",
                name: "test-utils.js",
              },
              {
                type: "file",
                name: "unstable-native-dependencies.js",
              },
            ],
          },
          {
            type: "directory",
            name: "react-native-renderer",
            children: [
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "NativeMethodsMixin.js",
                  },
                  {
                    type: "file",
                    name: "NativeMethodsMixinUtils.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeAttributePayload.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeBridgeEventPlugin.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeComponent.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeComponentTree.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeEventEmitter.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeEventPluginOrder.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFeatureFlags.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFiberErrorDialog.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFiberHostComponent.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFiberInspector.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFiberRenderer.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeFrameScheduling.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeGlobalResponderHandler.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeInjection.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativePropRegistry.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRenderer.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeTagHandles.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeTypes.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeViewConfigRegistry.js",
                  },
                  {
                    type: "directory",
                    name: "__mocks__",
                    children: [
                      {
                        type: "file",
                        name: "BatchedBridge.js",
                      },
                      {
                        type: "file",
                        name: "ExceptionsManager.js",
                      },
                      {
                        type: "file",
                        name: "InitializeCore.js",
                      },
                      {
                        type: "file",
                        name: "Platform.js",
                      },
                      {
                        type: "file",
                        name: "RCTEventEmitter.js",
                      },
                      {
                        type: "file",
                        name: "RTManager.js",
                      },
                      {
                        type: "file",
                        name: "TextInputState.js",
                      },
                      {
                        type: "file",
                        name: "UIManager.js",
                      },
                      {
                        type: "file",
                        name: "View.js",
                      },
                      {
                        type: "file",
                        name: "deepDiffer.js",
                      },
                      {
                        type: "file",
                        name: "deepFreezeAndThrowOnMutationInDev.js",
                      },
                      {
                        type: "file",
                        name: "flattenStyle.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactNativeAttributePayload-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactNativeEvents-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactNativeMount-test.js",
                      },
                      {
                        type: "directory",
                        name: "__snapshots__",
                        children: [
                          {
                            type: "file",
                            name: "ReactNativeEvents-test.js.snap",
                          },
                          {
                            type: "file",
                            name: "ReactNativeMount-test.js.snap",
                          },
                        ],
                      },
                      {
                        type: "file",
                        name: "createReactNativeComponentClass-test.js",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "createReactNativeComponentClass.js",
                  },
                  {
                    type: "file",
                    name: "findNodeHandle.js",
                  },
                  {
                    type: "file",
                    name: "findNumericNodeHandle.js",
                  },
                  {
                    type: "file",
                    name: "takeSnapshot.js",
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-noop-renderer",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactNoop.js",
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-reconciler",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactChildFiber.js",
                  },
                  {
                    type: "file",
                    name: "ReactDebugCurrentFiber.js",
                  },
                  {
                    type: "file",
                    name: "ReactDebugFiberPerf.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiber.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberBeginWork.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberClassComponent.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberCommitWork.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberCompleteWork.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberContext.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberDevToolsHook.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberErrorLogger.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberExpirationTime.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberHostContext.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberHydrationContext.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberInstrumentation.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberReconciler.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberRoot.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberScheduler.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberStack.js",
                  },
                  {
                    type: "file",
                    name: "ReactFiberUpdateQueue.js",
                  },
                  {
                    type: "file",
                    name: "ReactPortal.js",
                  },
                  {
                    type: "file",
                    name: "ReactTypeOfInternalContext.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactExpiration-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactFiberHostContext-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactFragment-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncremental-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalErrorHandling-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalPerf-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalReflection-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalScheduling-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalSideEffects-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalTriangle-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactIncrementalUpdates-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactPersistent-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTopLevelFragment-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTopLevelText-test.js",
                      },
                      {
                        type: "directory",
                        name: "__snapshots__",
                        children: [
                          {
                            type: "file",
                            name: "ReactIncrementalPerf-test.js.snap",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-rt-renderer",
            children: [
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactNativeRT.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTComponentTree.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTEventEmitter.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTFiberInspector.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTFiberRenderer.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTTagHandles.js",
                  },
                  {
                    type: "file",
                    name: "ReactNativeRTTypes.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactNativeRT-test.js",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "react-test-renderer",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "directory",
                name: "npm",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                  },
                  {
                    type: "file",
                    name: "shallow.js",
                  },
                ],
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "shallow.js",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "ReactShallowRenderer.js",
                  },
                  {
                    type: "file",
                    name: "ReactTestRenderer.js",
                  },
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "ReactShallowRenderer-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTestRenderer-test.js",
                      },
                      {
                        type: "file",
                        name: "ReactTestRendererTraversal-test.js",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "shared",
            children: [
              {
                type: "file",
                name: "ReactDOMFrameScheduling.js",
              },
              {
                type: "file",
                name: "ReactElementType.js",
              },
              {
                type: "file",
                name: "ReactErrorUtils.js",
              },
              {
                type: "file",
                name: "ReactFeatureFlags.js",
              },
              {
                type: "file",
                name: "ReactFiberComponentTreeHook.js",
              },
              {
                type: "file",
                name: "ReactFiberTreeReflection.js",
              },
              {
                type: "file",
                name: "ReactGlobalSharedState.js",
              },
              {
                type: "file",
                name: "ReactInstanceMap.js",
              },
              {
                type: "file",
                name: "ReactTreeTraversal.js",
              },
              {
                type: "file",
                name: "ReactTypeOfSideEffect.js",
              },
              {
                type: "file",
                name: "ReactTypeOfWork.js",
              },
              {
                type: "file",
                name: "ReactTypes.js",
              },
              {
                type: "file",
                name: "ReactVersion.js",
              },
              {
                type: "directory",
                name: "__tests__",
                children: [
                  {
                    type: "file",
                    name: "ReactDOMFrameScheduling-test.js",
                  },
                  {
                    type: "file",
                    name: "ReactErrorUtils-test.js",
                  },
                  {
                    type: "file",
                    name: "reactProdInvariant-test.js",
                  },
                ],
              },
              {
                type: "file",
                name: "describeComponentFrame.js",
              },
              {
                type: "file",
                name: "getComponentName.js",
              },
              {
                type: "file",
                name: "isTextInputElement.js",
              },
              {
                type: "file",
                name: "lowPriorityWarning.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "reactProdInvariant.js",
              },
            ],
          },
        ],
      },
      {
        type: "directory",
        name: "scripts",
        children: [
          {
            type: "file",
            name: "authors",
          },
          {
            type: "directory",
            name: "babel",
            children: [
              {
                type: "file",
                name: "transform-object-assign-require.js",
              },
            ],
          },
          {
            type: "directory",
            name: "bench",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "benchmark.js",
              },
              {
                type: "directory",
                name: "benchmarks",
                children: [
                  {
                    type: "directory",
                    name: "hacker-news",
                    children: [
                      {
                        type: "file",
                        name: "benchmark.js",
                      },
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "generate.js",
                      },
                      {
                        type: "file",
                        name: "grayarrow.gif",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                      {
                        type: "file",
                        name: "logo.png",
                      },
                      {
                        type: "file",
                        name: "style.css",
                      },
                      {
                        type: "file",
                        name: "top-stories.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "pe-class-components",
                    children: [
                      {
                        type: "file",
                        name: "benchmark.js",
                      },
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "pe-functional-components",
                    children: [
                      {
                        type: "file",
                        name: "benchmark.js",
                      },
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "pe-no-components",
                    children: [
                      {
                        type: "file",
                        name: "benchmark.js",
                      },
                      {
                        type: "file",
                        name: "build.js",
                      },
                      {
                        type: "file",
                        name: "index.html",
                      },
                    ],
                  },
                ],
              },
              {
                type: "file",
                name: "build.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "runner.js",
              },
              {
                type: "file",
                name: "server.js",
              },
              {
                type: "file",
                name: "stats.js",
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "circleci",
            children: [
              {
                type: "file",
                name: "bench.sh",
              },
              {
                type: "file",
                name: "build.sh",
              },
              {
                type: "file",
                name: "check_license.sh",
              },
              {
                type: "file",
                name: "check_modules.sh",
              },
              {
                type: "file",
                name: "set_up_github_keys.sh",
              },
              {
                type: "file",
                name: "test_coverage.sh",
              },
              {
                type: "file",
                name: "test_entry_point.sh",
              },
              {
                type: "file",
                name: "test_print_warnings.sh",
              },
              {
                type: "file",
                name: "track_stats.sh",
              },
              {
                type: "file",
                name: "upload_build.sh",
              },
            ],
          },
          {
            type: "directory",
            name: "error-codes",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "Types.js",
              },
              {
                type: "directory",
                name: "__tests__",
                children: [
                  {
                    type: "file",
                    name: "invertObject-test.js",
                  },
                  {
                    type: "file",
                    name: "replace-invariant-error-codes-test.js",
                  },
                ],
              },
              {
                type: "file",
                name: "codes.json",
              },
              {
                type: "file",
                name: "extract-errors.js",
              },
              {
                type: "file",
                name: "invertObject.js",
              },
              {
                type: "file",
                name: "replace-invariant-error-codes.js",
              },
            ],
          },
          {
            type: "directory",
            name: "eslint",
            children: [
              {
                type: "file",
                name: "index.js",
              },
            ],
          },
          {
            type: "directory",
            name: "eslint-rules",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "directory",
                name: "__tests__",
                children: [
                  {
                    type: "file",
                    name: "no-primitive-constructors-test.js",
                  },
                  {
                    type: "file",
                    name: "warning-and-invariant-args-test.js",
                  },
                ],
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "no-primitive-constructors.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "file",
                name: "warning-and-invariant-args.js",
              },
            ],
          },
          {
            type: "directory",
            name: "facts-tracker",
            children: [
              {
                type: "file",
                name: "index.js",
              },
            ],
          },
          {
            type: "directory",
            name: "fiber",
            children: [
              {
                type: "file",
                name: "record-tests",
              },
              {
                type: "file",
                name: "tests-failing.txt",
              },
              {
                type: "file",
                name: "tests-passing-except-dev.txt",
              },
              {
                type: "file",
                name: "tests-passing.txt",
              },
            ],
          },
          {
            type: "directory",
            name: "flow",
            children: [
              {
                type: "file",
                name: "environment.js",
              },
              {
                type: "file",
                name: "react-native-host-hooks.js",
              },
            ],
          },
          {
            type: "directory",
            name: "git",
            children: [
              {
                type: "file",
                name: "pre-commit",
              },
            ],
          },
          {
            type: "directory",
            name: "jest",
            children: [
              {
                type: "file",
                name: "environment.js",
              },
              {
                type: "file",
                name: "jest.d.ts",
              },
              {
                type: "file",
                name: "preprocessor.js",
              },
              {
                type: "file",
                name: "setup.js",
              },
              {
                type: "file",
                name: "setupSpecEquivalenceReporter.js",
              },
              {
                type: "file",
                name: "test-framework-setup.js",
              },
              {
                type: "file",
                name: "ts-preprocessor.js",
              },
            ],
          },
          {
            type: "directory",
            name: "perf-counters",
            children: [
              {
                type: "file",
                name: "Makefile",
              },
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "binding.gyp",
              },
              {
                type: "file",
                name: "index.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "src",
                children: [
                  {
                    type: "file",
                    name: "hardware-counter.cpp",
                  },
                  {
                    type: "file",
                    name: "hardware-counter.h",
                  },
                  {
                    type: "file",
                    name: "jsc-perf.cpp",
                  },
                  {
                    type: "file",
                    name: "perf-counters.cpp",
                  },
                  {
                    type: "file",
                    name: "portability.h",
                  },
                  {
                    type: "file",
                    name: "thread-local.cpp",
                  },
                  {
                    type: "file",
                    name: "thread-local.h",
                  },
                ],
              },
            ],
          },
          {
            type: "directory",
            name: "prettier",
            children: [
              {
                type: "file",
                name: "index.js",
              },
            ],
          },
          {
            type: "directory",
            name: "print-warnings",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "file",
                name: "print-warnings.js",
              },
            ],
          },
          {
            type: "directory",
            name: "release",
            children: [
              {
                type: "file",
                name: "README.md",
              },
              {
                type: "directory",
                name: "build-commands",
                children: [
                  {
                    type: "file",
                    name: "add-git-tag.js",
                  },
                  {
                    type: "file",
                    name: "build-artifacts.js",
                  },
                  {
                    type: "file",
                    name: "check-circle-ci-status.js",
                  },
                  {
                    type: "file",
                    name: "check-environment-variables.js",
                  },
                  {
                    type: "file",
                    name: "check-npm-permissions.js",
                  },
                  {
                    type: "file",
                    name: "check-package-dependencies.js",
                  },
                  {
                    type: "file",
                    name: "check-uncommitted-changes.js",
                  },
                  {
                    type: "file",
                    name: "install-yarn-dependencies.js",
                  },
                  {
                    type: "file",
                    name: "parse-build-parameters.js",
                  },
                  {
                    type: "file",
                    name: "print-post-build-summary.js",
                  },
                  {
                    type: "file",
                    name: "run-automated-tests.js",
                  },
                  {
                    type: "file",
                    name: "update-git.js",
                  },
                  {
                    type: "file",
                    name: "update-package-versions.js",
                  },
                  {
                    type: "file",
                    name: "update-yarn-dependencies.js",
                  },
                  {
                    type: "file",
                    name: "validate-version.js",
                  },
                ],
              },
              {
                type: "file",
                name: "build.js",
              },
              {
                type: "file",
                name: "config.js",
              },
              {
                type: "file",
                name: "package.json",
              },
              {
                type: "directory",
                name: "publish-commands",
                children: [
                  {
                    type: "file",
                    name: "check-build-status.js",
                  },
                  {
                    type: "file",
                    name: "commit-changelog.js",
                  },
                  {
                    type: "file",
                    name: "parse-publish-params.js",
                  },
                  {
                    type: "file",
                    name: "print-post-publish-summary.js",
                  },
                  {
                    type: "file",
                    name: "publish-to-npm.js",
                  },
                  {
                    type: "file",
                    name: "push-git-remote.js",
                  },
                ],
              },
              {
                type: "file",
                name: "publish.js",
              },
              {
                type: "file",
                name: "utils.js",
              },
              {
                type: "file",
                name: "yarn.lock",
              },
            ],
          },
          {
            type: "directory",
            name: "rollup",
            children: [
              {
                type: "file",
                name: "build.js",
              },
              {
                type: "file",
                name: "bundles.js",
              },
              {
                type: "file",
                name: "modules.js",
              },
              {
                type: "file",
                name: "packaging.js",
              },
              {
                type: "directory",
                name: "plugins",
                children: [
                  {
                    type: "directory",
                    name: "__tests__",
                    children: [
                      {
                        type: "file",
                        name: "wrap-warning-with-env-check-test.js",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "sizes-plugin.js",
                  },
                  {
                    type: "file",
                    name: "wrap-warning-with-env-check.js",
                  },
                ],
              },
              {
                type: "file",
                name: "results.json",
              },
              {
                type: "directory",
                name: "shims",
                children: [
                  {
                    type: "directory",
                    name: "facebook-www",
                    children: [
                      {
                        type: "file",
                        name: "EventPluginHub.js",
                      },
                      {
                        type: "file",
                        name: "ReactBrowserEventEmitter.js",
                      },
                      {
                        type: "file",
                        name: "ReactDOMComponentTree.js",
                      },
                      {
                        type: "file",
                        name: "ReactErrorUtils.js",
                      },
                      {
                        type: "file",
                        name: "ReactFiberErrorLogger.js",
                      },
                      {
                        type: "file",
                        name: "ReactInstanceMap.js",
                      },
                      {
                        type: "file",
                        name: "TapEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "findDOMNode.js",
                      },
                      {
                        type: "file",
                        name: "renderSubtreeIntoContainer.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "react-native",
                    children: [
                      {
                        type: "file",
                        name: "NativeMethodsMixin.js",
                      },
                      {
                        type: "file",
                        name: "ReactDebugTool.js",
                      },
                      {
                        type: "file",
                        name: "ReactGlobalSharedState.js",
                      },
                      {
                        type: "file",
                        name: "ReactNative.js",
                      },
                      {
                        type: "file",
                        name: "ReactNativeBridgeEventPlugin.js",
                      },
                      {
                        type: "file",
                        name: "ReactNativeComponentTree.js",
                      },
                      {
                        type: "file",
                        name: "ReactNativePropRegistry.js",
                      },
                      {
                        type: "file",
                        name: "ReactPerf.js",
                      },
                      {
                        type: "file",
                        name: "TouchHistoryMath.js",
                      },
                      {
                        type: "file",
                        name: "createReactNativeComponentClass.js",
                      },
                      {
                        type: "file",
                        name: "takeSnapshot.js",
                      },
                    ],
                  },
                  {
                    type: "directory",
                    name: "rollup",
                    children: [
                      {
                        type: "file",
                        name: "ReactCurrentOwner-www.js",
                      },
                      {
                        type: "file",
                        name: "ReactFeatureFlags-www.js",
                      },
                      {
                        type: "file",
                        name: "assign-umd.js",
                      },
                      {
                        type: "file",
                        name: "lowPriorityWarning-www.js",
                      },
                    ],
                  },
                ],
              },
              {
                type: "file",
                name: "stats.js",
              },
              {
                type: "file",
                name: "sync.js",
              },
              {
                type: "file",
                name: "utils.js",
              },
              {
                type: "directory",
                name: "validate",
                children: [
                  {
                    type: "file",
                    name: "eslintignore",
                  },
                  {
                    type: "file",
                    name: "eslintrc.cjs.js",
                  },
                  {
                    type: "file",
                    name: "eslintrc.fb.js",
                  },
                  {
                    type: "file",
                    name: "eslintrc.rn.js",
                  },
                  {
                    type: "file",
                    name: "eslintrc.umd.js",
                  },
                  {
                    type: "file",
                    name: "index.js",
                  },
                ],
              },
              {
                type: "file",
                name: "wrappers.js",
              },
            ],
          },
          {
            type: "directory",
            name: "shared",
            children: [
              {
                type: "directory",
                name: "__tests__",
                children: [
                  {
                    type: "file",
                    name: "evalToString-test.js",
                  },
                ],
              },
              {
                type: "file",
                name: "evalToString.js",
              },
            ],
          },
          {
            type: "directory",
            name: "tasks",
            children: [
              {
                type: "file",
                name: "eslint.js",
              },
              {
                type: "file",
                name: "flow.js",
              },
              {
                type: "file",
                name: "jest.js",
              },
              {
                type: "file",
                name: "linc.js",
              },
              {
                type: "file",
                name: "version-check.js",
              },
            ],
          },
        ],
      },
      {
        type: "file",
        name: "yarn.lock",
      },
    ],
  },
  {
    type: "report",
    directories: 151,
    files: 711,
  },
];
