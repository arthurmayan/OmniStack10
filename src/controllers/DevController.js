const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Index, show, store, update, destroy

// index = lista
// show = unico
// store = criar
// update = alterar
// destroy = deletar

module.exports = {
    async index(request, response)
    {
        const devs = await Dev.find();

        return response.json(devs);

    },

    async store(request, response){
        const { github, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne ({ github });

        if (!dev)
        {
            const apiResponse = await axios.get(`https://api.github.com/users/${github}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            console.log(name, avatar_url, bio, github);

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);

        //update
        //destroy

        
        //return response.json({ message: 'Hello'});
    }
} 


