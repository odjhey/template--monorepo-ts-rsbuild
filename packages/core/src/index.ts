import type { Message } from "@/interfaces/types";

import { Chunky } from "@/domains/domains";

export const core = {
  helloWorld: () => "yawharuxxbbb",
  john: () => "cena",
  log: (message: Message) => {
    return `${message.level}: ${message.message}`;
  },
  a: { Chunky },
  another: { hoho: "hello" },
};
