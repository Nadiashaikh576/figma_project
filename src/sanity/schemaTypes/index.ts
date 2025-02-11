import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import order from './order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema, order],
}
