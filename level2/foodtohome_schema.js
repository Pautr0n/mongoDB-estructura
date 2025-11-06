db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customers",
      "required": ["name", "surname", "address"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surname": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "floor", "door", "city", "postal_code", "province"],
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
            "province": {
              "bsonType": "string"
            }
          }
        },
        "phone_number": {
          "bsonType": "string"
        }
      }
    }
  }
});
db.createCollection("sales_order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "sales_order",
      "required": ["date", "delivery", "order_details", "total_amount", "comments", "customer_id", "restaurant_id"],
      "properties": {
        "date": {
          "bsonType": "date"
        },
        "delivery": {
          "bsonType": "bool"
        },
        "order_details": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["product_id", "quntity"],
            "properties": {
              "product_id": {
                "bsonType": "objectId"
              },
              "quntity": {
                "bsonType": "int"
              }
            }
          }
        },
        "total_amount": {
          "bsonType": "decimal"
        },
        "comments": {
          "bsonType": "string"
        },
        "delivery_details": {
          "bsonType": "object",
          "title": "object",
          "required": ["employee_id", "delivered_on"],
          "properties": {
            "employee_id": {
              "bsonType": "objectId"
            },
            "delivered_on": {
              "bsonType": "date"
            }
          }
        },
        "customer_id": {
          "bsonType": "objectId"
        },
        "restaurant_id": {
          "bsonType": "objectId"
        }
      }
    }
  }
});
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "products",
      "required": ["name", "price"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "image_url": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "pizza_category": {
          "bsonType": "string"
        }
      }
    }
  }
});
db.createCollection("restaurant", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "restaurant",
      "required": ["street", "street_number", "postal_code", "city", "province"],
      "properties": {
        "street": {
          "bsonType": "string"
        },
        "street_number": {
          "bsonType": "string"
        },
        "postal_code": {
          "bsonType": "string"
        },
        "city": {
          "bsonType": "string"
        },
        "province": {
          "bsonType": "string"
        }
      }
    }
  }
});
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employees",
      "required": ["name", "surname", "nif", "phone_number", "job_position", "restaurant_id"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surname": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        },
        "phone_number": {
          "bsonType": "string"
        },
        "job_position": {
          "enum": ["Deliveries", "Kitchen"]
        },
        "restaurant_id": {
          "bsonType": "objectId"
        }
      }
    }
  }
});