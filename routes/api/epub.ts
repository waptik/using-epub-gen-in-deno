import { Handlers } from "$fresh/server.ts";

import { download } from "@utils/download.ts";

export const handler: Handlers = {
  async GET(_) {
    const uuid = crypto.randomUUID();

    await download.epub();

    return new Response(JSON.stringify({ uuid }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
