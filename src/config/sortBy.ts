import { Fridge } from "@/interfaces/fridge";

export const alphabet = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.sort((a,b) => {
        const nameA = a.name.toUpperCase().replace(' ', '');
        const nameB = b.name.toUpperCase().replace(' ', '');
        
        if(nameA < nameB) {
            return -1;
        }

        if(nameA > nameB) {
            return 1;
        }

        return 0;
    });
}

export const alphabetReverse = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.sort((a,b) => {
        const nameA = a.name.toUpperCase().replace(' ', '');
        const nameB = b.name.toUpperCase().replace(' ', '');
        
        if(nameA < nameB) {
            return 1;
        }

        if(nameA > nameB) {
            return -1;
        }

        return 0;
    });
}