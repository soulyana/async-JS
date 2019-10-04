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
/*
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
*/

/**
 * Promises
 * object that keeps track about whether a certain event has happened already or not
 * Determines what happens after the event has happened
 * implements the concept of a future value that we're expecting
 */

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    })
};

getIDs.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
}).then(recipe => {
    console.log(recipe);
    return getRelated('Souly');
}).then(recipe => {
    console.log(recipe);
}).catch(error => {
    console.log('Error!!');
});