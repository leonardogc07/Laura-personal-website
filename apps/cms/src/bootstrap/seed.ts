import type { Core } from '@strapi/strapi';

const CATEGORIES = [
  {
    name: 'Yoga',
    slug: 'yoga',
    description: 'Mindful movement, breathwork, and everyday practice.',
  },
  {
    name: 'Sewing',
    slug: 'sewing',
    description: 'Handmade garments, mending, and slow fashion.',
  },
  {
    name: 'Natural Fabric Coloring',
    slug: 'natural-fabric-coloring',
    description: 'Plant dyes, pigments, and gentle color craft.',
  },
  {
    name: 'Vegan Lifestyle',
    slug: 'vegan-lifestyle',
    description: 'Plant-based living, recipes, and ethical choices.',
  },
];

const AUTHOR = {
  name: 'Laura',
  slug: 'laura',
  role: 'Writer & Maker',
  bio: 'Laura shares a gentle life built around yoga, handmade sewing, natural dyes, and plant-based living. She believes small daily rituals—breath, thread, color, and food—can make a home feel more alive.',
  email: 'laura@example.com',
};

type SeedPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  categorySlug: string;
};

const POSTS: SeedPost[] = [
  {
    title: 'Morning Flow for Busy Days',
    slug: 'morning-flow-for-busy-days',
    excerpt:
      'A short yoga sequence you can finish before coffee—enough to wake the spine, open the hips, and settle the mind.',
    content: `## Start where you are

You do not need an hour on the mat to feel different. This gentle morning flow is designed for weekdays when time is thin but your body still asks for attention.

### Sequence (12–15 minutes)

1. **Child's pose** — three slow breaths, forehead soft on the mat.
2. **Cat–cow** — eight rounds, matching breath to movement.
3. **Downward dog** — hold for five breaths, pedal the heels.
4. **Low lunge** — both sides, hands on the front thigh.
5. **Standing forward fold** — soft knees, heavy head.
6. **Mountain pose** — stand tall, notice your breath.

Close seated with a hand on your heart. Carry that quiet into the rest of your day.`,
    publishedDate: '2026-09-12',
    categorySlug: 'yoga',
  },
  {
    title: 'Breath Before Asana',
    slug: 'breath-before-asana',
    excerpt:
      'Why spending two minutes with your breath can make every pose feel more grounded and kind.',
    content: `## The quiet beginning

Before shapes and stretches, there is breath. When we skip it, practice becomes a checklist. When we honor it, the mat becomes a place to arrive.

Try this: sit comfortably, lengthen the spine, and count four counts in, six counts out. After ten rounds, begin your usual sequence. You may notice less rushing and more ease—especially in the places that usually grip.`,
    publishedDate: '2026-08-28',
    categorySlug: 'yoga',
  },
  {
    title: 'Mending a Favorite Linen Shirt',
    slug: 'mending-a-favorite-linen-shirt',
    excerpt:
      'Visible mending that keeps soft linen in rotation—plus a simple stitch guide for underarm tears.',
    content: `## Keep what you love

Linen softens with every wash, which is why a worn shirt can feel irreplaceable. When a seam opens under the arm, you do not have to retire it.

### What you need

- Matching or contrasting thread
- A sharp needle
- A small scrap of lightweight fabric for reinforcement

Press the tear flat, place the scrap behind the hole, and use a simple running stitch or sashiko-style pattern. The repair becomes part of the shirt's story—and keeps one more garment out of the landfill.`,
    publishedDate: '2026-09-20',
    categorySlug: 'sewing',
  },
  {
    title: 'Sewing a Simple Tote from Scrap Fabric',
    slug: 'sewing-a-simple-tote-from-scrap-fabric',
    excerpt:
      'Turn leftover cotton into a sturdy everyday tote with French seams and a reinforced base.',
    content: `## Scrap becomes useful

Leftover rectangles from garment projects are perfect for totes. Cut two body panels, two strap strips, and a base rectangle. French seams keep the inside tidy; a double layer at the bottom adds strength for market days.

Finished size tip: aim for roughly 14" wide by 15" tall—roomy without feeling bulky on the shoulder.`,
    publishedDate: '2026-07-15',
    categorySlug: 'sewing',
  },
  {
    title: 'Onion Skin Dye for Soft Amber Cloth',
    slug: 'onion-skin-dye-for-soft-amber-cloth',
    excerpt:
      'Kitchen scraps can color cotton a warm amber. Here is a gentle vat method for beginners.',
    content: `## Color from the kitchen

Save yellow onion skins for a week or two. Simmer them gently until the water turns a deep tea color, strain, then introduce pre-wetted, mordanted cotton.

### Notes for success

- Use a stainless or enamel pot dedicated to dyeing.
- Keep the heat low—boiling can muddy soft tones.
- Rinse until the water runs clear, then dry out of direct sun.

The result is a soft amber that pairs beautifully with cream and charcoal in the wardrobe.`,
    publishedDate: '2026-09-05',
    categorySlug: 'natural-fabric-coloring',
  },
  {
    title: 'Avocado Pits for Dusty Rose',
    slug: 'avocado-pits-for-dusty-rose',
    excerpt:
      'A patient dye bath that turns pits and peels into a dusty rose—perfect for scarves and scrap bundles.',
    content: `## Slow color

Avocado pits and peels need time. Simmer gently for an hour, then let the bath rest overnight if you can. Fabric introduced the next day often takes a clearer, softer pink.

This is a wonderful weekend project: start the vat on Saturday morning, dye on Sunday, and hang cloth to dry while you sew or cook.`,
    publishedDate: '2026-06-22',
    categorySlug: 'natural-fabric-coloring',
  },
  {
    title: 'A Week of Simple Plant-Based Lunches',
    slug: 'a-week-of-simple-plant-based-lunches',
    excerpt:
      'Five unfussy vegan lunches that pack well—grain bowls, soups, and a wrap that does not fall apart.',
    content: `## Lunch without fuss

A vegan lunch does not need to be elaborate. Batch a pot of grains, roast a tray of vegetables, and keep a jar of tahini lemon dressing in the fridge.

### Ideas

- Chickpea salad with cucumber, herbs, and olive oil
- Lentil soup with greens stirred in at the end
- Rice bowl with roasted squash and toasted seeds
- Hummus wrap with pickled onions
- Leftover pasta tossed with olive oil, garlic, and spinach

Prep once, eat kindly all week.`,
    publishedDate: '2026-09-28',
    categorySlug: 'vegan-lifestyle',
  },
  {
    title: 'Building a Gentle Pantry',
    slug: 'building-a-gentle-pantry',
    excerpt:
      'Staples that make plant-based cooking feel easy: legumes, grains, spices, and a few bright condiments.',
    content: `## Stock what you will actually use

A gentle pantry is not overflowing—it is intentional. Keep dried lentils, chickpeas, oats, rice, olive oil, vinegar, salt, and a short list of spices you love.

Add one bright condiment you reach for often (mustard, chili crisp, or a good tahini). When dinner feels hard, those basics become soup, toast toppings, or a quick salad without a special shopping trip.`,
    publishedDate: '2026-08-10',
    categorySlug: 'vegan-lifestyle',
  },
];

async function ensurePublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    strapi.log.warn('Public role not found; skipping permission bootstrap.');
    return;
  }

  const actions = [
    'api::post.post.find',
    'api::post.post.findOne',
    'api::category.category.find',
    'api::category.category.findOne',
    'api::author.author.find',
    'api::author.author.findOne',
  ];

  for (const action of actions) {
    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action,
          role: publicRole.id,
        },
      });
    }
  }

  strapi.log.info('Public read permissions ensured for posts, categories, and authors.');
}

async function ensureFirstAdmin(strapi: Core.Strapi) {
  const adminCount = await strapi.db.query('admin::user').count();
  if (adminCount > 0) {
    return;
  }

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const firstname = process.env.ADMIN_FIRSTNAME || 'Laura';
  const lastname = process.env.ADMIN_LASTNAME || 'Admin';

  if (!email || !password) {
    strapi.log.info(
      'No admin user yet. Open http://localhost:1337/admin to create the first admin, or set ADMIN_EMAIL and ADMIN_PASSWORD in apps/cms/.env before starting.'
    );
    return;
  }

  const superAdminRole = await strapi.db.query('admin::role').findOne({
    where: { code: 'strapi-super-admin' },
  });

  if (!superAdminRole) {
    strapi.log.warn('Super admin role missing; cannot bootstrap admin user.');
    return;
  }

  await strapi.admin.services.user.create({
    email,
    password,
    firstname,
    lastname,
    registrationToken: null,
    isActive: true,
    roles: [superAdminRole.id],
  });

  strapi.log.info(`Bootstrapped first admin user: ${email}`);
}

async function seedContent(strapi: Core.Strapi) {
  const existingPosts = await strapi.db.query('api::post.post').count();
  if (existingPosts > 0) {
    strapi.log.info('Posts already exist; skipping seed.');
    return;
  }

  const categoryIds: Record<string, number> = {};

  for (const category of CATEGORIES) {
    const created = await strapi.db.query('api::category.category').create({
      data: category,
    });
    categoryIds[category.slug] = created.id;
  }

  const author = await strapi.db.query('api::author.author').create({
    data: AUTHOR,
  });

  for (const post of POSTS) {
    await strapi.documents('api::post.post').create({
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        publishedDate: post.publishedDate,
        category: categoryIds[post.categorySlug],
        author: author.id,
      },
      status: 'published',
    });
  }

  strapi.log.info(`Seeded ${CATEGORIES.length} categories, 1 author, and ${POSTS.length} posts.`);
}

export async function runBootstrap(strapi: Core.Strapi) {
  await ensurePublicPermissions(strapi);
  await ensureFirstAdmin(strapi);
  await seedContent(strapi);
}
