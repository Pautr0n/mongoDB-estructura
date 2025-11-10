db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customers",
      "required": ["name", "phone_number", "registration_date"],
      "properties": {
        "recomended_by": {
          "bsonType": "object",
          "title": "object",
          "required": ["customer", "name"],
          "properties": {
            "customer": {
              "bsonType": "objectId"
            },
            "name": {
              "bsonType": "string"
            }
          }  
        },
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "floor", "door", "city", "postal_code", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "string"
            },
            "floor": {
              "bsonType": "string"
            },
            "door": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "postal_code": {
              "bsonType": "string"
            },
            "country": {
              "bsonType": "string"
            }
          }  
        },
        "phone_number": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "registration_date": {
          "bsonType": "date"
        },
        "purchases": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["eyeglasses", "sold_by", "sale_date"],
            "properties": {
              "eyeglasses": {
                "bsonType": "object",
                "title": "object",
                "required": ["brand", "graduation", "frame_type", "frame_color", "glasses_color", "price", "supplier"],
                "properties": {
                  "brand": {
                    "bsonType": "string"
                  },
                  "graduation": {
                    "bsonType": "object",
                    "title": "object",
                    "required": ["left_glass", "right_glass"],
                    "properties": {
                      "left_glass": {
                        "bsonType": "double"
                      },
                      "right_glass": {
                        "bsonType": "double"
                      }
                    }  
                  },
                  "frame_type": {
                    "enum": ["Metal","Plastic","Rimless"]
                  },
                  "frame_color": {
                    "bsonType": "string"
                  },
                  "glasses_color": {
                    "bsonType": "object",
                    "title": "object",
                    "required": ["left_glass", "right_glass"],
                    "properties": {
                      "left_glass": {
                        "bsonType": "string"
                      },
                      "right_glass": {
                        "bsonType": "string"
                      }
                    }  
                  },
                  "price": {
                    "bsonType": "string"
                  },
                  "supplier": {
                    "bsonType": "object",
                    "title": "object",
                    "required": ["name", "address", "phone_number", "fax_number", "nif"],
                    "properties": {
                      "name": {
                        "bsonType": "string"
                      },
                      "address": {
                        "bsonType": "object",
                        "title": "object",
                        "required": ["street", "number", "floor", "door", "city", "postal_code", "country"],
                        "properties": {
                          "street": {
                            "bsonType": "string"
                          },
                          "number": {
                            "bsonType": "string"
                          },
                          "floor": {
                            "bsonType": "string"
                          },
                          "door": {
                            "bsonType": "string"
                          },
                          "city": {
                            "bsonType": "string"
                          },
                          "postal_code": {
                            "bsonType": "string"
                          },
                          "country": {
                            "bsonType": "string"
                          }
                        }  
                      },
                      "phone_number": {
                        "bsonType": "string"
                      },
                      "fax_number": {
                        "bsonType": "string"
                      },
                      "nif": {
                        "bsonType": "string"
                      }
                    }  
                  }
                }  
              },
              "sold_by": {
                "bsonType": "object",
                "title": "object",
                "required": ["name", "surname"],
                "properties": {
                  "name": {
                    "bsonType": "string"
                  },
                  "surname": {
                    "bsonType": "string"
                  }
                }  
              },
              "sale_date": {
                "bsonType": "date",
                "description":"new Date()"
              }
            }
          }  
        }
      }  
    } 
  },
  "autoIndexId": true
});
