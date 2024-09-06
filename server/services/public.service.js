"use strict";

const { Op } = require("sequelize");
const { NotFoundError } = require("../core/error.response");
const { Product, Category, Brand } = require("../models");

class PublicService {
  static async getProducts(query) {
    const {
      keyword,
      category,
      brand,
      minPrice,
      maxPrice,
      minRating,
      inStock,
      sortBy = "createdAt",
      order = "desc",
      featured,
      discounted,
      new: isNew,
      page = 1,
      limit = 10,
    } = query;

    let filters = {};

    // Tìm kiếm theo tên sản phẩm
    if (keyword) filters.name = { [Op.like]: `%${keyword}%` };

    // Lọc theo danh mục
    if (category) filters.category_id = category;

    // Lọc theo thương hiệu
    if (brand) filters.brand_id = brand;

    // Lọc theo giá
    if (minPrice) filters.price = { [Op.gte]: minPrice };
    if (maxPrice) filters.price = { ...filters.price, [Op.lte]: maxPrice };

    // Lọc theo đánh giá
    if (minRating) filters.rating = { [Op.gte]: minRating };

    // Lọc theo trạng thái còn hàng
    if (inStock) filters.inStock = true;

    // Lọc theo sản phẩm nổi bật
    if (featured) filters.featured = true;

    // Lọc theo sản phẩm đang giảm giá
    if (discounted) filters.discounted = true;

    // Lọc theo sản phẩm mới trong 30 ngày
    if (isNew)
      filters.createdAt = {
        [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000),
      };

    const offset = (page - 1) * limit;

    try {
      // Tìm sản phẩm dựa trên các tiêu chí
      const products = await db.Product.findAndCountAll({
        where: filters,
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [[sortBy, order]],
        include: [
          { model: db.Category, as: "category" },
          { model: db.Brand, as: "brand" },
        ],
      });

      if (!products) {
        throw new NotFoundError("ERR: can not get products");
      }

      // Tìm danh mục chứa sản phẩm theo keyword
      const categories = await db.Category.findAll({
        include: [
          {
            model: db.Product,
            where: keyword ? { name: { [Op.like]: `%${keyword}%` } } : {},
          },
        ],
      });

      if (!categories) {
        throw new NotFoundError("ERR: can not get categories");
      }

      // Tìm thương hiệu chứa sản phẩm theo keyword
      const brands = await db.Brand.findAll({
        include: [
          {
            model: db.Product,
            where: keyword ? { name: { [Op.like]: `%${keyword}%` } } : {},
          },
        ],
      });

      if (!brands) {
        throw new NotFoundError("ERR: can not get brands");
      }

      const totalPages = Math.ceil(products.count / limit);

      return {
        products: products.rows,
        categories,
        brands,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalItems: products.count,
        },
      };
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  static async getProductDetails(productId) {}

  static async getCategories() {}
  static async getProductsByCategory(categoryId) {}

  static async getBrands() {}
  static async getProductsByBrand(brandId) {}

  static async getShopDetails() {}

  static async getFeaturedProduct() {}

  // static async searchingProducts() {
  //   app.get('/api/v1/p/products', async (req, res) => {
  //     const { query, category, brand, minPrice, maxPrice, minRating, inStock, sortBy, order, featured, discounted, new: isNew } = req.query;

  //     let filters = {};

  //     if (query) filters.name = { [Op.like]: `%${query}%` };
  //     if (category) filters.category_id = category;
  //     if (brand) filters.brand_id = brand;
  //     if (minPrice) filters.price = { [Op.gte]: minPrice };
  //     if (maxPrice) filters.price = { ...filters.price, [Op.lte]: maxPrice };
  //     if (minRating) filters.rating = { [Op.gte]: minRating };
  //     if (inStock) filters.inStock = true;
  //     if (featured) filters.featured = true;
  //     if (discounted) filters.discounted = true;
  //     if (isNew) filters.createdAt = { [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }; // Sản phẩm mới nhất trong 30 ngày

  //     const products = await Product.findAll({
  //       where: filters,
  //       order: [[sortBy || 'createdAt', order || 'desc']]
  //     });

  //     res.json(products);
  //   });

  // ----------------------------------------------------------------------------------------------------------------------------

  //   const { Op } = require('sequelize');
  // const db = require('../models'); // Đảm bảo bạn đã import đúng mô hình

  // app.get('/api/v1/p/products', async (req, res) => {
  //   // Lấy các tham số từ query
  //   const { query, category, brand, minPrice, maxPrice, minRating, inStock, sortBy, order, featured, discounted, new: isNew, page = 1, limit = 10 } = req.query;

  //   let filters = {};

  //   // Áp dụng các bộ lọc dựa trên tham số
  //   if (query) filters.name = { [Op.like]: `%${query}%` };
  //   if (category) filters.category_id = category;
  //   if (brand) filters.brand_id = brand;
  //   if (minPrice) filters.price = { [Op.gte]: minPrice };
  //   if (maxPrice) filters.price = { ...filters.price, [Op.lte]: maxPrice };
  //   if (minRating) filters.rating = { [Op.gte]: minRating };
  //   if (inStock) filters.inStock = true;
  //   if (featured) filters.featured = true;
  //   if (discounted) filters.discounted = true;
  //   if (isNew) filters.createdAt = { [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }; // Sản phẩm mới nhất trong 30 ngày

  //   // Tính toán offset cho phân trang
  //   const offset = (page - 1) * limit;

  //   try {
  //     // Tìm sản phẩm với các bộ lọc, phân trang, và sắp xếp
  //     const products = await db.Product.findAndCountAll({
  //       where: filters,
  //       limit: parseInt(limit),
  //       offset: parseInt(offset),
  //       order: [[sortBy || 'createdAt', order || 'desc']]
  //     });

  //     // Tính tổng số trang
  //     const totalPages = Math.ceil(products.count / limit);

  //     // Trả về kết quả
  //     res.json({
  //       data: products.rows,
  //       pagination: {
  //         currentPage: parseInt(page),
  //         totalPages,
  //         totalItems: products.count
  //       }
  //     });

  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     res.status(500).json({ message: 'Internal Server Error' });
  //   }
  // });

  // ----------------------------------------------------------------------------------------------------------------------------

  //   const { Op } = require('sequelize');
  // const db = require('../models');

  // app.get('/api/v1/p/products', async (req, res) => {
  //   const {
  //     query,
  //     category,
  //     brand,
  //     minPrice,
  //     maxPrice,
  //     minRating,
  //     inStock,
  //     sortBy = 'createdAt',
  //     order = 'desc',
  //     featured,
  //     discounted,
  //     new: isNew,
  //     page = 1,
  //     limit = 10
  //   } = req.query;

  //   let filters = {};

  //   // Tìm kiếm theo tên sản phẩm
  //   if (query) filters.name = { [Op.like]: `%${query}%` };

  //   // Lọc theo danh mục
  //   if (category) filters.category_id = category;

  //   // Lọc theo thương hiệu
  //   if (brand) filters.brand_id = brand;

  //   // Lọc theo giá
  //   if (minPrice) filters.price = { [Op.gte]: minPrice };
  //   if (maxPrice) filters.price = { ...filters.price, [Op.lte]: maxPrice };

  //   // Lọc theo đánh giá
  //   if (minRating) filters.rating = { [Op.gte]: minRating };

  //   // Lọc theo trạng thái còn hàng
  //   if (inStock) filters.inStock = true;

  //   // Lọc theo sản phẩm nổi bật
  //   if (featured) filters.featured = true;

  //   // Lọc theo sản phẩm đang giảm giá
  //   if (discounted) filters.discounted = true;

  //   // Lọc theo sản phẩm mới trong 30 ngày
  //   if (isNew) filters.createdAt = { [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) };

  //   const offset = (page - 1) * limit;

  //   try {
  //     // Tìm sản phẩm dựa trên các tiêu chí
  //     const products = await db.Product.findAndCountAll({
  //       where: filters,
  //       limit: parseInt(limit),
  //       offset: parseInt(offset),
  //       order: [[sortBy, order]],
  //       include: [
  //         { model: db.Category, as: 'category' },
  //         { model: db.Brand, as: 'brand' }
  //       ]
  //     });

  //     // Tìm danh mục chứa sản phẩm theo keyword
  //     const categories = await db.Category.findAll({
  //       include: [
  //         {
  //           model: db.Product,
  //           where: query ? { name: { [Op.like]: `%${query}%` } } : {}
  //         }
  //       ]
  //     });

  //     // Tìm thương hiệu chứa sản phẩm theo keyword
  //     const brands = await db.Brand.findAll({
  //       include: [
  //         {
  //           model: db.Product,
  //           where: query ? { name: { [Op.like]: `%${query}%` } } : {}
  //         }
  //       ]
  //     });

  //     const totalPages = Math.ceil(products.count / limit);

  //     return res.json({
  //       products: products.rows,
  //       categories,
  //       brands,
  //       pagination: {
  //         currentPage: parseInt(page),
  //         totalPages,
  //         totalItems: products.count
  //       }
  //     });

  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return res.status(500).json({ message: 'Internal Server Error' });
  //   }
  // });

  //----------------------------------------------------------------------------------------------------------------
  //   const { Op } = require('sequelize');
  // const db = require('../models');

  // app.get('/api/v1/p/products', async (req, res) => {
  //   const {
  //     query,
  //     category,
  //     brand,
  //     minPrice,
  //     maxPrice,
  //     minRating,
  //     inStock,
  //     sortBy = 'createdAt',
  //     order = 'desc',
  //     featured,
  //     discounted,
  //     new: isNew,
  //     page = 1,
  //     limit = 10
  //   } = req.query;

  //   let filters = {};

  //   // Tìm kiếm theo tên sản phẩm
  //   if (query) filters.name = { [Op.like]: `%${query}%` };

  //   // Lọc theo danh mục
  //   if (category) filters.category_id = category;

  //   // Lọc theo thương hiệu
  //   if (brand) filters.brand_id = brand;

  //   // Lọc theo giá
  //   if (minPrice) filters.price = { [Op.gte]: minPrice };
  //   if (maxPrice) filters.price = { ...filters.price, [Op.lte]: maxPrice };

  //   // Lọc theo đánh giá
  //   if (minRating) filters.rating = { [Op.gte]: minRating };

  //   // Lọc theo trạng thái còn hàng
  //   if (inStock) filters.inStock = true;

  //   // Lọc theo sản phẩm nổi bật
  //   if (featured) filters.featured = true;

  //   // Lọc theo sản phẩm đang giảm giá
  //   if (discounted) filters.discounted = true;

  //   // Lọc theo sản phẩm mới trong 30 ngày
  //   if (isNew) filters.createdAt = { [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) };

  //   const offset = (page - 1) * limit;

  //   try {
  //     // Tìm sản phẩm dựa trên các tiêu chí
  //     const products = await db.Product.findAndCountAll({
  //       where: filters,
  //       limit: parseInt(limit),
  //       offset: parseInt(offset),
  //       order: [[sortBy === 'price' ? 'price' : 'createdAt', order]],
  //       include: [
  //         { model: db.Category, as: 'category' },
  //         { model: db.Brand, as: 'brand' }
  //       ]
  //     });

  //     // Tìm danh mục chứa sản phẩm theo keyword
  //     const categories = await db.Category.findAll({
  //       include: [
  //         {
  //           model: db.Product,
  //           where: query ? { name: { [Op.like]: `%${query}%` } } : {}
  //         }
  //       ]
  //     });

  //     // Tìm thương hiệu chứa sản phẩm theo keyword
  //     const brands = await db.Brand.findAll({
  //       include: [
  //         {
  //           model: db.Product,
  //           where: query ? { name: { [Op.like]: `%${query}%` } } : {}
  //         }
  //       ]
  //     });

  //     const totalPages = Math.ceil(products.count / limit);

  //     return res.json({
  //       products: products.rows,
  //       categories,
  //       brands,
  //       pagination: {
  //         currentPage: parseInt(page),
  //         totalPages,
  //         totalItems: products.count
  //       }
  //     });

  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return res.status(500).json({ message: 'Internal Server Error' });
  //   }
  // });

  // }
}

module.exports = PublicService;
