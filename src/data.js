const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 30.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Audio",
    image: "/public/assets/img-1.webp",
  },
  {
    id: 2,
    title: "Saare ga ma radio ",
    price: 22.3,
    description:
      "This radio boasts a sleek and compact design with contrasting elements and intuitive controls for ease of use. It's lightweight yet durable, making it perfect for portable use. The solid construction ensures longevity and delivers excellent audio quality for both casual and devoted radio listeners. Features a three-button panel interface for seamless tuning and control.",
    category: "Audio",
    image:
      "/src/assets/img-2.png",
  },
  {
    id: 3,
    title: "Asus laptops",
    price: 355.99,
    description:
      "This versatile laptop is perfect for work, travel, and everyday use, offering reliable performance for various tasks like office work, creative projects, and entertainment.",
    category: "Laptops",
    image: "/public/assets/img-3.png",
  },
  {
    id: 4,
    title: "Tital Watch 2x series",
    price: 15.99,
    description:
      "The color may appear slightly different on your screen compared to in person. Please note that wrist sizes vary, so be sure to review the detailed size information provided in the product description below.",
    category: "All",
    image: "/public/assets/img-4.jpg",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 395,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Laptops",
    image: "/public/assets/img-5.avif",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 68,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Audio",
    image: "/public/assets/img-6.jpg",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 199.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Phones",
    image: "/public/assets/img-7.jpg",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Audio",
    image: "/public/assets/img-8.jpg",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 264,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Laptops",
    image: "/public/assets/img-9.jpg",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Graphic Cards",
    image: "/public/assets/ssd.jpg",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 40,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "Graphic Cards",
    image: "/public/assets/memory.jpg",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 44,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "Graphic Cards",
    image: "/public/assets/grphic.jpg",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 139,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Monitors",
    image: "/public/assets/acer.jpg",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 99.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Monitors",
    image: "/public/assets/monitor.avif",

  },
  {
    id: 15,
    title: "Sugon 3005D Power Supply",
    price: 56.99,
    description:
      "The power supply follows US standards, so please check your device's compatibility. Material: Durable metal casing. Detachable cable design: Enables easy connection and reduces clutter. User-friendly features: Multiple output ports and adjustable settings to provide the right voltage and current for your devices, ensuring optimal performance across various conditions. Safety Features: Includes short circuit and overload protection for secure operation. The versatile 3-in-1 design allows flexibility, enabling you to adapt to changing power needs and environments.",
    category: "Power Supply",
    image: "/public/assets/dc power supply.webp",

  },
  {
    id: 16,
    title:
      "Power Supply",
    price: 59.95,
    description:
     "The power supply follows US standards, so please check your device's compatibility. Material: Durable metal casing. Detachable cable design: Enables easy connection and reduces clutter. User-friendly features: Multiple output ports and adjustable settings to provide the right voltage and current for your devices, ensuring optimal performance across various conditions. Safety Features: Includes short circuit and overload protection for secure operation. The versatile 3-in-1 design allows flexibility, enabling you to adapt to changing power needs and environments.",
    category: "Power Supply",
    image: "/public/assets/Uninterruptible-power-supply-1024x680.webp",
    
  },
  {
    id: 17,
    title: "Monitors Series pavillion",
    price: 89.99,
    description:
      "Lightweight and perfect for travel or everyday use—features include a sleek design with adjustable stand for optimal viewing angles. The monitor has a button and menu front interface, fully detailed with intuitive controls. Equipped with 2 side connectivity ports to accommodate various devices, it covers a wide range of display sizes, and the bezel is slim yet functional. The adjustable stand with versatile tilt and height options offers a refined and practical look.",
    category: "Monitors",
    image: "/public/assets/monitor-all-series-kv-3-m.avif",
    
  },
  {
    id: 18,
    title: "hp pavillion plus 2x series",
    price: 129.85,
    description:
     "Lightweight and perfect for travel or everyday use—features include a sleek design with adjustable stand for optimal viewing angles. The monitor has a button and menu front interface, fully detailed with intuitive controls. Equipped with 2 side connectivity ports to accommodate various devices, it covers a wide range of display sizes, and the bezel is slim yet functional. The adjustable stand with versatile tilt and height options offers a refined and practical look.",
    category: "Monitors",
    image: "/public/assets/FUYAofwatKBmPuUzXDNM83.jpg",
    
  },
  {
    id: 19,
    title: "GPU GTX 2s",
    price: 87.95,
    description:
      "Core Material: High-quality components, Features: Efficient, High Performance, Advanced Cooling, and Innovative Architecture. The design is sleek and compact with additional overclocking potential. Ideal for: Gaming, Professional Workstations, Video Editing, and Home Entertainment. Compatible with multiple seasons of technological advancements.",
    category: "Graphic Cards",
    image: "/public/assets/GPU-vs-Graphics-Card.webp",
    
  },
  {
    id: 20,
    title: "RTX GPU",
    price: 112.99,
    description:
      "Core Material: High-quality components, Features: Efficient, High Performance, Advanced Cooling, and Innovative Architecture. The design is sleek and compact with additional overclocking potential. Ideal for: Gaming, Professional Workstations, Video Editing, and Home Entertainment. Compatible with multiple seasons of technological advancements.",
    category: "Graphic Cards",
    image: "/public/assets/best-gpu-for-4k-gaming.avif",
    
  },
];

export default products;
