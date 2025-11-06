db.products.insertMany([
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab4'),
    name: "Pizza Margarita",
    description: "Clásica pizza con tomate, mozzarella y albahaca.",
    image: "https://example.com/images/margarita.jpg",
    price: NumberDecimal("8.50"),
    pizza_category: "Vegetariana"
  },
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab5'),
    name: "Pizza Pepperoni",
    description: "Pizza con salsa de tomate, mozzarella y pepperoni.",
    image: "https://example.com/images/pepperoni.jpg",
    price: NumberDecimal("9.75"),
    pizza_category: "Carnes"
  }
]);

// Insert restaurants
db.restaurant.insertMany([
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab6'),
    street: "Carrer de la Lluna",
    street_number: "15",
    postal_code: "08001",
    city: "Barcelona",
    province: "Barcelona"
  },
  {
    _id: ObjectId('690b1d90f32a56ac86e92ab4'),
    street: "Calle del Sol",
    street_number: "22",
    postal_code: "28012",
    city: "Madrid",
    province: "Madrid"
  }
]);

// Insert empolyee
db.employees.insertMany([
  {
    _id: ObjectId('690b245bf32a56ac86e92ac2'),
    name: "Lucía",
    surname: "Martínez",
    nif: "12345678A",
    phone_number: "600123456",
    job_position: "Kitchen",
    restaurant_id: ObjectId("690b1d90f32a56ac86e92ab6")
  },
  {
    _id: ObjectId('690b245bf32a56ac86e92ac3'),
    name: "Javier",
    surname: "Gómez",
    nif: "87654321B",
    phone_number: "600654321",
    job_position: "Deliveries",
    restaurant_id: ObjectId("690b1d90f32a56ac86e92ab4")
  }
]);

// Insert customers
db.customers.insertMany([
  {
    _id: ObjectId('690b2416f32a56ac86e92abf'),
    name: "Laura",
    surname: "Gómez",
    address: {
      street: "Calle Mayor",
      number: "12",
      floor: "3",
      door: "B",
      city: "Madrid",
      postal_code: "28013",
      province: "Madrid"
    },
    phone_number: "600123456"
  },
  {
    _id: ObjectId('690b2416f32a56ac86e92ac0'),
    name: "Carlos",
    surname: "Martínez",
    address: {
      street: "Avenida Diagonal",
      number: "45",
      floor: "2",
      door: "A",
      city: "Barcelona",
      postal_code: "08019",
      province: "Barcelona"
    },
    phone_number: "611987654"
  },
  {
    _id: ObjectId('690b2416f32a56ac86e92ac1'),
    name: "Ana",
    surname: "Ruiz",
    address: {
      street: "Calle del Sol",
      number: "8",
      floor: "1",
      door: "C",
      city: "Valencia",
      postal_code: "46001",
      province: "Valencia"
    },
    phone_number: "622456789"
  }
]);

//Insert sales orders
db.sales_order.insertMany([
  {
    date: new Date("2025-11-01T13:00:00Z"),
    delivery: true,
    order_details: [
      { product_id: ObjectId("690b1d90f32a56ac86e92ab4"), quntity: 2 },
      { product_id: ObjectId("690b1d90f32a56ac86e92ab5"), quntity: 1 }
    ],
    total_amount: NumberDecimal("29.95"),
    comments: "Entregar rápido, por favor.",
    delivery_details: {
      employee_id: ObjectId("690b245bf32a56ac86e92ac3"),
      delivered_on: new Date("2025-11-01T14:00:00Z")
    },
    customer_id: ObjectId("690b2416f32a56ac86e92abf"),
    restaurant_id: ObjectId("690b1d90f32a56ac86e92ab4")
  },
  {
    date: new Date("2025-11-03T19:30:00Z"),
    delivery: false,
    order_details: [
      { product_id: ObjectId("690b1d90f32a56ac86e92ab4"), quntity: 1 }
    ],
    total_amount: NumberDecimal("12.50"),
    comments: "Sin cebolla.",
    delivery_details: {
      employee_id: ObjectId("690b245bf32a56ac86e92ac3"),
      delivered_on: new Date("2025-11-03T20:00:00Z")
    },
    customer_id: ObjectId("690b2416f32a56ac86e92ac0"),
    restaurant_id: ObjectId("690b1d90f32a56ac86e92ab6")
  }
]);
