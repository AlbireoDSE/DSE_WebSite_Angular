import { GalleryImage } from "./GalleryImage";
import { ObjectSpecs } from "./ObjectSpecs";
import { TechnicalSpecs } from "./TechnicalSpecs";

export class DetailedImage extends GalleryImage{
    object_specs: ObjectSpecs;
    technical_specs: TechnicalSpecs;
}