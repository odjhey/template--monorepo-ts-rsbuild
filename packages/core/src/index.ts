import type { Message } from "@/interfaces/types";

import { Chunky } from "@/domains/domains";

export const core = {
  helloWorld: () => "helloWorld",
  john: () => "cena",
  log: (message: Message) => {
    return `${message.level}: ${message.message}`;
  },
  a: { Chunky },
};
