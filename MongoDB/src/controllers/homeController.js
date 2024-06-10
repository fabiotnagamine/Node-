const HomeModel = require('../models/HomeModel');



HomeModel.create({
    title: 'test title',
    description: 'any'
})
    .then(data => console.log(data))
    .catch(e => console.log(e));


exports.homePage = (request, response) => {
    request.flash({ info: 'Error' });
    request.session.usuario = { name: 'N', connected: true}
    response.render('view', {
        name: 'Fabio',
        numbers: [1, 2, 3, 4]
    });
};
