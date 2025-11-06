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
          "enum": ["Metalic", "Plastic", "Rimless"]
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
          "bsonType": "objectId"
        },
        "bought_by": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["customer_id", "sales_date", "sold_by"],
            "properties": {
              "customer_id": {
                "bsonType": "objectId"
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
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customers",
      "required": ["name", "address", "phone_number", "email", "registration_date"],
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
        "email": {
          "bsonType": "string"
        },
        "registration_date": {
          "bsonType": "date"
        },
        "recomended_by": {
          "bsonType": "object",
          "title": "object",
          "required": ["customer_id"],
          "properties": {
            "customer_id": {
              "bsonType": "objectId"
            }
          }
        }
      }
    }
  }
});
db.createCollection("supplier", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "supplier",
      "required": ["name", "address", "phone_number", "fax_number", "nif"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
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
});