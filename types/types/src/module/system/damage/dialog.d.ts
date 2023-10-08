/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { DamageCategoryUnique, DamageFormulaData, DamageRollContext, DamageType } from "./types.ts";
/**
 * Dialog for excluding certain modifiers before rolling damage.
 * @category Other
 */
declare class DamageModifierDialog extends Application {
    #private;
    formulaData: DamageFormulaData;
    context: DamageRollContext;
    /** The base damage type of this damage roll */
    baseDamageType: DamageType;
    /** Is this critical damage? */
    isCritical: boolean;
    /** Was the roll button pressed? */
    isRolled: boolean;
    constructor(params: DamageDialogParams);
    static get defaultOptions(): ApplicationOptions;
    get title(): string;
    getData(): Promise<DamageDialogData>;
    activateListeners($html: JQuery): void;
    /** Show the damage roll dialog and wait for it to close */
    resolve(): Promise<boolean>;
    close(options?: {
        force?: boolean;
    }): Promise<void>;
    protected _getHeaderButtons(): ApplicationHeaderButton[];
    /** Overriden to add some additional first-render behavior */
    protected _injectHTML($html: JQuery<HTMLElement>): void;
}
interface DamageDialogParams {
    formulaData: DamageFormulaData;
    context: DamageRollContext;
}
interface BaseData {
    label: string;
    enabled: boolean;
    ignored: boolean;
    critical: boolean | null;
    damageType: string | null;
    typeLabel: string | null;
    category: DamageCategoryUnique | string | null;
    show: boolean;
    icon: string;
}
interface DialogDiceData extends BaseData {
    diceLabel: string;
}
interface ModifierData extends BaseData {
    type: string | null;
    modifier: number;
    hideIfDisabled: boolean;
}
interface DamageDialogData {
    appId: string;
    baseFormula: string;
    modifiers: ModifierData[];
    dice: DialogDiceData[];
    isCritical: boolean;
    hasVisibleDice: boolean;
    hasVisibleModifiers: boolean;
    damageTypes: typeof CONFIG.PF2E.damageTypes;
    damageSubtypes: Pick<ConfigPF2e["PF2E"]["damageCategories"], DamageCategoryUnique>;
    rollModes: Record<RollMode, string>;
    rollMode: RollMode | "roll" | undefined;
    showRollDialogs: boolean;
    formula: string;
}
export { DamageModifierDialog };
