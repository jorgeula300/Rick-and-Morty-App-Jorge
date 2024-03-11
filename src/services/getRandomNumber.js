const getRandomNumber = limit => {
    const numero = Math.floor(Math.random() * limit) + 1
    return numero

}

export default getRandomNumber;