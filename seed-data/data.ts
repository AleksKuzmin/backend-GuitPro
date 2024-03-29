function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: "GIBSON ES-335",
    description: "GIBSON 1961 ES-335 REISSUE VOS 60S CHERRY",
    status: "AVAILABLE",
    price: 5999,
    photo: {
      id: "5dfbed262849d7961377c2c0",
      filename: "hj3-6255_598x598.jpeg",
      originalFilename: "hj3-6255_598x598.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1576791335,
        signature: "9f7d5115788b7677307a39214f9684dd827ea5f9",
        width: 750,
        height: 457,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: "upload",
        etag: "e1fdf84d5126b6ca2e1c8ef9532be5a5",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638694293/guitPro/GIBSON_1961_ES-335_REISSUE_VOS_60S_CHERRY_cjns0p.jpg",
        secure_url:
          "https://rhttps://res.cloudinary.com/dgcshiggr/image/upload/v1638694293/guitPro/GIBSON_1961_ES-335_REISSUE_VOS_60S_CHERRY_cjns0p.jpges.cloudinary.com/dympu6pww/image/upload/v1638072570/shoppy/5dfbed262849d7961377c2c0_ibggom.jpg",
        original_filename: "file",
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Fender Stratocaster",
    description: "Fender American Professional || statocaster, left-hand, olympic white.",
    price: 1499,
    photo: {
      id: "5e2a13f0689b2835ae71d1a5",
      filename: "Fender Stratocaster.jpeg",
      originalFilename: "Fender Stratocaster.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815920,
        signature: "a430b2d35f6a03dc562f6f56a474deb6810e393f",
        width: 1920,
        height: 1280,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: "upload",
        etag: "aebe8e9cc98ee4ad71682f19af85745b",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638694994/guitPro/Fender_Stratocaster_ie0w9w.jpg",
        secure_url:
          "https://res.cloudinary.com/dympu6pww/image/upload/v1638670184/guitPro/61ac1f6558e092bad11b30de.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "FENDER JAZZ MASTER",
    description: "FENDER 1966 JAZZMASTER W/ PENSA NECK",
    status: "AVAILABLE",
    price: 8995,
    photo: {
      id: "5e2a13ff689b2835ae71d1a5",
      filename: "hj3-5503_598x598.jpeg",
      originalFilename: "hj3-5503_598x598.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 1600,
        height: 900,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638695512/guitPro/Fender_Jazzmaster_n7qbzi.jpg",
        secure_url:
          "https://res.cloudinary.com/dympu6pww/image/upload/v1638672968/guitPro/ibanez_x2lp6p.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
   {

  name: "FENDER PRECISION BASS",
    description: "FENDER 1963 PRECISION BASS",
    status: "AVAILABLE",
    price: 2562,
    photo: {
      id: "5e2a13ff689b2835ae71d1a9",
      filename: "hj3-5512_896x896.jpeg",
      originalFilename: "hj3-5512_896x896.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 1600,
        height: 900,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698022/guitPro/hj3-5512_896x896_q2mmgg.jpg",
        secure_url:
          "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698022/guitPro/hj3-5512_896x896_q2mmgg.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
{

  name: "MARTIN 00-21NY",
    description: "MARTIN 1963 00-21NY.",
    status: "AVAILABLE",
    price: 6995,
    photo: {
      id: "9e2a13ff689b2835ae71d1a",
      filename: "hj3-6084_598x598.jpeg",
      originalFilename: "hj3-6084_598x598.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 1600,
        height: 900,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698363/guitPro/hj3-6084_598x598_brnq15.jpg",
        secure_url:
          "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698363/guitPro/hj3-6084_598x598_brnq15.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
{

   name: "GIBSON LATE '40S L-7C",
    description: "GIBSON LATE '40S L-7C",
    status: "AVAILABLE",
    price: 5995,
    photo: {
      id: "5e2a13ff689b2835ae71d1a3",
      filename: "hj3-5971_598x598.jpeg",
      originalFilename: "hj3-5971_598x598.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 1600,
        height: 900,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698534/guitPro/hj3-5971_598x598_ypjqut.jpg",
        secure_url:
          "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698534/guitPro/hj3-5971_598x598_ypjqut.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
{

  name: "FENDER PRECISION BASS",
    description: "FENDER VINTERA '50S PRECISION BASS DAKOTA RED",
    status: "AVAILABLE",
    price: 1200,
    photo: {
      id: "5e2a13ff689b2835ae71d1a2",
      filename: "hj3-5839_598x598.jpeg",
      originalFilename: "hj3-5839_598x598.jpeg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 1600,
        height: 900,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698727/guitPro/hj3-5839_598x598_k7sieu.jpg",
        secure_url:
          "https://res.cloudinary.com/dgcshiggr/image/upload/v1638698727/guitPro/hj3-5839_598x598_k7sieu.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
];
