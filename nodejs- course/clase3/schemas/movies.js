const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Sólo string',
    required_error: 'Es requerido el titulo'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'Se necesita una url valida'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Drama', 'Comedy', 'Sci-fi', 'Fantasy', 'Horror', 'Thriller']), {
      required_error: 'Se requiere el genero',
      invalid_type_error: 'Se necesita que esté en un array enum de genre'
    }
  )
})

const validateMovies = (object) => {
  return movieSchema.safeParse(object)
}

const partialMovies = (object) => {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovies,
  partialMovies
}
