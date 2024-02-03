type loginPropsType = {
    email: string;
    password: string;
}
export const sendLoginRequest = (loginProps: loginPropsType) => {
    return fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(loginProps)
    })
        .then(res => res.json())
        .then(data => data)
}

