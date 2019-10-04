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
/*

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
*/

/**
 * From Promises to Async/Await
 */
/*

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

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Souly');
    console.log(related);

    return recipe;
}
getRecipesAW().then(result => console.log(`${result} is the best ever!`));
*/

/**
 * Making AJAX Calls with Fetch and Promises 
 */
/*
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result);
            return result.json();
        }).then(data => {
            //console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} is between ${today.min_temp} and ${today.max_temp}.`);
        }).catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);
*/

/**
 * Making AJAX calls with Fetch and Async/Await
 */

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature in ${data.title} is between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch (error) {
        alert(error);
    }

}
getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
