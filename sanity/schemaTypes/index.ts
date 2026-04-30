import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { galleryItem } from './galleryItem'
import { product } from './product'
import { teamMember } from './teamMember'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, galleryItem, product, teamMember, testimonial],
}
