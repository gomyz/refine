import { createBrowserClient } from "@supabase/ssr";
import {SUPABASE_KEY, SUPABASE_URL} from "@utils/supabase/constants";

export const supabaseBrowserClient = createBrowserClient(
    SUPABASE_URL,
    SUPABASE_KEY,
  {
    db: {
      schema: "public",
    },
  }
);

// export const supabaseBrowserClient = createBrowserClient(
//     process.env.SUPABASE_URL as string,
//     process.env.SUPABASE_KEY as string,
//     {
//         db: {
//             schema: "public",
//         },
//     }
// );

