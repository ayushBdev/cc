import type { FileRouter } from "@types";

import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } = generateReactHelpers <FileRouter> ();