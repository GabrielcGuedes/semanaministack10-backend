const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request,response){
        const{latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
          techs:{// filtro por tecnologia
              $in: techsArray,
          }, 
          location:{// filtro por usuario
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [latitude,longitude],
                },
                $maxDistance:10000,
            },
          },
        });

        return response.json({devs});
    }
}