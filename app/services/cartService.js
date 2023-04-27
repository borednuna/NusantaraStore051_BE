const cartRepository = require("../repositories/cartRepository")

const getCartById = async (id) => {
    try {
        const cart = cartRepository.getCartById(id);
        return cart;
    }
    catch (error) {
        return error;
    }
}

const createCart = async (data) => {
    try {
        const cart = cartRepository.createCart(data);
        return cart;
    }
    catch (error) {
        return error;
    }
}

const deleteCart = async (id) => {
    try {
        const cart = cartRepository.deleteCart(id);
        return cart;
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getCartById,
    createCart,
    deleteCart
}
