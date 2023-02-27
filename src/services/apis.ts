import axios from "axios";


export async function IdentificationVales(IdentificationNumber: string) {
    const api = await axios.get(`https://www.sepe.gov.ao/ao/actions/bi.ajcall.php?bi=${IdentificationNumber}`);
    if(api.data.sucess != true){
        return [];
    }
    return api.data.data;
}