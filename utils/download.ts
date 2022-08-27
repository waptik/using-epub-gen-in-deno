import epubgen from "npm:epub-gen-memory@1.0.9";

import { contentAlice, optionsAlice } from "@utils/aliceData.ts"; // modified copy of https://github.com/cpiber/epub-gen-memory/blob/master/tests/aliceData.ts

class Download {
  private uuid: string;

  constructor() {
    this.uuid = crypto.randomUUID();
  }

  async epub() {
    const content = await epubgen(optionsAlice, contentAlice);
    await Deno.writeFile(
      `novels/alice_${this.uuid}.epub`,
      Buffer.from(content),
    );

    optionsAlice.numberChaptersInTOC = false;
    const content2 = await epubgen(optionsAlice, contentAlice);
    await Deno.writeFile(
      `novels/alice_${this.uuid}_nonum.epub`,
      Buffer.from(content2),
    );
  }
}

export const download = new Download();
