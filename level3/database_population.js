
// Inserting Users
db.users.insertMany([
  {
    _id : ObjectId("690a3058727faf9bba7f27ec"),
    email: "ana@example.com",
    password_sha: "sha256ana",
    username: "AnaGamer",
    birth_Date: ISODate("1995-06-15"),
    gender: "F",
    postal_code: "08001",
    country: "España",
    subscribed_to: [],
    playlists: []
  },
  {
    _id : ObjectId("690a3058727faf9bba7f27ed"),
    email: "luis@example.com",
    password_sha: "sha256luis",
    username: "LuisTech",
    birth_Date: ISODate("1990-03-22"),
    gender: "M",
    postal_code: "28013",
    country: "España",
    subscribed_to: [],
    playlists: []
  },
  {
    _id : ObjectId("690a3058727faf9bba7f27ee"),
    email: "maria@example.com",
    password_sha: "sha256maria",
    username: "MariaVlogs",
    birth_Date: ISODate("1988-11-05"),
    gender: "F",
    postal_code: "41001",
    country: "España",
    subscribed_to: [],
    playlists: []
  },
  {
    _id : ObjectId("690a3058727faf9bba7f27ef"),
    email: "jose@example.com",
    password_sha: "sha256jose",
    username: "JoseMusic",
    birth_Date: ISODate("2000-01-01"),
    gender: "M",
    postal_code: "46001",
    country: "España",
    subscribed_to: [],
    playlists: []
  },
  {
    _id : ObjectId("690a3058727faf9bba7f27f0"),
    email: "natalia@example.com",
    password_sha: "sha256natalia",
    username: "NataliaArt",
    birth_Date: ISODate("1992-09-09"),
    gender: "F",
    postal_code: "50001",
    country: "España",
    subscribed_to: [],
    playlists: []
  }
]);

const usersids = [
  ObjectId("690a3058727faf9bba7f27ec"),
  ObjectId("690a3058727faf9bba7f27ed"),
  ObjectId("690a3058727faf9bba7f27ee"),
  ObjectId("690a3058727faf9bba7f27ef"),
  ObjectId("690a3058727faf9bba7f27f0")
];


// Inserting videos
db.videos.insertMany([
  {
    _id : ObjectId('690a319e727faf9bba7f27f1'),
    title: "Cómo programar en JavaScript",
    description: "Tutorial básico",
    size: 120,
    length: 600,
    thumbnail_url: "thumb1.jpg",
    reproductions: 1500,
    reaction: [],
    state: "Public",
    tags: ["programación", "javascript"],
    published: [{ user_id: usersids[0], date: ISODate("2025-10-01") }],
    comments: []
  },
  {
    _id : ObjectId('690a319e727faf9bba7f27f2'),
    title: "Vlog en Barcelona",
    description: "Un día en la ciudad",
    size: 90,
    length: 300,
    thumbnail_url: "thumb2.jpg",
    reproductions: 2300,
    reaction: [],
    state: "Public",
    tags: ["vlog", "barcelona"],
    published: [{ user_id: usersids[0], date: ISODate("2025-09-15") }],
    comments: []
  },
  {
    _id : ObjectId('690a319e727faf9bba7f27f3'),
    title: "Cover de guitarra",
    description: "Versión acústica",
    size: 80,
    length: 240,
    thumbnail_url: "thumb3.jpg",
    reproductions: 1800,
    reaction: [],
    state: "Private",
    tags: ["música", "guitarra"],
    published: [{ user_id: usersids[1], date: ISODate("2025-08-20") }],
    comments: []
  },
  {
    _id : ObjectId('690a319e727faf9bba7f27f4'),
    title: "Arte digital paso a paso",
    description: "Tutorial de dibujo",
    size: 100,
    length: 480,
    thumbnail_url: "thumb4.jpg",
    reproductions: 2100,
    reaction: [],
    state: "Public",
    tags: ["arte", "digital"],
    published: [{ user_id: usersids[2], date: ISODate("2025-07-10") }],
    comments: []
  },
  {
    _id : ObjectId('690a319e727faf9bba7f27f5'),
    title: "Review de gadgets",
    description: "Probamos los últimos dispositivos",
    size: 150,
    length: 720,
    thumbnail_url: "thumb5.jpg",
    reproductions: 3000,
    reaction: [],
    state: "Public",
    tags: ["tecnología", "gadgets"],
    published: [{ user_id: usersids[4], date: ISODate("2025-06-05") }],
    comments: []
  }
]);

// Inserting channels
db.channel.insertMany([
  {
    _id : ObjectId('690a3208727faf9bba7f27f6'),
    name: "TechWorld",
    description: "Canal de tecnología",
    created_on: ISODate("2025-01-01"),
    created_by: usersids[0],
    subscribers: [usersids[1], usersids[2]]
  },
  {
    _id : ObjectId('690a3208727faf9bba7f27f7'),
    name: "Arte y Diseño",
    description: "Tutoriales creativos",
    created_on: ISODate("2025-02-01"),
    created_by: usersids[1],
    subscribers: [usersids[2],usersids[3],usersids[4]]
  },
  {
    _id : ObjectId('690a3208727faf9bba7f27f8'),
    name: "Vlogs de María",
    description: "Vida cotidiana",
    created_on: ISODate("2025-03-01"),
    created_by: usersids[2],
    subscribers: [usersids[1],usersids[3],usersids[4]]
  },
  {
    _id : ObjectId('690a3208727faf9bba7f27f9'),
    name: "Música con José",
    description: "Covers y tutoriales",
    created_on: ISODate("2025-04-01"),
    created_by: usersids[3],
    subscribers: [usersids[4]]
  },
  {
    _id : ObjectId('690a3208727faf9bba7f27fa'),
    name: "Explorando España",
    description: "Viajes y cultura",
    created_on: ISODate("2025-05-01"),
    created_by: usersids[4],
    subscribers: [usersids[3]]
  }
]);

const channelsids = [
  ObjectId("690a3208727faf9bba7f27f6"),
  ObjectId("690a3208727faf9bba7f27f7"),
  ObjectId("690a3208727faf9bba7f27f8"),
  ObjectId("690a3208727faf9bba7f27f9"),
  ObjectId("690a3208727faf9bba7f27fa")
];


// Inserting playlists
db.playlists.insertMany([
  {
    _id : ObjectId('690a32f2727faf9bba7f27fb'),
    name: "Favoritos de programación",
    created_on: ISODate("2025-10-10"),
    state: "Public",
    created_by: usersids[0],
    videos: [ObjectId('690a319e727faf9bba7f27f1'), ObjectId('690a319e727faf9bba7f27f2'),ObjectId('690a319e727faf9bba7f27f3'), ObjectId('690a319e727faf9bba7f27f4')]
  },
  {
    _id : ObjectId('690a32f2727faf9bba7f27fc'),
    name: "Vlogs inspiradores",
    created_on: ISODate("2025-09-20"),
    state: "Private",
    created_by: usersids[0],
    videos: [ObjectId('690a319e727faf9bba7f27f3'), ObjectId('690a319e727faf9bba7f27f4'), ObjectId('690a319e727faf9bba7f27f5')]
  },
  {
    _id : ObjectId('690a32f2727faf9bba7f27fd'),
    name: "Música relajante",
    created_on: ISODate("2025-08-25"),
    state: "Public",
    created_by: usersids[3],
    videos: [ObjectId('690a319e727faf9bba7f27f1'), ObjectId('690a319e727faf9bba7f27f3')]
  },
  {
    _id : ObjectId('690a32f2727faf9bba7f27fe'),
    name: "Arte digital",
    created_on: ISODate("2025-07-15"),
    state: "Public",
    created_by: usersids[4],
    videos: [ObjectId('690a319e727faf9bba7f27f2'), ObjectId('690a319e727faf9bba7f27f5')]
  },
  {
    _id : ObjectId('690a32f2727faf9bba7f27ff'),
    name: "Tecnología y gadgets",
    created_on: ISODate("2025-06-10"),
    state: "Private",
    created_by: usersids[1],
    videos: [ObjectId('690a319e727faf9bba7f27f4'), ObjectId('690a319e727faf9bba7f27f5')]
  }
]);

const playlistsids = [
  ObjectId("690a32f2727faf9bba7f27fb"),
  ObjectId("690a32f2727faf9bba7f27fc"),
  ObjectId("690a32f2727faf9bba7f27fd"),
  ObjectId("690a32f2727faf9bba7f27fe"),
  ObjectId("690a32f2727faf9bba7f27ff")
];


// Inserting comments
db.comments.insertMany([
  {
    _id : ObjectId('690a3383727faf9bba7f2800'),
    comment: "¡Muy buen tutorial!",
    date: ISODate("2025-10-12"),
    commented_by: usersids[0],
    video_id: ObjectId("690a319e727faf9bba7f27f1")
  },
  {
    _id : ObjectId('690a3383727faf9bba7f2801'),
    comment: "Me encantó el vlog",
    date: ISODate("2025-09-22"),
    commented_by: usersids[1],
    video_id: ObjectId("690a319e727faf9bba7f27f1")
  },
  {
    _id : ObjectId('690a3383727faf9bba7f2802'),
    comment: "Gran cover, sigue así",
    date: ISODate("2025-08-27"),
    commented_by: usersids[2],
    video_id: ObjectId("690a319e727faf9bba7f27f4")
  },
  {
    _id : ObjectId('690a3383727faf9bba7f2803'),
    comment: "Aprendí mucho sobre arte digital",
    date: ISODate("2025-07-17"),
    commented_by: usersids[2],
    video_id: ObjectId("690a319e727faf9bba7f27f3")
  },
  {
    _id : ObjectId('690a3383727faf9bba7f2804'),
    comment: "Muy útil la review",
    date: ISODate("2025-06-12"),
    commented_by: usersids[4],
    video_id: ObjectId("690a319e727faf9bba7f27f2")
  }
]);

const commentsids = [
  ObjectId("690a3383727faf9bba7f2800"),
  ObjectId("690a3383727faf9bba7f2801"),
  ObjectId("690a3383727faf9bba7f2802"),
  ObjectId("690a3383727faf9bba7f2803"),
  ObjectId("690a3383727faf9bba7f2804")
];


//Updating users subscribed_to and playlists
db.users.updateOne(
  { _id: usersids[1]},
  { $set: { subscribed_to: [channelsids[0], channelsids[2]],
    playlists : [playlistsids[4]]
   } }
);

db.users.updateOne(
  { _id: usersids[2]},
  { $set: { subscribed_to: [channelsids[0], channelsids[1]] } }
);

db.users.updateOne(
  { _id: usersids[3]},
  { $set: { subscribed_to: [channelsids[1], channelsids[2], channelsids[4]],
    playlists : [playlistsids[2]] } }
);


db.users.updateOne(
  { _id: usersids[4]},
  { $set: { subscribed_to : [channelsids[1], channelsids[2], channelsids[3]],
    playlists : [playlistsids[3]] } }
);

db.users.updateOne(
  { _id: usersids[1]},
  { $set: { playlists : [playlistsids[0], playlistsids[1]] } }
);

// Updating comments on videos
db.videos.updateOne(
    { _id: ObjectId("690a319e727faf9bba7f27f1")},
    { $set: { comments: [commentsids[0], commentsids[1]] } }
);

db.videos.updateOne(
    { _id: ObjectId("690a319e727faf9bba7f27f4")},
    { $set: { comments: [commentsids[2]] } }
    
);

db.videos.updateOne(
    { _id: ObjectId("690a319e727faf9bba7f27f3")},
    { $set: { comments: [commentsids[3]] } }
);

db.videos.updateOne(
    { _id: ObjectId("690a319e727faf9bba7f27f2")},
    { $set: { comments: [commentsids[4]] } }
);

