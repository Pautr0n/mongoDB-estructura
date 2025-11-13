db.createCollection("eyeglasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "eyeglasses",
      "required": ["brand", "frame_type", "supplier", "price"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "frame_type": {
          "enum": ["Metalic","Plastic","Rimless"]
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
        "price": {
          "bsonType": "decimal"
        },
        "bought_by": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["customer"],
            "properties": {
              "customer": {
                "bsonType": "object",
                "title": "object",
                "required": ["name", "address", "phone_number", "email", "registration_date"],
                "properties": {
                  "recomended_by": {
                    "bsonType": "string"
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
              }
            }
          }  
        }
      }  
    } 
  },
  "autoIndexId": true
});
