/**
 * Created by HP on 25-Dec-17.
 */

/**
 * Compares old and new sets of filters (necessary for decision about sending a new AJAX request)
 * @param oldFilters
 * @param newFilters
 * @returns {boolean}
 */
export const filtersAreSame = (oldFilters, newFilters) => {
    let filtersSame = true;
    let of = {...oldFilters};
    let nf = {...newFilters};

    delete of.allCategories;
    delete nf.allCategories;

    for (const filter in of) {
        if(of[filter] !== nf[filter]){
            filtersSame = false;
            break;
        }
    }
    return filtersSame;
};
