const home = (req, res) => {
    
    res.status(200).json({data: {
        page: "home"
    }})
};

module.exports = home;
