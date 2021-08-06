const IndexVideosService = require('./../services/IndexVideosService');

class IndexVideosController {
    async handle(request, response) {
        const videos = await IndexVideosService.execute(request.params.id);

        return response.json(videos);
    }
}

module.exports = new IndexVideosController;