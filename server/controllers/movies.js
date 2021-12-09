import Movie from '../models/movies';
import getErrors from '../utils/validateScheme';

class MoviesControllers {

  /**
   * Get all movies
   * @param {ctx} Koa Context
   */
  async find(ctx) {
    ctx.body = await Movie.find();
  }

  /**
   * Find a movie
   * @param {ctx} Koa Context
   */
  async findById(ctx) {
    try {
      const movie = await Movie.findById(ctx.params.id);
      if (!movie) {
        ctx.throw(404);
      }
      ctx.body = movie;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  /**
   * Find and Update a movie
   * @param {ctx} Koa Context
   */
  async findByIdUpdate(ctx) {
    try {
      const movie = await Movie.findById(ctx.params.id);
      if (!movie) {
        ctx.throw(404);
      }
      movie.Plot = movie.Plot.replace(ctx.request.body.find, ctx.request.body.replace);
      ctx.body = movie;
      const movie2 = await Movie.findByIdAndUpdate(
        ctx.params.id,
        ctx.body
      );

    } catch (err) {
      console.log(getErrors(err));
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  /**
 * Update a movie
 * @param {ctx} Koa Context
 */
  async update(ctx) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        ctx.params.id,
        ctx.request.body
      );
      if (!movie) {
        ctx.throw(404);
      }
      ctx.body = movie;
    } catch (err) {
      console.log(getErrors(err));
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  /**
   * Add a movie
   * @param {ctx} Koa Context
   */
  async add(ctx) {
    try {
      const movie = await new Movie(ctx.request.body).save();
      ctx.body = movie;
    } catch (err) {
      console.log(getErrors(err));
      ctx.throw(422);
    }
  }

  /**
   * Delete a movie
   * @param {ctx} Koa Context
   */
  async delete(ctx) {
    try {
      const movie = await Movie.findByIdAndRemove(ctx.params.id);
      if (!movie) {
        ctx.throw(404);
      }
      ctx.body = movie;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }
}

export default new MoviesControllers();
