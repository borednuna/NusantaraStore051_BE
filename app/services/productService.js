const productRepository = require('../repositories/productRepository');

const getProductById = async (id) => {
    try {
        const product = productRepository.getProductById(id);
        return product;
    }
    catch (error) {
        return error;
    }
}

const getProductByName = async (name) => {
    try {
        const product = productRepository.getProductByName(name);
        return product;
    }
    catch (error) {
        return error;
    }
}

const getProductDetail = async (id) => {
    try {
        const product = productRepository.getProductDetail(id);
        return product;
    }
    catch (error) {
        return error;
    }
}

const getProductImages = async (id) => {
    try {
        const product = productRepository.getProductImages(id);
        return product;
    }
    catch (error) {
        return error;
    }
}

const updateProduct = async (id, data) => {
    try {
        const product = productRepository.updateProduct(id, data);
        return product;
    }
    catch (error) {
        return error;
    }
}

const createProduct = async (data) => {
    try {
        const product = productRepository.createProduct(data);
        return product;
    }
    catch (error) {
        return error;
    }
}

const deleteProduct = async (id) => {
    try {
        const product = productRepository.deleteProduct(id);
        return product;
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    getProductById,
    getProductByName,
    getProductDetail,
    getProductImages,
    updateProduct,
    createProduct,
    deleteProduct
}
