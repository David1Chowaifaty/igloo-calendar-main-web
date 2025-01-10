import { Variation } from "../../models/property";
export declare class VariationSorter {
    sortVariations(variations: Variation[]): Variation[];
    private mergeSort;
    private merge;
    private compareVariations;
}
