const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const data = {
        id: user.id
    };
    const signature = 'CampusBuy';
    const expiration = '6h';
    return jwt.sign({ data }, signature, { expiresIn: expiration });
}

const verifyToken = (token) => {
    let verified = false;
    jwt.verify(token, 'CampusBuy', (err, res) => {
        if (err) {
        } else {
            verified = true;
        }
    });
    return verified;
}


exports.generateToken = generateToken;
exports.verifyToken = verifyToken;