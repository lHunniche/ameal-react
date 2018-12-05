export const searchIngredient = (searchParam, context) => {
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "ingredients/byName/" + searchParam + "?applicationToken=" + token;
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

export const searchRecipe = (searchParam, context) => {
    let rootUrl = "https://ameal.io:8080/";
    let token = "TOKEN@1";
    let url = rootUrl + "recipes/byName/" + searchParam + "?applicationToken=" + token;
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