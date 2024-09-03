"use strict";

const { createSlug } = require("../utils/slug");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "brands",
      [
        // Thời Trang Nam
        {
          name: "Calvin Klein",
          slug: createSlug("Calvin Klein"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Levi's",
          slug: createSlug("Levi's"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike",
          slug: createSlug("Nike"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zara",
          slug: createSlug("Zara"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Thời Trang Nữ
        {
          name: "H&M",
          slug: createSlug("H&M"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mango",
          slug: createSlug("Mango"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chanel",
          slug: createSlug("Chanel"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gucci",
          slug: createSlug("Gucci"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Điện thoại & Phụ Kiện
        {
          name: "Apple",
          slug: createSlug("Apple"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",
          slug: createSlug("Samsung"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xiaomi",
          slug: createSlug("Xiaomi"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anker",
          slug: createSlug("Anker"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Máy Tính & Laptop
        {
          name: "Dell",
          slug: createSlug("Dell"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HP",
          slug: createSlug("HP"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ASUS",
          slug: createSlug("ASUS"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo",
          slug: createSlug("Lenovo"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Máy Anh & Máy Quay Phim
        {
          name: "Canon",
          slug: createSlug("Canon"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nikon",
          slug: createSlug("Nikon"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sony",
          slug: createSlug("Sony"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GoPro",
          slug: createSlug("GoPro"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Đồng Hồ
        {
          name: "Rolex",
          slug: createSlug("Rolex"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Casio",
          slug: createSlug("Casio"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Omega",
          slug: createSlug("Omega"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fossil",
          slug: createSlug("Fossil"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Giày Dép Nam
        {
          name: "Adidas",
          slug: createSlug("Adidas"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puma",
          slug: createSlug("Puma"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Timberland",
          slug: createSlug("Timberland"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clarks",
          slug: createSlug("Clarks"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Mẹ & Bé
        {
          name: "Johnson's Baby",
          slug: createSlug("Johnson's Baby"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pampers",
          slug: createSlug("Pampers"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Huggies",
          slug: createSlug("Huggies"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicco",
          slug: createSlug("Chicco"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Nhà Cửa & Đời Sống
        {
          name: "IKEA",
          slug: createSlug("IKEA"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tupperware",
          slug: createSlug("Tupperware"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philips",
          slug: createSlug("Philips"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electrolux",
          slug: createSlug("Electrolux"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Sắc Đẹp
        {
          name: "L'Oréal",
          slug: createSlug("L'Oréal"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Estée Lauder",
          slug: createSlug("Estée Lauder"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maybelline",
          slug: createSlug("Maybelline"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MAC",
          slug: createSlug("MAC"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Sức Khỏe
        {
          name: "GNC",
          slug: createSlug("GNC"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nature’s Bounty",
          slug: createSlug("Nature’s Bounty"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Centrum",
          slug: createSlug("Centrum"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Abbott",
          slug: createSlug("Abbott"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Giày Dép Nữ
        {
          name: "Jimmy Choo",
          slug: createSlug("Jimmy Choo"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Steve Madden",
          slug: createSlug("Steve Madden"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nine West",
          slug: createSlug("Nine West"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aldo",
          slug: createSlug("Aldo"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Túi Ví Nữ
        {
          name: "Louis Vuitton",
          slug: createSlug("Louis Vuitton"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael Kors",
          slug: createSlug("Michael Kors"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Prada",
          slug: createSlug("Prada"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coach",
          slug: createSlug("Coach"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Thiết Bị Gia Dụng
        {
          name: "Dyson",
          slug: createSlug("Dyson"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bosch",
          slug: createSlug("Bosch"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Panasonic",
          slug: createSlug("Panasonic"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",
          slug: createSlug("Samsung"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Phụ Kiện & Trang Sức Nữ
        {
          name: "Pandora",
          slug: createSlug("Pandora"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swarovski",
          slug: createSlug("Swarovski"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiffany & Co.",
          slug: createSlug("Tiffany & Co."),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bvlgari",
          slug: createSlug("Bvlgari"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Thể Thao & Du Lịch
        {
          name: "The North Face",
          slug: createSlug("The North Face"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Patagonia",
          slug: createSlug("Patagonia"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Columbia",
          slug: createSlug("Columbia"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Under Armour",
          slug: createSlug("Under Armour"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Bách Hóa Online
        {
          name: "Amazon Basics",
          slug: createSlug("Amazon Basics"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kirkland Signature",
          slug: createSlug("Kirkland Signature"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Target",
          slug: createSlug("Target"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Walmart",
          slug: createSlug("Walmart"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Nhà Sách Online
        {
          name: "Barnes & Noble",
          slug: createSlug("Barnes & Noble"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scholastic",
          slug: createSlug("Scholastic"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Penguin Random House",
          slug: createSlug("Penguin Random House"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HarperCollins",
          slug: createSlug("HarperCollins"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Ô Tô & Xe Máy & Xe Đạp
        {
          name: "Honda",
          slug: createSlug("Honda"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota",
          slug: createSlug("Toyota"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trek",
          slug: createSlug("Trek"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harley-Davidson",
          slug: createSlug("Harley-Davidson"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Balo & Túi Ví Nam
        {
          name: "Herschel",
          slug: createSlug("Herschel"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tumi",
          slug: createSlug("Tumi"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsonite",
          slug: createSlug("Samsonite"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike",
          slug: createSlug("Nike"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Đồ Chơi
        {
          name: "LEGO",
          slug: createSlug("LEGO"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mattel",
          slug: createSlug("Mattel"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hasbro",
          slug: createSlug("Hasbro"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fisher-Price",
          slug: createSlug("Fisher-Price"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Chăm Sóc Thú Cưng
        {
          name: "Pedigree",
          slug: createSlug("Pedigree"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Royal Canin",
          slug: createSlug("Royal Canin"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purina",
          slug: createSlug("Purina"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kong",
          slug: createSlug("Kong"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Dụng Cụ & Thiết Bị Tiện Ích
        {
          name: "Stanley",
          slug: createSlug("Stanley"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black+Decker",
          slug: createSlug("Black+Decker"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makita",
          slug: createSlug("Makita"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DeWalt",
          slug: createSlug("DeWalt"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Giặt Giũ & Chăm Sóc Nhà Cửa
        {
          name: "Tide",
          slug: createSlug("Tide"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clorox",
          slug: createSlug("Clorox"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lysol",
          slug: createSlug("Lysol"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swiffer",
          slug: createSlug("Swiffer"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Voucher & Dịch Vụ
        {
          name: "Groupon",
          slug: createSlug("Groupon"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Airbnb",
          slug: createSlug("Airbnb"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uber",
          slug: createSlug("Uber"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DoorDash",
          slug: createSlug("DoorDash"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
