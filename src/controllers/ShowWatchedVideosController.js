const ShowWatchedVideosService = require('./../services/ShowWatchedVideosService');

class ShowWatchedVideosController {
    async handle(request, response) {
        const room = await ShowWatchedVideosService.execute(request.params.code, request.userId);
        return response.json(room);
    }
}

module.exports = new ShowWatchedVideosController;