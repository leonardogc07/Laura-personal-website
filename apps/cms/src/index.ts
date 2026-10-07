import type { Core } from '@strapi/strapi';
import { runBootstrap } from './bootstrap/seed';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await runBootstrap(strapi);
  },
};
