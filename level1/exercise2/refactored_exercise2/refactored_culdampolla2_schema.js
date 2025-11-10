db.createCollection("eyeglasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "eyeglasses",
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
              "bsonType": "decimal"
            },
            "right_glass": {
              "bsonType": "decimal"
            }
          }  
        },
        "frame_type": {
          "enum": ["Metalic","Plastic","Rimless"]
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
          "bsonType": "decimal"
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
        },
        "bought_by": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["customer", "sales_date", "sold_by"],
            "properties": {
              "customer": {
                "bsonType": "object",
                "title": "object",
                "required": ["name", "address", "phone_number", "email", "registration_date"],
                "properties": {
                  "recomended_by": {
                    "bsonType": "object",
                    "title": "object",
                    "required": ["customer_id", "name"],
                    "properties": {
                      "customer_id": {
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
                  }
                }  
              },
              "sales_date": {
                "bsonType": "date"
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
              }
            }
          }  
        }
      }  
    } 
  },
  "autoIndexId": true
});
