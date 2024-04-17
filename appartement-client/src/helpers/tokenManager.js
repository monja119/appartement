
export const saveToken = (token) => {
    localStorage.setItem('ludomission', token)
    return true;
}


export const removeToken = (token) => {
    localStorage.removeItem('ludomission', token)
}

export const getToken = () => {
    const token = localStorage.getItem('ludomission')

    if (token === null) {
        return null
    } else {
        return token
    }
}
