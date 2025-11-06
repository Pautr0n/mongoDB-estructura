db.suppliers.insertMany([
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab4'),
    name: "Ópticas Martínez",
    address: {
      street: "Calle Mayor",
      number: "45",
      floor: "2",
      door: "B",
      city: "Madrid",
      postal_code: "28013",
      country: "España"
    },
    phone_number: "+34 915 123 456",
    fax_number: "+34 915 654 321",
    nif: "B12345678"
  },
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab5'),
    name: "VisionTech Ltd.",
    address: {
      street: "Oxford Street",
      number: "221B",
      floor: "3",
      door: "A",
      city: "London",
      postal_code: "W1D 2LT",
      country: "United Kingdom"
    },
    phone_number: "+44 20 7946 0958",
    fax_number: "+44 20 7946 0959",
    nif: "GB987654321"
  },
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab6'),
    name: "Lents i Ulleres S.A.",
    address: {
      street: "Passeig de Gràcia",
      number: "12",
      floor: "1",
      door: "C",
      city: "Barcelona",
      postal_code: "08007",
      country: "España"
    },
    phone_number: "+34 933 456 789",
    fax_number: "+34 933 456 790",
    nif: "A76543210"
  }
]);

// Inserting eyeglasses
db.eyeglasses.insertMany([
  {
    _id: ObjectId('690b1e6bf32a56ac86e92ab8'),
    brand: "Ray-Ban",
    graduation: {
      left_glass: NumberDecimal("-1.25"),
      right_glass: NumberDecimal("-1.00")
    },
    frame_type: "Metal",
    frame_color: "Silver",
    glasses_color: {
      left_glass: "Gray",
      right_glass: "Gray"
    },
    price: NumberDecimal("129.99"),
    supplier: ObjectId("690b1d90f32a56ac86e92ab4")
  },
  {
    _id: ObjectId('690b1e6bf32a56ac86e92ab9'),
    brand: "Oakley",
    graduation: {
      left_glass: NumberDecimal("0.00"),
      right_glass: NumberDecimal("0.00")
    },
    frame_type: "Plastic",
    frame_color: "Black",
    glasses_color: {
      left_glass: "Blue",
      right_glass: "Blue"
    },
    price: NumberDecimal("159.50"),
    supplier: ObjectId("690b1d90f32a56ac86e92ab5")
  },
  {
    _id: ObjectId('690b1e6bf32a56ac86e92aba'),
    brand: "Persol",
    graduation: {
      left_glass: NumberDecimal("-2.75"),
      right_glass: NumberDecimal("-3.00")
    },
    frame_type: "Rimless",
    frame_color: "Transparent",
    glasses_color: {
      left_glass: "Clear",
      right_glass: "Clear"
    },
    price: NumberDecimal("189.00"),
    supplier: ObjectId("690b1d90f32a56ac86e92ab6")
  }
]);

// Inserting customers
db.customers.insertMany([
  {
    name: "Laura Gómez",
    address: {
      street: "Carrer de Sants",
      number: "123",
      floor: "3",
      door: "A",
      city: "Barcelona",
      postal_code: "08028",
      country: "España"
    },
    phone_number: "+34 612 345 678",
    email: "laura.gomez@example.com",
    registration_date: new Date("2023-06-15"),
    purchases: [
      {
        eyeglasses: ObjectId("690b1e6bf32a56ac86e92ab8"),
        sold_by: { name: "Carlos", surname: "Ruiz" },
        sale_date: new Date("2023-07-01")
      },
      {
        eyeglasses: ObjectId("690b1e6bf32a56ac86e92ab9"),
        sold_by: { name: "Marta", surname: "López" },
        sale_date: new Date("2023-09-12")
      }
    ]
  },
  {
    name: "Jordi Pons",
    address: {
      street: "Avinguda Diagonal",
      number: "456",
      floor: "2",
      door: "B",
      city: "Barcelona",
      postal_code: "08037",
      country: "España"
    },
    phone_number: "+34 699 876 543",
    email: "jordi.pons@example.com",
    registration_date: new Date("2024-01-20"),
    recomended_by: {
      customer: ObjectId("654321abcdef123456789201"),
    },
    purchases: [
      {
        eyeglasses: ObjectId("690b1e6bf32a56ac86e92ab9"),
        sold_by: { name: "Ana", surname: "Martínez" },
        sale_date: new Date("2024-02-10")
      },
      {
        eyeglasses: ObjectId("690b1e6bf32a56ac86e92ab8"),
        sold_by: { name: "David", surname: "Sánchez" },
        sale_date: new Date("2024-05-05")
      },
      {
        eyeglasses: ObjectId("690b1e6bf32a56ac86e92aba"),
        sold_by: { name: "Lucía", surname: "Fernández" },
        sale_date: new Date("2024-08-18")
      }
    ]
  }
]);