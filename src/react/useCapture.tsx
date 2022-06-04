import React from "react";
import saveAs from "../main/saveas";
import { CaptureOptions } from "../options";
import tagName from "./tagname";

/**
 * You don't need to add extra lines to get element
 * now the time to focus on building program by adding your HTMLElement
 * `id` or `className`
 * @param name  `id` or `className` of your `HTMLElement`
 * How to use this hook
 * ```js
 * import { useScreenshot } from "capture-dom";
 * ```
 * And then use like this
 * ```js
 * const capture = useScreenshot('.center');
 * ```
 * @returns `() => Promise<void>`
 */

const useScreenshot = (name = tagName) => {
  if (typeof name !== "string") {
    throw new Error(`Expected string but got ${typeof name}`);
  }
  // capture Handler as Simple as That
  
  const captureHandler = React.useCallback(
    async (options?: CaptureOptions): Promise<void> => {
      try {
        await saveAs(name, options);
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
    [name]
  );

  /**
   * A basic handler to download image it's so simple and effective
   * @param options - ScreenshotOptions for customize your output image
   */
  const captureImage = React.useMemo(() => captureHandler, [captureHandler]);

  return captureImage;
};

export default useScreenshot;
