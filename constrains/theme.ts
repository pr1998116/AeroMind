import { Platform } from "react-native";

const tintColorLight = '#aee3f5ff';
const tintColorDark = '#ffffffff';

export const Colors = {
    light: {
        text:'#14131311',
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#928a8aff',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        icon: '#969696ff',
        tabIconDefault: '#aaa5a5ff',
        tabIconSelected: '#cfc7c7ff'
    },
};
export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});