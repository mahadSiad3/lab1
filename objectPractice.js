let easyObj= {
    level1: {
        prop1: "value1",
        level2: {
            prop2: "value2",
            level3: {
                prop3: "value3",
                level4: {
                    prop4: "value4",
                    level5: {
                        prop5: "you made it"
                    }
                }
            }
        }
    }
};

let result = easyObj.level1.level2.level3.level4.level5.prop5;
console.log(result);

const mediumObject = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              level6: {
                level7: {
                  level8: [
                    {
                      level9: {
                        level10: [
                          {
                            level11: {
                              level12: [
                                [],
                                {
                                  level13: [
                                    {
                                      level14: {
                                        level15: [
                                          [],
                                          [],
                                          {
                                            level16: {
                                              level17: [
                                                {
                                                  level18: {
                                                    level19: {
                                                      level20: "You made it!"
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  };

let med = mediumObject.level1.level2.level3.level4.level5.level6.level7.level8[0].level9.level10[0].level11.level12[1].level13[0].level14.level15[2].level16.level17[0].level18.level19.level20;
console.log(med);

const hardObj = {
    level1: {
      level2: [
        { level3: [] },
        {
          level3: {
            level4: [
              [],
              {
                level5: [
                  {
                    level6: {
                      level7: [
                        [],
                        [],
                        {
                          level8: [
                            { level9: [] },
                            {
                              level9: [
                                {},
                                {
                                  level10: [
                                    [],
                                    {
                                      level11: {
                                        level12: [
                                          { level13: [] },
                                          { level13: { level14: [[], [], { level15: { level16: [{ level17: { level18: [{ level19: [{ level20: "You made it on hard object!" }] }] } }] } }] }  },
                                          { level13: [] }]
                                    }}
                                        ]
                                      }
                           ] },
                                    []
                                  ]
                                },
                                {}
                              ]
                            }
                            },
                          ]
                        }
                      ]
                    }
                  },
                  { level6: [] }
                ]
              },
  };
  let hard = hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1].level9[1].level10[1].level11.level12[1].level13.level14[2].level15.level16[0].level17.level18[0].level19[0].level20;
  console.log(hard);