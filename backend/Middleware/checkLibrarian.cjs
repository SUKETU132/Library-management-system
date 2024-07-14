module.exports = function(req, res, next) {
    if (req.user && req.user.role === 'librarian') {
        next(); 
    } else {
        res.status(403).json({ message: 'Access denied. Only librarians can perform this action.' });
    }
};
