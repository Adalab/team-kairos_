const getDevelopers = () => {
    return fetch('http://kandidates-146710.firebaseio.com/')
        .then(response => response.json())

}
export { getDevelopers };