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
    response.render('view');
};
