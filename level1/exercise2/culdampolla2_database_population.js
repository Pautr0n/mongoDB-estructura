db.supplier.insertMany([
  {
    _id: ObjectId("655f1a1f1a1f1a1f1a1f1a1f"),
    name: "OptiLux",
    address: {
      street: "Calle Mayor",
      number: "12",
      floor: "3",
      door: "B",
      city: "Madrid",
      postal_code: "28013",
      country: "España"
    },
    phone_number: "911234567",
    fax_number: "911234568",
    nif: "A12345678"
  },
  {
    _id: ObjectId("655f1a2f1a2f1a2f1a2f1a2f"),
    name: "VisionPro",
    address: {
      street: "Avenida Diagonal",
      number: "45",
      floor: "2",
      door: "A",
      city: "Barcelona",
      postal_code: "08019",
      country: "España"
    },
    phone_number: "931234567",
    fax_number: "931234568",
    nif: "B87654321"
  }
]);

// Inserting customers
db.customers.insertMany([
  {
    _id: ObjectId("655f1b1b1b1b1b1b1b1b1b1b"),
    name: "Laura Gómez",
    address: {
      street: "Calle Luna",
      number: "8",
      floor: "1",
      door: "C",
      city: "Sevilla",
      postal_code: "41001",
      country: "España"
    },
    phone_number: "954123456",
    email: "laura.gomez@example.com",
    registration_date: ISODate("2025-10-01T10:00:00Z"),
    recomended_by: {
      customer_id: ObjectId("655f1b2b2b2b2b2b2b2b2b2b")
    }
  },
  {
    _id: ObjectId("655f1b2b2b2b2b2b2b2b2b2b"),
    name: "Carlos Ruiz",
    address: {
      street: "Calle Sol",
      number: "22",
      floor: "4",
      door: "D",
      city: "Valencia",
      postal_code: "46001",
      country: "España"
    },
    phone_number: "961234567",
    email: "carlos.ruiz@example.com",
    registration_date: ISODate("2025-09-15T14:30:00Z"),
    recomended_by: {
      customer_id: ObjectId("655f1b1b1b1b1b1b1b1b1b1b")
    }
  }
]);

// inserting eyeglasses
db.eyeglasses.insertMany([
  {
    brand: "RayBan",
    graduation: {
      left_glass: NumberDecimal("1.25"),
      right_glass: NumberDecimal("1.00")
    },
    frame_type: "Metalic",
    frame_color: "Negro",
    glasses_color: {
      left_glass: "Transparente",
      right_glass: "Transparente"
    },
    price: NumberDecimal("129.99"),
    supplier: ObjectId("655f1a1f1a1f1a1f1a1f1a1f"),
    bought_by: [
      {
        customer_id: ObjectId("655f1b1b1b1b1b1b1b1b1b1b"),
        sales_date: ISODate("2025-11-01T11:00:00Z"),
        sold_by: {
          name: "Ana",
          surname: "Martínez"
        }
      }
    ]
  },
  {
    brand: "Oakley",
    graduation: {
      left_glass: NumberDecimal("0.75"),
      right_glass: NumberDecimal("0.50")
    },
    frame_type: "Plastic",
    frame_color: "Azul",
    glasses_color: {
      left_glass: "Verde",
      right_glass: "Verde"
    },
    price: NumberDecimal("89.50"),
    supplier: ObjectId("655f1a2f1a2f1a2f1a2f1a2f"),
    bought_by: [
      {
        customer_id: ObjectId("655f1b2b2b2b2b2b2b2b2b2b"),
        sales_date: ISODate("2025-11-03T16:45:00Z"),
        sold_by: {
          name: "Luis",
          surname: "Fernández"
        }
      }
    ]
  }
]);