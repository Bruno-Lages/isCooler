const ShowVideoService = require('./../services/ShowVideoService');

class ShowVideoController {
    async handle(request, response) {
        const video = await ShowVideoService.execute(request.params.id);

        return response.json(video);
    }
}

module.exports = new ShowVideoController;