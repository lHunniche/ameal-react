export const searchIngredient = (searchParam, context) => {
    if(isEmptyParameter(searchParam)) {
        return;
    }
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "ingredients/byName/" + searchParam + "?applicationToken=" + token;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                sortArray(result.data);
                context.setState({
                    isLoaded: true,
                    items: result.data,

                });
            },
            (error) => {
                context.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};

export const searchRecipe = (searchParam, context) => {
    if(isEmptyParameter(searchParam)) {
        return;
    }
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "recipes/byName/" + searchParam + "?applicationToken=" + token;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                sortArray(result.data);
                console.log(result.data);
                context.setState({
                    isLoaded: true,
                    items: result.data,

                });
            },
            (error) => {
                context.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};

export const searchMealplan = (context) => {
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "mealplans/getUserMealplans?applicationToken=" + token;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                context.setState({
                    isLoaded: true,
                    items: result.data,

                });
            },
            (error) => {
                context.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};


const sortArray = (listToSort) => {
    listToSort.sort((a,b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        return 0;
    })
};


export const searchAllIngredients = (context) => {
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "ingredients/byName/å?applicationToken=" + token;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                sortArray(result.data);
                context.setState({
                    isLoaded: true,
                    items: result.data,

                });
            },
            (error) => {
                context.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};

export const searchAllRecipes = (context) => {
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "recipes/byName/å?applicationToken=" + token;
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                sortArray(result.data);
                context.setState({
                    isLoaded: true,
                    items: result.data,

                });
            },
            (error) => {
                context.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};

const isEmptyParameter = (parameter) => {
    return parameter === "";
};