import createSvg from './createsvg';
import download from '../fileSaver';
import { CaptureOptions } from '../options';
import createCanvas from './createcanvas';
import randomName from './randomname';

/**
 * Download direct Image of your html div or page using node Selectors only
 * @param nodeSelector
 * @param options
 */
const saveAs = async (
  nodeSelector: string,
  options: CaptureOptions = {}
): Promise<any> => {
  // For SSR
  if (typeof window === 'undefined') {
    return;
  }
  const element = document.getElementsByTagName(nodeSelector)[0] as HTMLElement;
  const { imageFormat } = options;
  try {
    if (imageFormat === 'svg') {
      const svg: SVGSVGElement = await createSvg(element, options);
      const svgBlob = new Blob([svg.outerHTML], { type: 'text/svg+xml' });
      download(svgBlob, randomName(imageFormat));
    } else {
      const canvas = await createCanvas(element, options);
      canvas.toBlob((blob: Blob) => {
        download(blob, randomName(imageFormat));
      }, `image/${imageFormat}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export default saveAs;

