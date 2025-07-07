import { Theme } from "@/src/theme/theme";
import { createBox } from "@shopify/restyle";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;