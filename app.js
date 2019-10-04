// Async ex
/*
const second = () => {
    setTimeout(() => {
        console.log('Async hey there');
    }, 2000);
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first();
*/

/**
 * the old way: Async js with callbacks
 */
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}
getRecipe();
