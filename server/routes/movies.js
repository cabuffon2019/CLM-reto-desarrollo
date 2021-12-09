import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import MoviesControllers from '../controllers/movies';

const api = 'movies';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

// GET /api/movies
router.get('/', MoviesControllers.find);

// POST /api/movies
router.post('/', MoviesControllers.add);

// POST /api/movies
router.post('/:id', MoviesControllers.findByIdUpdate);

// GET /api/movies/id
// call POST
router.get('/:id', MoviesControllers.findById);






// PUT /api/movies/id
router.put('/:id', MoviesControllers.update);

// DELETE /api/movies/id
router.delete('/:id', MoviesControllers.delete);

export default router;
