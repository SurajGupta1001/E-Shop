// const products = [
//   {
//     name: "PlayStation 5",
//     imageUrl:
//       "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
//     description:
//       "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
//     price: 499,
//     countInStock: 15,
//   },
//   {
//     name: "Iphone 12",
//     imageUrl:
//       "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
//     description:
//       "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
//     price: 1099,
//     countInStock: 10,
//   },
//   {
//     name: "Cannon EOS-1D",
//     imageUrl:
//       "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description:
//       "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
//     price: 1300,
//     countInStock: 5,
//   },
//   {
//     name: "Amazon Alexa",
//     imageUrl:
//       "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
//     description:
//       "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
//     price: 50,
//     countInStock: 25,
//   },
//   {
//     name: "Audio Technica Headphones",
//     imageUrl:
//       "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description:
//       "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
//     price: 233,
//     countInStock: 4,
//   },
//   {
//     name: "JBL FLIP 4",
//     imageUrl:
//       "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
//     description:
//       "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
//     price: 140,
//     countInStock: 10,
//   },
// ];

// module.exports = products;


// Generate additional dummy data for 8 unique products
const products = [
  {
    name: "Nintendo Switch",
    imageUrl:
      "https://images.unsplash.com/photo-1565727241122-b79e9c587de4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Nintendo Switch is a hybrid video game console that can be used as both a home console and a portable handheld device. It offers a wide range of games and allows players to switch between TV mode and handheld mode for gaming on the go.",
    price: 299,
    countInStock: 20,
  },
  {
    name: "Samsung QLED TV",
    imageUrl:
      "https://images.unsplash.com/photo-1603489046782-38a4a7d6c46f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Experience breathtaking picture quality with the Samsung QLED TV. With Quantum Dot technology, you'll enjoy vibrant colors and impressive contrast for an immersive viewing experience.",
    price: 999,
    countInStock: 8,
  },
  {
    name: "Logitech G Pro X Gaming Keyboard",
    imageUrl:
      "https://images.unsplash.com/photo-1601668610199-eef01df4b64d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Logitech G Pro X Gaming Keyboard features customizable RGB lighting, mechanical key switches, and programmable macros, making it the perfect keyboard for gamers seeking precision and performance.",
    price: 149,
    countInStock: 12,
  },
  {
    name: "Fitbit Charge 4",
    imageUrl:
      "https://images.unsplash.com/photo-1578924413529-60a71be3b0d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Fitbit Charge 4 is a feature-packed fitness tracker that offers heart rate monitoring, GPS tracking, sleep tracking, and more. Stay motivated and track your fitness goals with ease.",
    price: 129,
    countInStock: 15,
  },
  {
    name: "Google Nest Hub",
    imageUrl:
      "https://images.unsplash.com/photo-1614896145770-fc2af9153cd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Google Nest Hub is a smart display that combines the power of Google Assistant with a touchscreen interface. Use it to control smart home devices, play music, watch videos, and get visual answers to your questions.",
    price: 99,
    countInStock: 18,
  },
  {
    name: "DJI Mavic Air 2",
    imageUrl:
      "https://images.unsplash.com/photo-1593810402492-ebdf28331f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The DJI Mavic Air 2 is a compact and powerful drone that delivers stunning 4K videos and 48MP photos. With intelligent flight modes and obstacle sensors, it's perfect for capturing cinematic aerial shots.",
    price: 799,
    countInStock: 7,
  },
  {
    name: "Bose QuietComfort 35 II",
    imageUrl:
      "https://images.unsplash.com/photo-1575027030923-ef74628c6b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Enjoy immersive audio and noise-cancelling technology with the Bose QuietComfort 35 II headphones. They provide exceptional sound quality and a comfortable fit for long listening sessions.",
    price: 279,
    countInStock: 9,
  },
  {
    name: "Microsoft Surface Laptop 4",
    imageUrl:
      "https://images.unsplash.com/photo-1611542762022-0eb0a9a4e2de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The Microsoft Surface Laptop 4 combines elegance and performance. It features a vibrant PixelSense display, powerful processors, and all-day battery life, making it a great choice for productivity and creativity.",
    price: 1199,
    countInStock: 11,
  },
];

module.export = products
