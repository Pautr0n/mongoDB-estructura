db.createCollection("users", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "users",
      "required": ["email", "password_sha", "username", "birth_Date", "gender", "postal_code", "country"],
      "properties": {
        "email": {
          "bsonType": "string"
        },
        "password_sha": {
          "bsonType": "string"
        },
        "username": {
          "bsonType": "string"
        },
        "channel_id": {
          "bsonType": "objectId"
        },
        "birth_Date": {
          "bsonType": "date"
        },
        "gender": {
          "enum": ["M","F","N/A"]
        },
        "postal_code": {
          "bsonType": "string"
        },
        "country": {
          "bsonType": "string"
        },
        "subscribed_to": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "videos",
      "required": ["title", "size", "length", "thumbnail_url", "reproductions", "state", "published"],
      "properties": {
        "title": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "size": {
          "bsonType": "int"
        },
        "length": {
          "bsonType": "int"
        },
        "thumbnail_url": {
          "bsonType": "string"
        },
        "reproductions": {
          "bsonType": "int"
        },
        "reaction": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "reacted_on", "reaction"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "reacted_on": {
                "bsonType": "date"
              },
              "reaction": {
                "enum": ["Like","Dislike"]
              }
            }
          }  
        },
        "state": {
          "enum": ["Public","Private","Hidden"]
        },
        "tags": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "published": {
          "bsonType": "object",
          "title": "object",
          "required": ["user_id", "date"],
          "properties": {
            "user_id": {
              "bsonType": "objectId"
            },
            "date": {
              "bsonType": "date"
            }
          }  
        },
        "comments": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
db.createCollection("channel", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "channel",
      "required": ["name", "created_on"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "created_on": {
          "bsonType": "date"
        },
        "users_id": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"  ,
            "description":"users subscribed to the channel"
          }
        }
      }  
    } 
  }
});
db.createCollection("playlists", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "playlists",
      "required": ["name", "created_on", "state", "user_id", "videos_id", "users_id"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "created_on": {
          "bsonType": "date"
        },
        "state": {
          "enum": ["Public","Private"]
        },
        "user_id": {
          "bsonType": "objectId"
        },
        "videos_id": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        },
        "users_id": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
db.createCollection("comments", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "comments",
      "required": ["comment", "date", "user_id", "video_id"],
      "properties": {
        "comment": {
          "bsonType": "string"
        },
        "date": {
          "bsonType": "date"
        },
        "user_id": {
          "bsonType": "objectId"
        },
        "video_id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});