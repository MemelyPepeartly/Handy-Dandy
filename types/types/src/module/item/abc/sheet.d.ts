/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { AttributeString } from "@actor/types.ts";
import type { AncestryPF2e, BackgroundPF2e, ClassPF2e } from "@item";
import { ABCFeatureEntryData } from "@item/abc/data.ts";
import { ItemSheetDataPF2e, ItemSheetPF2e } from "@item/sheet/index.ts";
declare abstract class ABCSheetPF2e<TItem extends ABCItem> extends ItemSheetPF2e<TItem> {
    #private;
    static get defaultOptions(): DocumentSheetOptions;
    getData(options?: Partial<DocumentSheetOptions>): Promise<ABCSheetData<TItem>>;
    protected getLocalizedAbilities(traits: {
        value: AttributeString[];
    }): {
        [key: string]: string;
    };
    protected _onDrop(event: ElementDragEvent): Promise<void>;
    activateListeners($html: JQuery): void;
}
interface ABCSheetData<TItem extends ABCItem> extends ItemSheetDataPF2e<TItem> {
    features: {
        key: string;
        item: FeatureSheetData;
    }[];
}
type ABCItem = AncestryPF2e | BackgroundPF2e | ClassPF2e;
interface FeatureSheetData extends ABCFeatureEntryData {
    fromWorld: boolean;
}
export { ABCSheetPF2e, type ABCSheetData };
