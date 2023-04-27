const addressRepository = require('../repositories/addressRepository');

const createAddress = async (data) => {
    try {
        const address = addressRepository.createAddress(data);
        return address;
    }
    catch (error) {
        return error;
    }
}

const updateAddress = async (id, data) => {
    try {
        const address = addressRepository.updateAddress(id, data);
        return address;
    }
    catch (error) {
        return error;
    }
}

const deleteAddress = async (id) => {
    try {
        const address = addressRepository.deleteAddress(id);
        return address;
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    createAddress,
    updateAddress,
    deleteAddress
}
