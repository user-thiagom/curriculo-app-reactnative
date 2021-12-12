export const carregarCurriculos = () =>
    fetch("https://curriculo-api-sin.herokuapp.com/curriculo").then((res) => res.json())

export const carregarCurriculoPorId = () => 
    fetch("https://curriculo-api-sin.herokuapp.com/curriculo/1").then((res) => res.json())