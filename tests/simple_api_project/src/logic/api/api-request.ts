import { apiGetMethod } from "../../infra/api/apiHandle";
import { SpellResponse } from "./response/spell-response";


export const getSpell = async (spellID:string):Promise<SpellResponse>=>{
        return (await apiGetMethod(`https://wizard-world-api.herokuapp.com/Spells/${spellID}`)).json()
    }
