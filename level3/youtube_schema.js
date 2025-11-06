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
        "birth_Date": {
          "bsonType": "date"
        },
        "gender": {
          "enum": ["M", "F", "N/A"]
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
        },
        "playlists": {
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
                "enum": ["Like", "Dislike"]
              }
            }
          }
        },
        "state": {
          "enum": ["Public", "Private", "Hidden"]
        },
        "tags": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "published": {
          "bsonType": "array",
          "items": {
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
      "required": ["name", "created_on", "created_by"],
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
        "created_by": {
          "bsonType": "objectId"
        },
        "subscribers": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
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
      "required": ["name", "created_on", "state", "created_by"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "created_on": {
          "bsonType": "date"
        },
        "state": {
          "enum": ["Public", "Private"]
        },
        "created_by": {
          "bsonType": "objectId"
        },
        "videos": {
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
      "required": ["comment", "date", "commented_by", "video_id"],
      "properties": {
        "comment": {
          "bsonType": "string"
        },
        "date": {
          "bsonType": "date"
        },
        "commented_by": {
          "bsonType": "objectId"
        },
        "video_id": {
          "bsonType": "objectId"
        }
      }
    }
  }
});