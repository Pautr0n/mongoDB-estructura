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
          "bsonType": "string"
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
        "eyeglasses": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["brand", "graduation", "glass_color", "frame_type", "price"],
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
              "glass_color": {
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
                }      ,
                "description":"new Date()"
              },
              "frame_type": {
                "enum": ["Metal","Plastic","Rimless"]
              },
              "price": {
                "bsonType": "decimal"
              }
            }
          }  
        }
      }  
    } 
  },
  "autoIndexId": true
});
