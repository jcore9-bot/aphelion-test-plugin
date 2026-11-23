import type { ServerPlugin } from "@aphelion/plugin-sdk";
import manifest from "../aphelion-plugin.json" with { type: "json" };

export default {
  async start(ctx) {
    ctx.log(`aphelion-test-plugin ${manifest.version} started`);
    await ctx.events.subscribe("approval.requested", (data) => {
      ctx.log(`an approval was requested: ${JSON.stringify(data)}`);
    });
  },
} satisfies ServerPlugin;
